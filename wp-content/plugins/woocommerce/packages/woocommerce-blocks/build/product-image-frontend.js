(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[3706,5432],{4304:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var o=n(721),r=n(9307),l=n(5736),a=n(4184),s=n.n(a),c=n(4617),i=n(2864),u=n(3611),d=n(5918),p=n(4498);n(8854);let g=function(e){return e.SINGLE="single",e.THUMBNAIL="thumbnail",e}({});const f=e=>(0,r.createElement)("img",{...e,src:c.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),m=({image:e,loaded:t,showFullSize:n,fallbackAlt:o,width:l,scale:a,height:s,aspectRatio:c})=>{const{thumbnail:i,src:u,srcset:d,sizes:p,alt:g}=e||{},m={alt:g||o,hidden:!t,src:i,...n&&{src:u,srcSet:d,sizes:p}},h={height:s,width:l,objectFit:a,aspectRatio:c};return(0,r.createElement)(r.Fragment,null,m.src&&(0,r.createElement)("img",{style:h,"data-testid":"product-image",...m}),!e&&(0,r.createElement)(f,{style:h}))},h=(0,o.withProductDataContext)((e=>{const{className:t,imageSizing:n=g.SINGLE,showProductLink:o=!0,showSaleBadge:a,saleBadgeAlign:c="right",height:h,width:y,scale:v,aspectRatio:b,...k}=e,w=(0,u.F)(e),{parentClassName:S}=(0,i.useInnerBlockLayoutContext)(),{product:N,isLoading:E}=(0,i.useProductDataContext)(),{dispatchStoreEvent:C}=(0,d.n)();if(!N.id)return(0,r.createElement)("div",{className:s()(t,"wc-block-components-product-image",{[`${S}__product-image`]:S},w.className),style:w.style},(0,r.createElement)(f,null));const L=!!N.images.length,x=L?N.images[0]:null,F=o?"a":r.Fragment,_=(0,l.sprintf)(/* translators: %s is referring to the product name */
(0,l.__)("Link to %s","woocommerce"),N.name),A={href:N.permalink,...!L&&{"aria-label":_},onClick:()=>{C("product-view-link",{product:N})}};return(0,r.createElement)("div",{className:s()(t,"wc-block-components-product-image",{[`${S}__product-image`]:S},w.className),style:w.style},(0,r.createElement)(F,{...o&&A},!!a&&(0,r.createElement)(p.default,{align:c,...k}),(0,r.createElement)(m,{fallbackAlt:N.name,image:x,loaded:!E,showFullSize:n!==g.THUMBNAIL,width:y,height:h,scale:v,aspectRatio:b})))})),y={showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:g.SINGLE},productId:{type:"number",default:0},isDescendentOfQueryLoop:{type:"boolean",default:!1},isDescendentOfSingleProductBlock:{type:"boolean",default:!1},width:{type:"string"},height:{type:"string"},scale:{type:"string",default:"cover"},aspectRatio:{type:"string"}},v=(0,o.withFilteredAttributes)(y)(h)},4498:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Block:()=>d,default:()=>p});var o=n(9307),r=n(5736),l=n(4184),a=n.n(l),s=n(711),c=n(2864),i=n(3611),u=n(721);n(1314);const d=e=>{const{className:t,align:n}=e,l=(0,i.F)(e),{parentClassName:u}=(0,c.useInnerBlockLayoutContext)(),{product:d}=(0,c.useProductDataContext)();if(!(d.id&&d.on_sale||e.isDescendentOfSingleProductTemplate))return null;const p="string"==typeof n?`wc-block-components-product-sale-badge--align-${n}`:"";return(0,o.createElement)("div",{className:a()("wc-block-components-product-sale-badge",t,p,{[`${u}__product-onsale`]:u},l.className),style:l.style},(0,o.createElement)(s.Label,{label:(0,r.__)("Sale","woocommerce"),screenReaderLabel:(0,r.__)("Product on sale","woocommerce")}))},p=(0,u.withProductDataContext)(d)},3611:(e,t,n)=>{"use strict";n.d(t,{F:()=>i});var o=n(4184),r=n.n(o),l=n(7884),a=n(2646),s=n(1473),c=n(2661);const i=e=>{const t=(e=>{const t=(0,l.Kn)(e)?e:{style:{}};let n=t.style;return(0,a.H)(n)&&(n=JSON.parse(n)||{}),(0,l.Kn)(n)||(n={}),{...t,style:n}})(e),n=(0,c.vc)(t),o=(0,c.l8)(t),i=(0,c.su)(t),u=(0,s.f)(t);return{className:r()(u.className,n.className,o.className,i.className),style:{...u.style,...n.style,...o.style,...i.style}}}},1473:(e,t,n)=>{"use strict";n.d(t,{f:()=>l});var o=n(7884),r=n(2646);const l=e=>{const t=(0,o.Kn)(e.style.typography)?e.style.typography:{},n=(0,r.H)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:n,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}}},2661:(e,t,n)=>{"use strict";n.d(t,{l8:()=>d,su:()=>p,vc:()=>u});var o=n(4184),r=n.n(o),l=n(9784),a=n(2289),s=n(7884);function c(e={}){const t={};return(0,a.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function i(e,t){return e&&t?`has-${(0,l.o)(t)}-${e}`:""}function u(e){var t,n,o,l,a,u,d;const{backgroundColor:p,textColor:g,gradient:f,style:m}=e,h=i("background-color",p),y=i("color",g),v=function(e){if(e)return`has-${e}-gradient-background`}(f),b=v||(null==m||null===(t=m.color)||void 0===t?void 0:t.gradient);return{className:r()(y,v,{[h]:!b&&!!h,"has-text-color":g||(null==m||null===(n=m.color)||void 0===n?void 0:n.text),"has-background":p||(null==m||null===(o=m.color)||void 0===o?void 0:o.background)||f||(null==m||null===(l=m.color)||void 0===l?void 0:l.gradient),"has-link-color":(0,s.Kn)(null==m||null===(a=m.elements)||void 0===a?void 0:a.link)?null==m||null===(u=m.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:c({color:(null==m?void 0:m.color)||{}})}}function d(e){var t;const n=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:n,style:o}=e,l=n?i("border-color",n):"";return r()({"has-border-color":!!n||!(null==o||null===(t=o.border)||void 0===t||!t.color),[l]:!!l})}(e),style:c({border:n})}}function p(e){var t;return{className:void 0,style:c({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}},8519:(e,t,n)=>{"use strict";n.d(t,{F:()=>o});const o=e=>null===e},7884:(e,t,n)=>{"use strict";n.d(t,{$n:()=>l,Kn:()=>r});var o=n(8519);const r=e=>!(0,o.F)(e)&&e instanceof Object&&e.constructor===Object;function l(e,t){return r(e)&&t in e}},2646:(e,t,n)=>{"use strict";n.d(t,{H:()=>o});const o=e=>"string"==typeof e},1290:(e,t,n)=>{"use strict";n.d(t,{$:()=>l});var o=n(7582),r=n(307);function l(e,t){return void 0===t&&(t={}),(0,r.B)(e,(0,o.pi)({delimiter:"."},t))}},8854:()=>{},1314:()=>{},9562:(e,t,n)=>{"use strict";function o(e){return e.toLowerCase()}n.d(t,{U:()=>o})},307:(e,t,n)=>{"use strict";n.d(t,{B:()=>a});var o=n(9562),r=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],l=/[^A-Z0-9]+/gi;function a(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,a=void 0===n?r:n,c=t.stripRegexp,i=void 0===c?l:c,u=t.transform,d=void 0===u?o.U:u,p=t.delimiter,g=void 0===p?" ":p,f=s(s(e,a,"$1\0$2"),i,"\0"),m=0,h=f.length;"\0"===f.charAt(m);)m++;for(;"\0"===f.charAt(h-1);)h--;return f.slice(m,h).split("\0").map(d).join(g)}function s(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}},9784:(e,t,n)=>{"use strict";n.d(t,{o:()=>l});var o=n(7582),r=n(1290);function l(e,t){return void 0===t&&(t={}),(0,r.$)(e,(0,o.pi)({delimiter:"-"},t))}},7582:(e,t,n)=>{"use strict";n.d(t,{pi:()=>o});var o=function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);