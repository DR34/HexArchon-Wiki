"use strict";(self.webpackChunkhexarchon_wiki=self.webpackChunkhexarchon_wiki||[]).push([[7162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},r="Getting Started",s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"All about getting started on HexArchon.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"HexArchon Wiki",permalink:"/"},next:{title:"Custom Items",permalink:"/category/custom-items"}},l={},p=[{value:"Welcome",id:"welcome",level:2},{value:"First Steps",id:"first-steps",level:2},{value:"Claiming Land",id:"claiming-land",level:2},{value:"Giving other players access to your claim",id:"giving-other-players-access-to-your-claim",level:3},{value:"Jobs",id:"jobs",level:2},{value:"Shop",id:"shop",level:2},{value:"Warps",id:"warps",level:2},{value:"Teleporting",id:"teleporting",level:2},{value:"Homes",id:"homes",level:2},{value:"Death",id:"death",level:2},{value:"Auctions",id:"auctions",level:2},{value:"Map",id:"map",level:2},{value:"Tree Feller",id:"tree-feller",level:2},{value:"Scoreboard",id:"scoreboard",level:2},{value:"Settings",id:"settings",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"All about getting started on HexArchon."),(0,o.kt)("h2",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,"Welcome! On HexArchon, players can explore the wilderness, interact with other players, fight unique custom mobs, challenge various dungeons, and gear up on custom items and equipments to survive in a unique environment."),(0,o.kt)("h2",{id:"first-steps"},"First Steps"),(0,o.kt)("p",null,"The first step would be to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"/rtp")," command to teleport to a random place in the wilderness. This can be a great tool for starters or for those who want to explore!"),(0,o.kt)("h2",{id:"claiming-land"},"Claiming Land"),(0,o.kt)("p",null,"Claiming Land is an important aspect of the server as it protects your builds from others."),(0,o.kt)("p",null,"To claim land, first type the command ",(0,o.kt)("inlineCode",{parentName:"p"},"/claim"),". Then, right-click two corners (blocks) of your intended claim. A confirmation menu will pop up, in which you can confirm your claim creation."),(0,o.kt)("h3",{id:"giving-other-players-access-to-your-claim"},"Giving other players access to your claim"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Claim Player Grant Build Permission",src:n(8277).Z,width:"600",height:"340"})),(0,o.kt)("p",null,"You can give access of your claim to other players, such as a friend. To do this, type the command ",(0,o.kt)("inlineCode",{parentName:"p"},"/claims"),". Select the claim you wish to share, then click Per Player Settings. Select the player you wish to add, and under the build permission, click Enable. If you want, you can also grant them the permission to open chests, interact with mobs, blocks, and more!"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The player that you want to add to your claim to must be in the same world for them to show up!"))),(0,o.kt)("h2",{id:"jobs"},"Jobs"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Jobs",src:n(5948).Z,width:"437",height:"220"})),(0,o.kt)("p",null,"Jobs are a good way to earn money as they grant money for certain actions. You can join up to 3 jobs by using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"/jobs"),", and left-clicking on any 3 jobs you want.\nTo leave jobs, right-click on a job, or click the barrier in the bottom-right corner to leave all jobs."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Leaving a job will cost you 15% of the experience in the job you left!"))),(0,o.kt)("h2",{id:"shop"},"Shop"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Jobs",src:n(413).Z,width:"361",height:"224"})),(0,o.kt)("p",null,"The shop is crucial to the server as it can be used to purchase various things. To open the shop, type the command ",(0,o.kt)("inlineCode",{parentName:"p"},"/shop"),"."),(0,o.kt)("p",null,"In addition, most items can be sold in the shop to earn money using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"/sell"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"/sell")," \xbb Opens the selling menu.\n",(0,o.kt)("inlineCode",{parentName:"p"},"/sell hand")," \xbb Sells the items in your hand. ",(0,o.kt)("em",{parentName:"p"},"Alias: /sh"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"/sell all")," \xbb Sells every item in your inventory. ",(0,o.kt)("em",{parentName:"p"},"Alias: /sa"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"/sell handall")," \xbb Sells every item in your inventory that matches the item in your hand. ",(0,o.kt)("em",{parentName:"p"},"Alias: /sha")),(0,o.kt)("h2",{id:"warps"},"Warps"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scoreboard",src:n(4453).Z,width:"355",height:"235"})),(0,o.kt)("p",null,"Warps can be used to quickly teleport to a public location of interest. To open the warps menu, use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"/warp"),"."),(0,o.kt)("h2",{id:"teleporting"},"Teleporting"),(0,o.kt)("p",null,"The teleport command can be used to teleport to other players with ease. To send a teleport request to a player, you can use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"/tpa <playername>.")," In addition, ",(0,o.kt)("inlineCode",{parentName:"p"},"/tpahere <playername>")," can be used to request a player to teleport to you. The specified player can choose to either accept or deny the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"/tpyes")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/tpno"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The player who is teleporting must stand still for 3 seconds for the teleport to take place."))),(0,o.kt)("h2",{id:"homes"},"Homes"),(0,o.kt)("p",null,"Want to save place you want, such as your house? Do a /sethome! You can then use /home to teleport back to that place.\nYou can also create up to 5 homes, by using ",(0,o.kt)("inlineCode",{parentName:"p"},"/sethome <homename>"),", and using ",(0,o.kt)("inlineCode",{parentName:"p"},"/home <homename>"),"."),(0,o.kt)("h2",{id:"death"},"Death"),(0,o.kt)("p",null,"Did you die? No worries, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"/back")," to go back to where you died!"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You will lose 10% of your balance on death! This does not apply in Boss Arenas or Dungeons."))),(0,o.kt)("h2",{id:"auctions"},"Auctions"),(0,o.kt)("p",null,"The player auctions can be accessed by using /ah. From there, you can buy from others or list items for others to buy."),(0,o.kt)("h2",{id:"map"},"Map"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Map",src:n(5625).Z,width:"700",height:"700"})),(0,o.kt)("p",null,"The Server Map offers a real-time 2D view of the entire Overworld! You can view it by using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"/map")," or by visiting ",(0,o.kt)("a",{parentName:"p",href:"https://map.hexarchon.net/"},"map.hexarchon.net"),"."),(0,o.kt)("h2",{id:"tree-feller"},"Tree Feller"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tree Feller",src:n(1382).Z,width:"800",height:"453"})),(0,o.kt)("p",null,"You can easily cut down trees using the tree feller! Note that it will only work on smaller trees."),(0,o.kt)("h2",{id:"scoreboard"},"Scoreboard"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scoreboard",src:n(5899).Z,width:"223",height:"259"})),(0,o.kt)("p",null,"The Scoreboard is the section that is located on the right side of the screen. While it contains various useful information, if you wish to remove this display, you can do so in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/settings"),"."),(0,o.kt)("p",null,"Balance - The amount of money you have. This can also be accessed using /bal.\nParty - Your current Party name.\nPoints - The current amount of points you have, used for ",(0,o.kt)("a",{parentName:"p",href:"/gameplay-mechanics/abilities"},"abilities"),".\nAchievements - The current amount of achievements you have (",(0,o.kt)("inlineCode",{parentName:"p"},"/ach"),").\nDrop - The time left until the next supply drop, or the time left until the current supply drop ends.\nLottery - The time left until the next lottery draw.\nVotes - The number of votes you have. (psst, every Month the top voters get a reward)!\nHours - Your playtime in hours on the server."),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("p",null,"Numerous settings on HexArchon can be toggled on or off to your likings. You can access the settings menu by using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"/settings"),"."))}d.isMDXComponent=!0},8277:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/claims-grant-build-permission-0304482fa41c0d80bc653822adca6fac.gif"},5948:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jobs-1ad7c339560e12de379bfe584e99d7b2.png"},5625:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/map-ae749568eed15d76c23cc9f2af5efbe8.png"},5899:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scoreboard-1fb30d1636e715dfeb296868eca931a7.png"},413:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shop-4245cec33dbba99f6d57292074fa6451.png"},1382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/treefeller-0bc1564bffdb04d78e4cd600e821bea5.gif"},4453:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/warps-a9a07a88ee945f1db7c46b7af930d784.png"}}]);