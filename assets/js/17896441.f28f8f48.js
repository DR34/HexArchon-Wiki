"use strict";(self.webpackChunkhexarchon_wiki=self.webpackChunkhexarchon_wiki||[]).push([[918],{7684:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),l=a(7294),r=a(6010),s=a(2802),c=a(8596),o=a(5281),i=a(9960),d=a(4996),m=a(5999);function u(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function p(e){let{children:t,href:a,isLast:n}=e;const r="breadcrumbs__link";return n?l.createElement("span",{className:r,itemProp:"name"},t):a?l.createElement(i.Z,{className:r,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function h(e){let{children:t,active:a,index:s,addMicrodata:c}=e;return l.createElement("li",(0,n.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(s+1)}))}function E(){const e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",b.breadcrumbsItemLink),href:e},l.createElement(u,{className:b.breadcrumbHomeIcon})))}function v(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(o.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(E,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(h,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(p,{href:t.href,isLast:n},t.label))})))):null}},4533:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var n=a(7294),l=a(6010),r=a(1944),s=a(7524),c=a(5281),o=a(4966),i=a(3120),d=a(4364),m=a(5999);function u(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(m.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function b(e){let{lastUpdatedBy:t}=e;return n.createElement(m.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function p(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:c.k.common.lastUpdated},n.createElement(m.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(u,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(b,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var h=a(7462);const E="iconEdit_eYIM";function v(e){let{className:t,...a}=e;return n.createElement("svg",(0,h.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(E,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function g(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.k.common.editThisPage},n.createElement(v,null),n.createElement(m.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var f=a(9960);const Z="tag_zVej",N="tagRegular_sFm0",_="tagWithCount_h2kH";function k(e){let{permalink:t,label:a,count:r}=e;return n.createElement(f.Z,{href:t,className:(0,l.Z)(Z,r?_:N)},a,r&&n.createElement("span",null,r))}const L="tags_jXut",T="tag_QGVx";function U(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(m.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(L,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:T},n.createElement(k,{label:t,permalink:a}))}))))}const w="lastUpdated_vbeJ";function y(e){return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(U,e)))}function A(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(g,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",w)},(a||r)&&n.createElement(p,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function C(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:o,lastUpdatedBy:i,tags:d}=a,m=d.length>0,u=!!(r||s||i);return m||u?n.createElement("footer",{className:(0,l.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(y,{tags:d}),u&&n.createElement(A,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:o})):null}var x=a(9407),B=a(6043),I=a(3743);const M="tocCollapsibleButton_TO0P",H="tocCollapsibleButtonExpanded_MG3E";function V(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,h.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",M,!t&&H,a.className)}),n.createElement(m.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const P="tocCollapsible_ETCw",S="tocCollapsibleContent_vkbj",D="tocCollapsibleExpanded_sAul";function F(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:c,toggleCollapsed:o}=(0,B.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(P,!c&&D,a)},n.createElement(V,{collapsed:c,onClick:o}),n.createElement(B.z,{lazy:!0,className:S,collapsed:c},n.createElement(I.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var z=a(2503),O=a(7684),R=a(1315);const j="docItemContainer_Adtb",G="docItemCol_GujU",J="tocMobile_aoJ5";function q(e){var t;const{content:a}=e,{metadata:l,frontMatter:s,assets:c}=a,{keywords:o}=s,{description:i,title:d}=l,m=null!=(t=c.image)?t:s.image;return n.createElement(r.d,{title:d,description:i,keywords:o,image:m})}function Q(e){const{content:t}=e,{metadata:a,frontMatter:r}=t,{hide_title:m,hide_table_of_contents:u,toc_min_heading_level:b,toc_max_heading_level:p}=r,{title:h}=a,E=!m&&void 0===t.contentTitle,v=(0,s.i)(),g=!u&&t.toc&&t.toc.length>0,f=g&&("desktop"===v||"ssr"===v);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!u&&G)},n.createElement(i.Z,null),n.createElement("div",{className:j},n.createElement("article",null,n.createElement(O.Z,null),n.createElement(d.Z,null),g&&n.createElement(F,{toc:t.toc,minHeadingLevel:b,maxHeadingLevel:p,className:(0,l.Z)(c.k.docs.docTocMobile,J)}),n.createElement("div",{className:(0,l.Z)(c.k.docs.docMarkdown,"markdown")},E&&n.createElement("header",null,n.createElement(z.Z,{as:"h1"},h)),n.createElement(R.Z,null,n.createElement(t,null))),n.createElement(C,e)),n.createElement(o.Z,{previous:a.previous,next:a.next}))),f&&n.createElement("div",{className:"col col--3"},n.createElement(x.Z,{toc:t.toc,minHeadingLevel:b,maxHeadingLevel:p,className:c.k.docs.docTocDesktop})))}function W(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(r.FG,{className:t},n.createElement(q,e),n.createElement(Q,e))}},4966:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7462),l=a(7294),r=a(5999),s=a(6010),c=a(9960);function o(e){const{permalink:t,title:a,subLabel:n,isNext:r}=e;return l.createElement(c.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function i(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(o,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(o,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010),r=a(5999),s=a(4477),c=a(5281);function o(e){let{className:t}=e;const a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},3120:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7294),l=a(6010),r=a(2263),s=a(9960),c=a(5999),o=a(143),i=a(373),d=a(5281),m=a(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,r.Z)(),{pluginId:c}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,i.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:h}=(0,o.Jo)(c),E=null!=u?u:(v=h).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,l.Z)(t,d.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:h.label,to:E.path,onClick:()=>m(h.name)})))}function E(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}}}]);