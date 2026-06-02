"use strict";(()=>{var e={};e.id=30660,e.ids=[30660],e.modules={65949:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var s=t(20997),a=t(43551),d=t.n(a),n=t(56859),o=t.n(n);let i=`
(function() {
  const darkMode = localStorage.getItem('darkMode')

  const prefersDark =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  const defaultAppearance = '${d().APPEARANCE||"auto"}'

  let shouldBeDark = darkMode === 'true' || darkMode === 'dark'

  if (darkMode === null) {
    if (defaultAppearance === 'dark') {
      shouldBeDark = true
    } else if (defaultAppearance === 'auto') {
      // 检查是否在深色模式时间范围内
      const date = new Date()
      const hours = date.getHours()
      const darkTimeStart = ${d().APPEARANCE_DARK_TIME?d().APPEARANCE_DARK_TIME[0]:18}
      const darkTimeEnd = ${d().APPEARANCE_DARK_TIME?d().APPEARANCE_DARK_TIME[1]:6}
      
      shouldBeDark = prefersDark || (hours >= darkTimeStart || hours < darkTimeEnd)
    }
  }
  
  // 立即设置 html 元素的类
  document.documentElement.classList.add(shouldBeDark ? 'dark' : 'light')
})()
`;class l extends o(){static async getInitialProps(e){return{...await o().getInitialProps(e)}}render(){return(0,s.jsxs)(n.Html,{lang:d().LANG,children:[(0,s.jsxs)(n.Head,{children:[d().FONT_AWESOME&&(0,s.jsxs)(s.Fragment,{children:[s.jsx("link",{rel:"preload",href:d().FONT_AWESOME,as:"style",crossOrigin:"anonymous"}),s.jsx("link",{rel:"stylesheet",href:d().FONT_AWESOME,crossOrigin:"anonymous",referrerPolicy:"no-referrer"})]}),s.jsx("script",{dangerouslySetInnerHTML:{__html:i}})]}),(0,s.jsxs)("body",{children:[s.jsx(n.Main,{}),s.jsx(n.NextScript,{})]})]})}}let c=l},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},16689:e=>{e.exports=require("react")},20997:e=>{e.exports=require("react/jsx-runtime")},55315:e=>{e.exports=require("path")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[54567,56859,43551],()=>t(65949));module.exports=s})();