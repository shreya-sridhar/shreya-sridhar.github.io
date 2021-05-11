/*! For license information please see component---src-pages-projects-js-9b3be9f6fbdd6f7cfc8e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"16l3":function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i);function o(e){return e.type&&"Tab"===e.type.tabsRole}function r(e){return e.type&&"TabPanel"===e.type.tabsRole}function I(e){return e.type&&"TabList"===e.type.tabsRole}function M(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){return i.Children.map(e,(function(e){return null===e?null:function(e){return o(e)||I(e)||r(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?Object(i.cloneElement)(e,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},i=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),i.forEach((function(t){M(e,t,a[t])}))}return e}({},e.props,{children:c(e.props.children,t)})):e}))}function u(e,t){return i.Children.forEach(e,(function(e){null!==e&&(o(e)||r(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(I(e)&&t(e),u(e.props.children,t)))}))}var s,l=a("TSYQ"),d=a.n(l),g=0;function j(){return"react-tabs-"+g++}function N(e){var t=0;return u(e,(function(e){o(e)&&t++})),t}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function y(e){return e&&"getAttribute"in e}function D(e){return y(e)&&"tab"===e.getAttribute("role")}function p(e){return y(e)&&"true"===e.getAttribute("aria-disabled")}try{s=!("undefined"==typeof window||!window.document||!window.document.activeElement)}catch(_){s=!1}var S=function(e){var t,a;function M(){for(var t,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))||this).tabNodes=[],t.handleKeyDown=function(e){if(t.isTabFromContainer(e.target)){var a=t.props.selectedIndex,i=!1,n=!1;32!==e.keyCode&&13!==e.keyCode||(i=!0,n=!1,t.handleClick(e)),37===e.keyCode||38===e.keyCode?(a=t.getPrevTab(a),i=!0,n=!0):39===e.keyCode||40===e.keyCode?(a=t.getNextTab(a),i=!0,n=!0):35===e.keyCode?(a=t.getLastTab(),i=!0,n=!0):36===e.keyCode&&(a=t.getFirstTab(),i=!0,n=!0),i&&e.preventDefault(),n&&t.setSelected(a,e)}},t.handleClick=function(e){var a=e.target;do{if(t.isTabFromContainer(a)){if(p(a))return;var i=[].slice.call(a.parentNode.children).filter(D).indexOf(a);return void t.setSelected(i,e)}}while(null!=(a=a.parentNode))},t}a=e,(t=M).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=M.prototype;return l.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var a=this.props;(0,a.onSelect)(e,a.selectedIndex,t)}},l.getNextTab=function(e){for(var t=this.getTabsCount(),a=e+1;a<t;a++)if(!p(this.getTab(a)))return a;for(var i=0;i<e;i++)if(!p(this.getTab(i)))return i;return e},l.getPrevTab=function(e){for(var t=e;t--;)if(!p(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!p(this.getTab(t)))return t;return e},l.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!p(this.getTab(t)))return t;return null},l.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!p(this.getTab(e)))return e;return null},l.getTabsCount=function(){return N(this.props.children)},l.getPanelsCount=function(){return function(e){var t=0;return u(e,(function(e){r(e)&&t++})),t}(this.props.children)},l.getTab=function(e){return this.tabNodes["tabs-"+e]},l.getChildren=function(){var e=this,t=0,a=this.props,M=a.children,u=a.disabledTabClassName,l=a.focus,d=a.forceRenderTabPanel,g=a.selectedIndex,N=a.selectedTabClassName,L=a.selectedTabPanelClassName;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var y=this.tabIds.length-this.getTabsCount();y++<0;)this.tabIds.push(j()),this.panelIds.push(j());return c(M,(function(a){var M=a;if(I(a)){var j=0,y=!1;s&&(y=n.a.Children.toArray(a.props.children).filter(o).some((function(t,a){return document.activeElement===e.getTab(a)}))),M=Object(i.cloneElement)(a,{children:c(a.props.children,(function(t){var a="tabs-"+j,n=g===j,o={tabRef:function(t){e.tabNodes[a]=t},id:e.tabIds[j],panelId:e.panelIds[j],selected:n,focus:n&&(l||y)};return N&&(o.selectedClassName=N),u&&(o.disabledClassName=u),j++,Object(i.cloneElement)(t,o)}))})}else if(r(a)){var D={id:e.panelIds[t],tabId:e.tabIds[t],selected:g===t};d&&(D.forceRender=d),L&&(D.selectedClassName=L),t++,M=Object(i.cloneElement)(a,D)}return M}))},l.isTabFromContainer=function(e){if(!D(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-tabs"))break;t=t.parentElement}while(t);return!1},l.render=function(){var e=this,t=this.props,a=(t.children,t.className),i=(t.disabledTabClassName,t.domRef),o=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]));return n.a.createElement("div",L({},o,{className:d()(a),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,i&&i(t)},"data-tabs":!0}),this.getChildren())},M}(i.Component);S.defaultProps={className:"react-tabs",focus:!1};var x=function(e){var t,a;function i(t){var a;return(a=e.call(this,t)||this).handleSelected=function(e,t,i){var n=a.props.onSelect,o=a.state.mode;if("function"!=typeof n||!1!==n(e,t,i)){var r={focus:"keydown"===i.type};1===o&&(r.selectedIndex=e),a.setState(r)}},a.state=i.copyPropsToState(a.props,{},t.defaultFocus),a}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.getDerivedStateFromProps=function(e,t){return i.copyPropsToState(e,t)},i.getModeFromProps=function(e){return null===e.selectedIndex?1:0},i.copyPropsToState=function(e,t,a){void 0===a&&(a=!1);var n={focus:a,mode:i.getModeFromProps(e)};if(1===n.mode){var o=N(e.children)-1,r=null;r=null!=t.selectedIndex?Math.min(t.selectedIndex,o):e.defaultIndex||0,n.selectedIndex=r}return n},i.prototype.render=function(){var e=this.props,t=e.children,a=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["children","defaultIndex","defaultFocus"])),i=this.state,o=i.focus,r=i.selectedIndex;return a.focus=o,a.onSelect=this.handleSelected,null!=r&&(a.selectedIndex=r),n.a.createElement(S,a,t)},i}(i.Component);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}x.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},x.tabsRole="Tabs";var T=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.children,a=e.className,i=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["children","className"]);return n.a.createElement("ul",m({},i,{className:d()(a),role:"tablist"}),t)},i}(i.Component);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}T.defaultProps={className:"react-tabs__tab-list"},T.tabsRole="TabList";var b=function(e){var t,a;function i(){return e.apply(this,arguments)||this}a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=i.prototype;return o.componentDidMount=function(){this.checkFocus()},o.componentDidUpdate=function(){this.checkFocus()},o.checkFocus=function(){var e=this.props,t=e.selected,a=e.focus;t&&a&&this.node.focus()},o.render=function(){var e,t=this,a=this.props,i=a.children,o=a.className,r=a.disabled,I=a.disabledClassName,M=(a.focus,a.id),c=a.panelId,u=a.selected,s=a.selectedClassName,l=a.tabIndex,g=a.tabRef,j=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(a,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return n.a.createElement("li",A({},j,{className:d()(o,(e={},e[s]=u,e[I]=r,e)),ref:function(e){t.node=e,g&&g(e)},role:"tab",id:M,"aria-selected":u?"true":"false","aria-disabled":r?"true":"false","aria-controls":c,tabIndex:l||(u?"0":null)}),i)},i}(i.Component);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}b.defaultProps={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},b.tabsRole="Tab";var f=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e,t=this.props,a=t.children,i=t.className,o=t.forceRender,r=t.id,I=t.selected,M=t.selectedClassName,c=t.tabId,u=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(t,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return n.a.createElement("div",C({},u,{className:d()(i,(e={},e[M]=I,e)),role:"tabpanel",id:r,"aria-labelledby":c}),o||I?a:null)},i}(i.Component);f.defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},f.tabsRole="TabPanel";a("sFJx");var h=a("xeaZ"),E=a.n(h),z=a("wDkR"),v=a.n(z),w=a("8/Bm"),P=a.n(w),k=a("javf"),Y=a.n(k),O=[{id:1,title:"FreightNot",icon:E.a,description:"A mobile application that enables users book trucks to transport goods as well as track their inventory upon delivery. The application includes a unique customer and driver interface.Mobile application built for Android and IOS using React Native as a frontend. Application uses Google API to predict distances, estimates times and autocomplete suggestions.The application includes a real-time location tracking feature for both customers and drivers. Deployed the backend API on Azure App service.Integrated with QR code scan & read features to enable effective inventory management. JWT Authentication using AsyncStorage. Styled using React Native Elements, React Native Paper, Vector Icons & React Native Paper. ",githubPath:"https://github.com/shreya-sridhar/FreightAppFrontend",demoPath:"",year:"2020",techUsed:"React-Native, Javascript, Ruby Backend, Google Cloud API, Postgresql, Android Dev tools, Mobile App development, Azure Devops tools"},{id:2,title:"Vinyl MarketPlace",icon:v.a,description:"Buy and Sell market place for Vinyl CDs/cassettes/records, allowing users to discover their music interests and potential vinyl cd sellers. Built with the ability to chat with buyers and sellers, deployed on Azure.Includes a pagination feature to reduce page load times. Chat application built using web sockets/action cable",githubPath:"https://github.com/shreya-sridhar/vinyl-mp-frontend",demoPath:"",year:"2020",techUsed:"React, Ruby, Rails, Websocket , Javascript, Postgresql, Rest API integration, JWT Authentication"},{id:3,title:"TravelBug",icon:P.a,description:"Travel planning website to manage and plan for attractions, book hotels, explore about destination. Focus was to create best in the class user experience and design to motivate travel planning. Optimized website with custom CSS for mobile and desktop experience for large amount of data. Deployed on Heroku.Developed website using Ruby on Rails using MVC design practices.Integrated Google API for maps, photos & directions, OpenTripMap API for retrieving tourism attractions and Pixabay for getting videos.Frontend interface developed using Bootstrap",githubPath:"https://github.com/shreya-sridhar/TravelBug",demoPath:"https://guarded-mountain-09991.herokuapp.com/",year:"2020",techUsed:"React, Ruby, Rails, Javascript, Postgresql, Rest API integration, Cookies & Sessions"},{id:4,title:"Spelling Bee",icon:Y.a,description:"A single page web application designed combining the traditional spelling bee game with some strategic gameplay to optimize scoring.",githubPath:"https://github.com/danajackson2/spelling-bee",demoPath:"",year:"2019",techUsed:"Javascript, Postgresql, HTML5, CSS, Ruby on Rails, Cookies"}],B=(a("nJpn"),a("PPWt"),a("oXlW"),a("Tqtu"),a("6/8f"),a("jqNj"),a("pPXF"),a("1Dv1"),a("RIWL"),[]),G=(a("8lYA"),a("tfnm"),[]),U=a("vOnD"),R=U.a.div.withConfig({displayName:"ProjectBox__Box",componentId:"sc-1hevtsw-0"})(["max-width:450px;width:35%;min-height:470px;border-radius:8px;box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);transition:box-shadow 0.3s ease-out;background-color:#fff;margin:0 4% 4%;:hover{box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2);transition:box-shadow 0.3s;}@media (max-width:700px){width:100%;min-height:auto;max-width:fit-content;}@media (min-width:768px) and (max-width:1030px){width:100%;min-height:auto;box-sizing:border-box;max-width:100%;margin:0 0 4%;}"]),J=U.a.div.withConfig({displayName:"ProjectBox__BoxIcon",componentId:"sc-1hevtsw-1"})(["height:120px;display:flex;justify-content:flex-start;align-items:center;padding:4%;box-sizing:border-box;border-radius:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;background-color:rgba(127,161,232,0.3);img{width:25%;margin-right:5%;margin-bottom:0;}h3{margin:0;flex:1;color:#0f1645;}@media (min-width:768px) and (max-width:1030px){img{width:10%;}}"]),W=U.a.div.withConfig({displayName:"ProjectBox__BoxDescription",componentId:"sc-1hevtsw-2"})(["padding:5%;flex-direction:column;display:FLEX;height:calc(100% - 120px);p{color:#0f1645;}a{color:#7fa1e8;font-size:20px;font-weight:bold;display:block;margin:0 0 10px;text-decoration:none;}"]),H=U.a.div.withConfig({displayName:"ProjectBox__BoxStack",componentId:"sc-1hevtsw-3"})(["margin-top:auto;p{margin:0;}"]),Q=function(e){var t=e.info;return n.a.createElement(R,null,n.a.createElement(J,null,n.a.createElement("img",{src:t.icon,alt:"Shreyaap project icon"}),n.a.createElement("h3",null,t.title)),n.a.createElement(W,null,n.a.createElement("p",null," ",t.description),n.a.createElement(H,null,null!=t.githubPath?n.a.createElement("a",{href:t.githubPath},"On Github "):"",null!=t.demoPath?n.a.createElement("a",{href:t.demoPath},"Website "):"",n.a.createElement("p",null,"Development year - ",t.year," "),n.a.createElement("p",null,"Technology stack - ",t.techUsed," "))))},Z=U.a.div.withConfig({displayName:"projectsStyle__ProjectsWrapper",componentId:"sc-15imuc6-0"})(["padding-top:10%;padding-bottom:5%;"]),F=U.a.div.withConfig({displayName:"projectsStyle__ProjectsSection",componentId:"sc-15imuc6-1"})(["display:flex;flex-wrap:wrap;justify-content:center;@media (max-width:700px){flex-direction:column;margin-bottom:10%;}@media (min-width:768px) and (max-width:1030px){flex-direction:column;}"]),V=a("Bl7J");t.default=function(){return n.a.createElement(V.a,null,n.a.createElement(Z,null,n.a.createElement(x,null,n.a.createElement(T,null,n.a.createElement(b,null,"Personal")),n.a.createElement(f,null,n.a.createElement(F,null,B.map((function(e){return n.a.createElement(Q,{key:e.id,info:e})})))),n.a.createElement(f,null,n.a.createElement(F,null,O.map((function(e){return n.a.createElement(Q,{key:e.id,info:e})})))),n.a.createElement(f,null,n.a.createElement(F,null,G.map((function(e){return n.a.createElement(Q,{key:e.id,info:e})})))))))}},"1Dv1":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTEyIDYuNWMtMy43OSAwLTcuMTcgMi4xMy04LjgyIDUuNSAxLjY1IDMuMzcgNS4wMiA1LjUgOC44MiA1LjVzNy4xNy0yLjEzIDguODItNS41QzE5LjE3IDguNjMgMTUuNzkgNi41IDEyIDYuNXptMCAxMGMtMi40OCAwLTQuNS0yLjAyLTQuNS00LjVTOS41MiA3LjUgMTIgNy41czQuNSAyLjAyIDQuNSA0LjUtMi4wMiA0LjUtNC41IDQuNXoiLz48cGF0aCBkPSJNMTIgNC41QzcgNC41IDIuNzMgNy42MSAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjVzOS4yNy0zLjExIDExLTcuNWMtMS43My00LjM5LTYtNy41LTExLTcuNXptMCAxM2MtMy43OSAwLTcuMTctMi4xMy04LjgyLTUuNUM0LjgzIDguNjMgOC4yMSA2LjUgMTIgNi41czcuMTcgMi4xMyA4LjgyIDUuNWMtMS42NSAzLjM3LTUuMDMgNS41LTguODIgNS41em0wLTEwYy0yLjQ4IDAtNC41IDIuMDItNC41IDQuNXMyLjAyIDQuNSA0LjUgNC41IDQuNS0yLjAyIDQuNS00LjUtMi4wMi00LjUtNC41LTQuNXptMCA3Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXoiLz48L3N2Zz4="},"6/8f":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTE4IDEwaDR2N2gtNHoiLz48cGF0aCBkPSJNNCA2aDE4VjRINGMtMS4xIDAtMiAuOS0yIDJ2MTFIMHYzaDE0di0zSDRWNnptMTkgMmgtNmMtLjU1IDAtMSAuNDUtMSAxdjEwYzAgLjU1LjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xVjljMC0uNTUtLjQ1LTEtMS0xem0tMSA5aC00di03aDR2N3oiLz48L3N2Zz4NCg=="},"8/Bm":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggb3BhY2l0eT0iLjMiIGQ9Ik01IDE5aDE0VjVINXYxNHpNMTYuNSA2Yy44MyAwIDEuNS42NyAxLjUgMS41UzE3LjMzIDkgMTYuNSA5IDE1IDguMzMgMTUgNy41IDE1LjY3IDYgMTYuNSA2em0wIDljLjgzIDAgMS41LjY3IDEuNSAxLjVzLS42NyAxLjUtMS41IDEuNS0xLjUtLjY3LTEuNS0xLjUuNjctMS41IDEuNS0xLjV6TTEyIDEwLjVjLjgzIDAgMS41LjY3IDEuNSAxLjVzLS42NyAxLjUtMS41IDEuNS0xLjUtLjY3LTEuNS0xLjUuNjctMS41IDEuNS0xLjV6TTcuNSA2QzguMzMgNiA5IDYuNjcgOSA3LjVTOC4zMyA5IDcuNSA5IDYgOC4zMyA2IDcuNSA2LjY3IDYgNy41IDZ6bTAgOWMuODMgMCAxLjUuNjcgMS41IDEuNVM4LjMzIDE4IDcuNSAxOCA2IDE3LjMzIDYgMTYuNSA2LjY3IDE1IDcuNSAxNXoiLz48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0eiIvPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjE2LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjcuNSIgcj0iMS41Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMS41Ii8+PGNpcmNsZSBjeD0iMTYuNSIgY3k9IjE2LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE2LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjwvc3ZnPg0K"},"8lYA":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTE1IDE1SDV2NGgxNHYtNGgtNHptLTcgM0g2di0yaDJ2MnptMy41IDBoLTJ2LTJoMnYyem0zLjUgMGgtMnYtMmgydjJ6Ii8+PHBhdGggZD0iTTE2IDQuMmMxLjUgMCAzIC42IDQuMiAxLjdsLjgtLjhDMTkuNiAzLjcgMTcuOCAzIDE2IDNzLTMuNi43LTUgMi4xbC44LjhDMTMgNC44IDE0LjUgNC4yIDE2IDQuMnptLTMuMyAyLjVsLjguOGMuNy0uNyAxLjYtMSAyLjUtMXMxLjguMyAyLjUgMWwuOC0uOGMtLjktLjktMi4xLTEuNC0zLjMtMS40cy0yLjQuNS0zLjMgMS40ek0xOSAxM2gtMlY5aC0ydjRINWMtMS4xIDAtMiAuOS0yIDJ2NGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi00YzAtMS4xLS45LTItMi0yem0wIDZINXYtNGgxNHY0ek02IDE2aDJ2Mkg2em0zLjUgMGgydjJoLTJ6bTMuNSAwaDJ2MmgtMnoiLz48L3N2Zz4NCg=="},PPWt:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBvcGFjaXR5PSIuODciIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjxwYXRoIG9wYWNpdHk9Ii4zIiBkPSJNMTMuMzQgNC42Nkw5IDl2MTBoOWwzLTd2LTJoLTguNzd6Ii8+PHBhdGggZD0iTTIxIDhoLTYuMzFsLjk1LTQuNTcuMDMtLjMyYzAtLjQxLS4xNy0uNzktLjQ0LTEuMDZMMTQuMTcgMSA3LjU5IDcuNTlDNy4yMiA3Ljk1IDcgOC40NSA3IDl2MTBjMCAxLjEuOSAyIDIgMmg5Yy44MyAwIDEuNTQtLjUgMS44NC0xLjIybDMuMDItNy4wNWMuMDktLjIzLjE0LS40Ny4xNC0uNzN2LTJjMC0xLjEtLjktMi0yLTJ6bTAgNGwtMyA3SDlWOWw0LjM0LTQuMzRMMTIuMjMgMTBIMjF2MnpNMSA5aDR2MTJIMXoiLz48L3N2Zz4NCg=="},RIWL:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHoiLz48L3N2Zz4="},TSYQ:function(e,t,a){var i;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)&&i.length){var r=n.apply(null,i);r&&e.push(r)}else if("object"===o)for(var I in i)a.call(i,I)&&i[I]&&e.push(I)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()},Tqtu:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTEuNDkgMy40OGMwIDEuMS45IDIgMiAyczItLjkgMi0yLS45LTItMi0yLTIgLjktMiAyem0tLjYgMTEuNWwyLjEgMnY2aDJ2LTcuNWwtMi4xLTIgLjYtM2MxLjMgMS41IDMuMyAyLjUgNS41IDIuNXYtMmMtMS45IDAtMy41LTEtNC4zLTIuNGwtMS0xLjZjLS40LS42LTEtMS0xLjctMS0uMyAwLS41LjEtLjguMWwtNS4yIDIuMnY0LjdoMnYtMy40bDEuOC0uNy0xLjYgOC4xLTQuOS0xLS40IDIgNyAxLjQgMS00LjR6Ii8+PC9zdmc+DQo="},javf:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMjAuNTcgMTQuODZMMjIgMTMuNDMgMjAuNTcgMTIgMTcgMTUuNTcgOC40MyA3IDEyIDMuNDMgMTAuNTcgMiA5LjE0IDMuNDMgNy43MSAyIDUuNTcgNC4xNCA0LjE0IDIuNzEgMi43MSA0LjE0bDEuNDMgMS40M0wyIDcuNzFsMS40MyAxLjQzTDIgMTAuNTcgMy40MyAxMiA3IDguNDMgMTUuNTcgMTcgMTIgMjAuNTcgMTMuNDMgMjJsMS40My0xLjQzTDE2LjI5IDIybDIuMTQtMi4xNCAxLjQzIDEuNDMgMS40My0xLjQzLTEuNDMtMS40M0wyMiAxNi4yOWwtMS40My0xLjQzeiIvPjwvc3ZnPg=="},jqNj:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTE0IDguNTlsLTEtLjU4VjQuMDVoLTJ2My45NmwtMSAuNThjLTEuMjQuNzItMiAyLjA0LTIgMy40NiAwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00YzAtMS40Mi0uNzctMi43NC0yLTMuNDZ6Ii8+PHBhdGggZD0iTTMuNTUgMTkuMDlsMS40MSAxLjQxIDEuNzktMS44LTEuNDEtMS40MXpNMTEgMjBoMnYzaC0yek0xIDExaDN2Mkgxem0xNC00LjE0VjIuMDVIOXY0LjgxQzcuMjEgNy45IDYgOS44MyA2IDEyLjA1YzAgMy4zMSAyLjY5IDYgNiA2czYtMi42OSA2LTZjMC0yLjIyLTEuMjEtNC4xNS0zLTUuMTl6bS0zIDkuMTljLTIuMjEgMC00LTEuNzktNC00IDAtMS40Mi43Ny0yLjc0IDItMy40NmwxLS41OFY0LjA1aDJ2My45NmwxIC41OGMxLjI0LjcyIDIgMi4wNCAyIDMuNDYgMCAyLjIxLTEuNzkgNC00IDR6TTIwIDExaDN2MmgtM3ptLTIuNzYgNy43MWwxLjc5IDEuOCAxLjQxLTEuNDEtMS44LTEuNzl6Ii8+PC9zdmc+DQo="},nJpn:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTE1IDQuMzRWOGgzLjY2QzE4LjA1IDYuMyAxNi43IDQuOTUgMTUgNC4zNHpNOC4wNCAxNC4zNmwuNDQuNjdjMS4xOS4xNiAyLjE5LjkyIDIuNjggMS45N2gyLjY4Yy41Ni0xLjE4IDEuNzctMiAzLjE2LTIgLjE1IDAgLjMxLjAxLjQ2LjAzbC4yOS0uMzdjLjQtLjUxLjctMS4wNy45Mi0xLjY2SDcuMzdjLjMyLjY3LjU3IDEuMTkuNjcgMS4zNnoiLz48cGF0aCBkPSJNMTMgMnY4aDhjMC00LjQyLTMuNTgtOC04LTh6bTIgNlY0LjM0YzEuNy42IDMuMDUgMS45NSAzLjY2IDMuNjZIMTV6bS04LjU2IDNsLS45NS0ySDJ2MmgyLjIyczEuODkgNC4wNyAyLjEyIDQuNDJjLTEuMS41OS0xLjg0IDEuNzUtMS44NCAzLjA4QzQuNSAyMC40MyA2LjA3IDIyIDggMjJjMS43NiAwIDMuMjItMS4zIDMuNDYtM2gyLjA4Yy4yNCAxLjcgMS43IDMgMy40NiAzIDEuOTMgMCAzLjUtMS41NyAzLjUtMy41IDAtMS4wNC0uNDYtMS45Ny0xLjE4LTIuNjFDMjAuMzcgMTQuNTQgMjEgMTIuODQgMjEgMTFINi40NHpNOCAyMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzcuMTcgMTcgOCAxN3MxLjUuNjcgMS41IDEuNVM4LjgzIDIwIDggMjB6bTkgMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzE2LjE3IDE3IDE3IDE3czEuNS42NyAxLjUgMS41UzE3LjgzIDIwIDE3IDIwem0uNzQtNS4zNGwtLjI5LjM3Yy0uMTQtLjAyLS4zLS4wMy0uNDUtLjAzLTEuMzkgMC0yLjYuODItMy4xNiAyaC0yLjY4Yy0uNS0xLjA0LTEuNS0xLjgtMi42OC0xLjk3bC0uNDQtLjY3Yy0uMS0uMTctLjM0LS42OS0uNjctMS4zNmgxMS4yOWMtLjIxLjU5LS41MiAxLjE1LS45MiAxLjY2eiIvPjwvc3ZnPg0K"},oXlW:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTUuNSA1LjVjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyek01IDIyYzIuOCAwIDUtMi4yIDUtNXMtMi4yLTUtNS01LTUgMi4yLTUgNSAyLjIgNSA1IDV6bTAtOC41YzEuOSAwIDMuNSAxLjYgMy41IDMuNVM2LjkgMjAuNSA1IDIwLjUgMS41IDE4LjkgMS41IDE3czEuNi0zLjUgMy41LTMuNXptMi44LTIuM0wxMSAxNHY1aDJ2LTYuMmwtMi4yLTIuMyAyLjQtMi40LjguOGMxLjMgMS4zIDMgMi4xIDUuMSAyLjFWOWMtMS41IDAtMi43LS42LTMuNi0xLjVsLTEuOS0xLjljLS41LS40LTEtLjYtMS42LS42cy0xLjEuMi0xLjQuNkw3LjggOC40Yy0uNC40LS42LjktLjYgMS40IDAgLjYuMiAxLjEuNiAxLjR6TTE5IDEyYy0yLjggMC01IDIuMi01IDVzMi4yIDUgNSA1IDUtMi4yIDUtNS0yLjItNS01LTV6bTAgOC41Yy0xLjkgMC0zLjUtMS42LTMuNS0zLjVzMS42LTMuNSAzLjUtMy41IDMuNSAxLjYgMy41IDMuNS0xLjYgMy41LTMuNSAzLjV6Ii8+PC9zdmc+DQo="},pPXF:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTIwIDhsLTggNS04LTV2MTBoMTZ6bTAtMkg0bDggNC45OXoiLz48cGF0aCBkPSJNNCAyMGgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0ySDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJ6TTIwIDZsLTggNC45OUw0IDZoMTZ6TTQgOGw4IDUgOC01djEwSDRWOHoiLz48L3N2Zz4="},sFJx:function(e,t,a){},tfnm:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTcgMTIuMjd2My43Mmw1IDIuNzMgNS0yLjczdi0zLjcyTDEyIDE1ek01LjE4IDlMMTIgMTIuNzIgMTguODIgOSAxMiA1LjI4eiIvPjxwYXRoIGQ9Ik0xMiAzTDEgOWw0IDIuMTh2NkwxMiAyMWw3LTMuODJ2LTZsMi0xLjA5VjE3aDJWOUwxMiAzem01IDEyLjk5bC01IDIuNzMtNS0yLjczdi0zLjcyTDEyIDE1bDUtMi43M3YzLjcyem0tNS0zLjI3TDUuMTggOSAxMiA1LjI4IDE4LjgyIDkgMTIgMTIuNzJ6Ii8+PC9zdmc+DQo="},wDkR:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTMgMTloMThWNUgzdjE0em04LTdjLjM1IDAgLjY5LjA3IDEgLjE4VjZoNXYyaC0zdjcuMDNjLS4wMiAxLjY0LTEuMzUgMi45Ny0zIDIuOTctMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtM3oiLz48cGF0aCBkPSJNMjEgM0gzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZIM1Y1aDE4djE0em0tMTAtMWMxLjY1IDAgMi45OC0xLjMzIDMtMi45N1Y4aDNWNmgtNXY2LjE4Yy0uMzEtLjExLS42NS0uMTgtMS0uMTgtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM3oiLz48L3N2Zz4NCg=="},xeaZ:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTIwIDEwSDUuNzZMNCA2LjQ3VjE4aDE2eiIvPjxwYXRoIGQ9Ik0yLjAxIDZMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRoLTRsMiA0aC0zbC0yLTRoLTJsMiA0aC0zbC0yLTRIOGwyIDRIN0w1IDRINGMtMS4xIDAtMS45OS45LTEuOTkgMnpNNCA2LjQ3TDUuNzYgMTBIMjB2OEg0VjYuNDd6Ii8+PC9zdmc+DQo="}}]);
//# sourceMappingURL=component---src-pages-projects-js-9b3be9f6fbdd6f7cfc8e.js.map