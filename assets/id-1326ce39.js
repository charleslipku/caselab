import{f as i,g as o,L as e,q as d}from"./index-94f85f11.js";var _={id:i(d)},l=o({props:_,data:function(){return{localId_:null}},computed:{safeId:function(){var n=this.id||this.localId_,r=function(t){return n?(t=String(t||"").replace(/\s+/g,"_"),t?n+"_"+t:n):null};return r}},mounted:function(){var n=this;this.$nextTick(function(){n.localId_="__BVID__".concat(n[e])})}});export{l as i,_ as p};