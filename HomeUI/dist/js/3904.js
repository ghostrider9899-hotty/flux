"use strict";(self["webpackChunkflux"]=self["webpackChunkflux"]||[]).push([[3904],{34547:(t,e,n)=>{n.d(e,{Z:()=>g});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},i=[],a=n(47389);const s={components:{BAvatar:a.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},r=s;var c=n(1001),l=(0,c.Z)(r,o,i,!1,null,"22d964ca",null);const g=l.exports},87156:(t,e,n)=>{n.d(e,{Z:()=>d});var o=function(){var t=this,e=t._self._c;return e("b-popover",{ref:"popover",attrs:{target:`${t.target}`,triggers:"click blur",show:t.show,placement:"auto",container:"my-container","custom-class":`confirm-dialog-${t.width}`},on:{"update:show":function(e){t.show=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("span",[t._v(t._s(t.title))]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(e){t.show=!1}}},[e("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}])},[e("div",{staticClass:"text-center"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(e){t.show=!1}}},[t._v(" "+t._s(t.cancelButton)+" ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.confirm()}}},[t._v(" "+t._s(t.confirmButton)+" ")])],1)])},i=[],a=n(15193),s=n(53862),r=n(20266);const c={components:{BButton:a.T,BPopover:s.x},directives:{Ripple:r.Z},props:{target:{type:String,required:!0},title:{type:String,required:!1,default:"Are You Sure?"},cancelButton:{type:String,required:!1,default:"Cancel"},confirmButton:{type:String,required:!0},width:{type:Number,required:!1,default:300}},data(){return{show:!1}},methods:{confirm(){this.show=!1,this.$emit("confirm")}}},l=c;var g=n(1001),u=(0,g.Z)(l,o,i,!1,null,null,null);const d=u.exports},63904:(t,e,n)=>{n.r(e),n.d(e,{default:()=>$});var o=function(){var t=this,e=t._self._c;return e("b-tabs",[e("b-tab",{attrs:{active:"",title:"Outgoing"}},[e("b-overlay",{attrs:{show:t.config.outgoing.loading,variant:"transparent",blur:"5px"}},[e("b-card",[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.config.outgoing.pageOptions},model:{value:t.config.outgoing.perPage,callback:function(e){t.$set(t.config.outgoing,"perPage",e)},expression:"config.outgoing.perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.config.outgoing.filter,callback:function(e){t.$set(t.config.outgoing,"filter",e)},expression:"config.outgoing.filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.config.outgoing.filter},on:{click:function(e){t.config.outgoing.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"fluxnetwork-outgoing-table",attrs:{striped:"",hover:"",responsive:"","per-page":t.config.outgoing.perPage,"current-page":t.config.outgoing.currentPage,items:t.config.outgoing.connectedPeers,fields:t.config.outgoing.fields,"sort-by":t.config.outgoing.sortBy,"sort-desc":t.config.outgoing.sortDesc,"sort-direction":t.config.outgoing.sortDirection,filter:t.config.outgoing.filter,"filter-included-fields":t.config.outgoing.filterOn,"show-empty":"","empty-text":"No Connected Nodes"},on:{"update:sortBy":function(e){return t.$set(t.config.outgoing,"sortBy",e)},"update:sort-by":function(e){return t.$set(t.config.outgoing,"sortBy",e)},"update:sortDesc":function(e){return t.$set(t.config.outgoing,"sortDesc",e)},"update:sort-desc":function(e){return t.$set(t.config.outgoing,"sortDesc",e)},filtered:t.onFilteredOutgoing},scopedSlots:t._u(["admin"===t.privilege||"fluxteam"===t.privilege?{key:"cell(disconnect)",fn:function(n){return[e("b-button",{staticClass:"mr-0",attrs:{id:`disconnect-peer-${n.item.ip}`,size:"sm",variant:"danger"}},[t._v(" Disconnect ")]),e("confirm-dialog",{attrs:{target:`disconnect-peer-${n.item.ip}`,"confirm-button":"Disconnect Peer"},on:{confirm:function(e){return t.disconnectPeer(n)}}})]}}:null,{key:"cell(lastPingTime)",fn:function(e){return[t._v(" "+t._s(new Date(e.item.lastPingTime).toLocaleString("en-GB",t.timeoptions))+" ")]}}],null,!0)})],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.config.outgoing.totalRows,"per-page":t.config.outgoing.perPage,align:"center",size:"sm"},model:{value:t.config.outgoing.currentPage,callback:function(e){t.$set(t.config.outgoing,"currentPage",e)},expression:"config.outgoing.currentPage"}}),e("span",{staticClass:"table-total"},[t._v("Total: "+t._s(t.config.outgoing.totalRows))])],1)],1)],1)],1),e("b-card",[e("h4",[t._v("Add Peer")]),e("div",{staticClass:"mt-1"},[t._v(" IP address (with api port): ")]),e("b-form-input",{staticClass:"mb-2",attrs:{id:"ip",placeholder:"Enter IP address:API Port",type:"text"},model:{value:t.addPeerIP,callback:function(e){t.addPeerIP=e},expression:"addPeerIP"}}),e("div",[e("b-button",{staticClass:"mb-2",attrs:{variant:"success","aria-label":"Initiate connection"},on:{click:t.addPeer}},[t._v(" Initiate connection ")])],1)],1)],1),e("b-tab",{attrs:{title:"Incoming"}},[e("b-overlay",{attrs:{show:t.config.incoming.loading,variant:"transparent",blur:"5px"}},[e("b-card",[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.config.incoming.pageOptions},model:{value:t.config.incoming.perPage,callback:function(e){t.$set(t.config.incoming,"perPage",e)},expression:"config.incoming.perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.config.incoming.filter,callback:function(e){t.$set(t.config.incoming,"filter",e)},expression:"config.incoming.filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.config.incoming.filter},on:{click:function(e){t.config.incoming.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"fluxnetwork-incoming-table",attrs:{striped:"",hover:"",responsive:"","per-page":t.config.incoming.perPage,"current-page":t.config.incoming.currentPage,items:t.config.incoming.incomingConnections,fields:t.config.incoming.fields,"sort-by":t.config.incoming.sortBy,"sort-desc":t.config.incoming.sortDesc,"sort-direction":t.config.incoming.sortDirection,filter:t.config.incoming.filter,"filter-included-fields":t.config.incoming.filterOn,"show-empty":"","empty-text":"No Incoming Connections"},on:{"update:sortBy":function(e){return t.$set(t.config.incoming,"sortBy",e)},"update:sort-by":function(e){return t.$set(t.config.incoming,"sortBy",e)},"update:sortDesc":function(e){return t.$set(t.config.incoming,"sortDesc",e)},"update:sort-desc":function(e){return t.$set(t.config.incoming,"sortDesc",e)},filtered:t.onFilteredIncoming},scopedSlots:t._u(["admin"===t.privilege||"fluxteam"===t.privilege?{key:"cell(disconnect)",fn:function(n){return[e("b-button",{staticClass:"mr-0",attrs:{id:`disconnect-incoming-${n.item.ip}`,size:"sm",variant:"danger"}},[t._v(" Disconnect ")]),e("confirm-dialog",{attrs:{target:`disconnect-incoming-${n.item.ip}`,"confirm-button":"Disconnect Incoming"},on:{confirm:function(e){return t.disconnectIncoming(n)}}})]}}:null],null,!0)})],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.config.incoming.totalRows,"per-page":t.config.incoming.perPage,align:"center",size:"sm"},model:{value:t.config.incoming.currentPage,callback:function(e){t.$set(t.config.incoming,"currentPage",e)},expression:"config.incoming.currentPage"}}),e("span",{staticClass:"table-total"},[t._v("Total: "+t._s(t.config.incoming.totalRows))])],1)],1)],1)],1)],1)],1)},i=[],a=n(58887),s=n(51015),r=n(16521),c=n(50725),l=n(86855),g=n(26253),u=n(46709),d=n(22183),f=n(8051),p=n(4060),m=n(22418),h=n(15193),b=n(10962),x=n(66126),P=n(20629),v=n(34547),y=n(87156),C=n(39055);const w=n(63005),I={components:{BTabs:a.M,BTab:s.L,BTable:r.h,BCol:c.l,BCard:l._,BRow:g.T,BFormGroup:u.x,BFormInput:d.e,BFormSelect:f.K,BInputGroup:p.w,BInputGroupAppend:m.B,BButton:h.T,BPagination:b.c,BOverlay:x.X,ConfirmDialog:y.Z,ToastificationContent:v.Z},data(){return{timeoptions:w,config:{outgoing:{perPage:10,pageOptions:[10,25,50,100],sortBy:"",sortDesc:!1,sortDirection:"asc",connectedPeers:[],filter:"",filterOn:[],fields:[{key:"ip",label:"IP Address",sortable:!0},{key:"port",label:"Port",sortable:!0},{key:"latency",label:"Latency",sortable:!0},{key:"lastPingTime",label:"Last Ping",sortable:!0},{key:"disconnect",label:""}],totalRows:1,currentPage:1,loading:!0},incoming:{perPage:10,pageOptions:[10,25,50,100],sortBy:"",sortDesc:!1,sortDirection:"asc",incomingConnections:[],filter:"",filterOn:[],fields:[{key:"ip",label:"IP Address",sortable:!0},{key:"port",label:"Port",sortable:!0},{key:"disconnect",label:""}],totalRows:1,currentPage:1,loading:!0}},addPeerIP:""}},computed:{...(0,P.rn)("flux",["privilege"])},mounted(){this.fluxConnectedPeersInfo(),this.fluxIncomingConnectionsInfo()},methods:{async fluxConnectedPeersInfo(){this.config.outgoing.loading=!0;const t=await C.Z.connectedPeersInfo();console.log(t),"success"===t.data.status?(this.config.outgoing.connectedPeers=t.data.data,this.config.outgoing.totalRows=this.config.outgoing.connectedPeers.length,this.config.outgoing.currentPage=1):this.showToast("danger",t.data.data.message||t.data.data),this.config.outgoing.loading=!1},async fluxIncomingConnectionsInfo(){this.config.incoming.loading=!0;const t=await C.Z.incomingConnectionsInfo();"success"===t.data.status?(this.config.incoming.incomingConnections=t.data.data,this.config.incoming.totalRows=this.config.incoming.incomingConnections.length,this.config.incoming.currentPage=1):this.showToast("danger",t.data.data.message||t.data.data),this.config.incoming.loading=!1},async disconnectPeer(t){const e=this,n=localStorage.getItem("zelidauth"),o=await C.Z.removePeer(n,`${t.item.ip}:${t.item.port}`).catch((t=>{this.showToast("danger",t.message||t)}));console.log(o),"success"===o.data.status?(this.showToast(o.data.status,o.data.data.message||o.data.data),this.config.outgoing.loading=!0,setTimeout((()=>{e.fluxConnectedPeersInfo()}),2500)):this.fluxConnectedPeersInfo()},async disconnectIncoming(t){const e=this,n=localStorage.getItem("zelidauth"),o=await C.Z.removeIncomingPeer(n,`${t.item.ip}:${t.item.port}`).catch((t=>{this.showToast("danger",t.message||t)}));console.log(o),"success"===o.data.status?(this.showToast(o.data.status,o.data.data.message||o.data.data),this.config.incoming.loading=!0,setTimeout((()=>{e.fluxIncomingConnectionsInfo()}),2500)):e.fluxIncomingConnectionsInfo()},async addPeer(){const t=this,e=localStorage.getItem("zelidauth"),n=await C.Z.addPeer(e,this.addPeerIP).catch((t=>{this.showToast("danger",t.message||t)}));console.log(n),"success"===n.data.status?(this.showToast(n.data.status,n.data.data.message||n.data.data),this.config.incoming.loading=!0,setTimeout((()=>{t.fluxConnectedPeersInfo()}),2500)):(this.showToast("danger",n.data.data.message||n.data.data),t.fluxConnectedPeersInfo())},onFilteredOutgoing(t){this.config.outgoing.totalRows=t.length,this.config.outgoing.currentPage=1},onFilteredIncoming(t){this.config.incoming.totalRows=t.length,this.config.incoming.currentPage=1},showToast(t,e,n="InfoIcon"){this.$toast({component:v.Z,props:{title:e,icon:n,variant:t}})}}},k=I;var Z=n(1001),B=(0,Z.Z)(k,o,i,!1,null,null,null);const $=B.exports},63005:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});const o={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},i={year:"numeric",month:"short",day:"numeric"},a={shortDate:o,date:i}},39055:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(80914);const i={softUpdateFlux(t){return(0,o.Z)().get("/flux/softupdateflux",{headers:{zelidauth:t}})},softUpdateInstallFlux(t){return(0,o.Z)().get("/flux/softupdatefluxinstall",{headers:{zelidauth:t}})},updateFlux(t){return(0,o.Z)().get("/flux/updateflux",{headers:{zelidauth:t}})},hardUpdateFlux(t){return(0,o.Z)().get("/flux/hardupdateflux",{headers:{zelidauth:t}})},rebuildHome(t){return(0,o.Z)().get("/flux/rebuildhome",{headers:{zelidauth:t}})},updateDaemon(t){return(0,o.Z)().get("/flux/updatedaemon",{headers:{zelidauth:t}})},reindexDaemon(t){return(0,o.Z)().get("/flux/reindexdaemon",{headers:{zelidauth:t}})},updateBenchmark(t){return(0,o.Z)().get("/flux/updatebenchmark",{headers:{zelidauth:t}})},getFluxVersion(){return(0,o.Z)().get("/flux/version")},broadcastMessage(t,e){const n=e,i={headers:{zelidauth:t}};return(0,o.Z)().post("/flux/broadcastmessage",JSON.stringify(n),i)},connectedPeers(){return(0,o.Z)().get(`/flux/connectedpeers?timestamp=${Date.now()}`)},connectedPeersInfo(){return(0,o.Z)().get(`/flux/connectedpeersinfo?timestamp=${Date.now()}`)},incomingConnections(){return(0,o.Z)().get(`/flux/incomingconnections?timestamp=${Date.now()}`)},incomingConnectionsInfo(){return(0,o.Z)().get(`/flux/incomingconnectionsinfo?timestamp=${Date.now()}`)},addPeer(t,e){return(0,o.Z)().get(`/flux/addpeer/${e}`,{headers:{zelidauth:t}})},removePeer(t,e){return(0,o.Z)().get(`/flux/removepeer/${e}`,{headers:{zelidauth:t}})},removeIncomingPeer(t,e){return(0,o.Z)().get(`/flux/removeincomingpeer/${e}`,{headers:{zelidauth:t}})},adjustKadena(t,e,n){return(0,o.Z)().get(`/flux/adjustkadena/${e}/${n}`,{headers:{zelidauth:t}})},adjustRouterIP(t,e){return(0,o.Z)().get(`/flux/adjustrouterip/${e}`,{headers:{zelidauth:t}})},adjustBlockedPorts(t,e){const n={blockedPorts:e},i={headers:{zelidauth:t}};return(0,o.Z)().post("/flux/adjustblockedports",n,i)},adjustAPIPort(t,e){return(0,o.Z)().get(`/flux/adjustapiport/${e}`,{headers:{zelidauth:t}})},adjustBlockedRepositories(t,e){const n={blockedRepositories:e},i={headers:{zelidauth:t}};return(0,o.Z)().post("/flux/adjustblockedrepositories",n,i)},getKadenaAccount(){const t={headers:{"x-apicache-bypass":!0}};return(0,o.Z)().get("/flux/kadena",t)},getRouterIP(){const t={headers:{"x-apicache-bypass":!0}};return(0,o.Z)().get("/flux/routerip",t)},getBlockedPorts(){const t={headers:{"x-apicache-bypass":!0}};return(0,o.Z)().get("/flux/blockedports",t)},getAPIPort(){const t={headers:{"x-apicache-bypass":!0}};return(0,o.Z)().get("/flux/apiport",t)},getBlockedRepositories(){const t={headers:{"x-apicache-bypass":!0}};return(0,o.Z)().get("/flux/blockedrepositories",t)},getMarketPlaceURL(){return(0,o.Z)().get("/flux/marketplaceurl")},getZelid(){const t={headers:{"x-apicache-bypass":!0}};return(0,o.Z)().get("/flux/zelid",t)},getStaticIpInfo(){return(0,o.Z)().get("/flux/staticip")},restartFluxOS(t){const e={headers:{zelidauth:t,"x-apicache-bypass":!0}};return(0,o.Z)().get("/flux/restart",e)},tailFluxLog(t,e){return(0,o.Z)().get(`/flux/tail${t}log`,{headers:{zelidauth:e}})},justAPI(){return(0,o.Z)()},cancelToken(){return o.S}}}}]);