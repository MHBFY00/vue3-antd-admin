"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[6644],{67451:function(e,n,t){t.a(e,(async function(e,o){try{t(91019);var i=t(46978),s=(t(12431),t(66900)),a=t(66252),r=t(2262),g=t(3577),w=t(84278),d=t(98788),u=t(54737),c=t(98420),l=t(23370),m=t(57583),p=t(11727),b=e([l,m,p]);[l,m,p]=b.then?(await b)():b;const f={class:"box"},h=(e=>((0,a.dD)("data-v-269feddb"),e=e(),(0,a.Cn)(),e))((()=>(0,a._)("img",{src:w},null,-1))),_={name:"DashboardWelcome"};n.Z=(0,a.aZ)({..._,setup(e){var n;const t=null===(n=(0,l.L)().userInfo)||void 0===n?void 0:n.loginIp,o=(0,m.V)(),{online:w}=(0,c.s)(),{battery:b,batteryStatus:_,calcDischargingTime:k}=(0,u.I)(),v=(0,r.iH)((0,d.Z)("zh-cn")),x=(0,a.Fl)((()=>o.status===p.T.CONNECTED?"正常":o.status===p.T.CONNECTING?"连接中...":"已断开")),S=(0,a.Fl)((()=>o.status===p.T.CONNECTED?"success":o.status===p.T.CONNECTING?"warning":"error"));return(0,a.m0)((()=>{Object.assign(v.value,{"距离电池充满需要":Number.isFinite(b.chargingTime)&&0!=b.chargingTime?k.value:"未知","剩余可使用时间":Number.isFinite(b.dischargingTime)&&0!=b.dischargingTime?k.value:"未知","电池状态":_.value,"当前电量":`${b.level}%`})})),(e,n)=>((0,a.wg)(),(0,a.iD)("div",f,[h,(0,a.Wm)((0,r.SU)(s.ZP),{title:"系统信息",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)((0,r.SU)(s.ZP).Item,{key:"IP",label:"IP"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,g.zw)((0,r.SU)(t)),1)])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(v.value,((e,n)=>((0,a.wg)(),(0,a.j4)((0,r.SU)(s.ZP).Item,{key:n,label:n},{default:(0,a.w5)((()=>[(0,a.Uk)((0,g.zw)(e),1)])),_:2},1032,["label"])))),128)),(0,a.Wm)((0,r.SU)(s.ZP).Item,{label:"网络状态"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,r.SU)(i.Z),{status:(0,r.SU)(w)?"processing":"default",text:(0,r.SU)(w)?"在线":"离线"},null,8,["status","text"])])),_:1}),(0,a.Wm)((0,r.SU)(s.ZP).Item,{label:"WebSocket连接情况"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,r.SU)(i.Z),{status:(0,r.SU)(S),text:(0,r.SU)(x)},null,8,["status","text"])])),_:1})])),_:1})]))}}),o()}catch(e){o(e)}}))},98788:function(e,n,t){function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en";const n=navigator.userAgent.toLowerCase(),t=e=>e.test(n),o=e=>{var t;return null===(t=n.match(e))||void 0===t?void 0:t.toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},i=new Map([[t(/windows|win32|win64|wow32|wow64/g),"windows"],[t(/macintosh|macintel/g),"macos"],[t(/x11/g),"linux"],[t(/android|adr/g),"android"],[t(/ios|iphone|ipad|ipod|iwatch/g),"ios"]]).get(!0)||"unknow",s=new Map([["windows",new Map([[t(/windows nt 5.0|windows 2000/g),"2000"],[t(/windows nt 5.1|windows xp/g),"xp"],[t(/windows nt 5.2|windows 2003/g),"2003"],[t(/windows nt 6.0|windows vista/g),"vista"],[t(/windows nt 6.1|windows 7/g),"7"],[t(/windows nt 6.2|windows 8/g),"8"],[t(/windows nt 6.3|windows 8.1/g),"8.1"],[t(/windows nt 10.0|windows 10/g),"10"]]).get(!0)],["macos",o(/os x [\d._]+/g)],["android",o(/android [\d._]+/g)],["ios",o(/os [\d._]+/g)]]).get(i)||"unknow";let a="unknow";"windows"===i||"macos"===i||"linux"===i?a="desktop":("android"===i||"ios"===i||t(/mobile/g))&&(a="mobile");const[r="unknow",g="unknow"]=new Map([[t(/applewebkit/g),["webkit",new Map([[t(/safari/g),"safari"],[t(/chrome/g),"chrome"],[t(/opr/g),"opera"],[t(/edge/g),"edge"]]).get(!0)]||0],[t(/gecko/g)&&t(/firefox/g),["gecko","firefox"]],[t(/presto/g),["presto","opera"]],[t(/trident|compatible|msie/g),["trident","iexplore"]]]).get(!0)||["unknow","unknow"],w=new Map([["webkit",o(/applewebkit\/[\d._]+/g)],["gecko",o(/gecko\/[\d._]+/g)],["presto",o(/presto\/[\d._]+/g)],["trident",o(/trident\/[\d._]+/g)]]).get(r)||"unknow",d=new Map([["firefox",o(/firefox\/[\d._]+/g)],["opera",o(/opr\/[\d._]+/g)],["iexplore",o(/(msie [\d._]+)|(rv:[\d._]+)/g)],["edge",o(/edge\/[\d._]+/g)],["safari",o(/version\/[\d._]+/g)],["chrome",o(/chrome\/[\d._]+/g)]]).get(g)||"unknow",[u="none",c="unknow"]=new Map([[t(/micromessenger/g),["wechat",o(/micromessenger\/[\d._]+/g)]],[t(/qqbrowser/g),["qq",o(/qqbrowser\/[\d._]+/g)]],[t(/ucbrowser/g),["uc",o(/ucbrowser\/[\d._]+/g)]],[t(/qihu 360se/g),["360","unknow"]],[t(/2345explorer/g),["2345",o(/2345explorer\/[\d._]+/g)]],[t(/metasr/g),["sougou","unknow"]],[t(/lbbrowser/g),["liebao","unknow"]],[t(/maxthon/g),["maxthon",o(/maxthon\/[\d._]+/g)]]]).get(!0)||["none","unknow"];return{"zh-cn":Object.assign({"内核":r,"内核版本":w,"平台":a,"载体":g,"载体版本":d,"系统":i,"系统版本":s},"none"===u?{}:{"外壳":u,"外壳版本":c}),en:Object.assign({engine:r,engineVs:w,platform:a,supporter:g,supporterVs:d,system:i,systemVs:s},"none"===u?{}:{shell:u,shellVs:c})}[e]}t.d(n,{Z:function(){return o}})},56644:function(e,n,t){t.a(e,(async function(e,o){try{t.r(n);var i=t(45116),s=(t(166),t(83744)),a=e([i]);i=(a.then?(await a)():a)[0];const r=(0,s.Z)(i.Z,[["__scopeId","data-v-269feddb"]]);n.default=r,o()}catch(e){o(e)}}))},45116:function(e,n,t){t.a(e,(async function(e,o){try{t.d(n,{Z:function(){return i.Z}});var i=t(67451),s=e([i]);i=(s.then?(await s)():s)[0],o()}catch(e){o(e)}}))},166:function(){},84278:function(e,n,t){e.exports=t.p+"img/analysis.8bb8fb67.svg"}}]);