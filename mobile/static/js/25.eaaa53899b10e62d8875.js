(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"0FDQ":function(t,e,a){"use strict";var n=a("c2Ep");a.n(n).a},"0U8+":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n@charset \"UTF-8\";\n\n/*二级导航栏*/\n.sub-nav-box-placeholder[data-v-2a283451] {\n  width: 100%;\n  height: 1.09375rem;\n}\n.sub-nav-box-placeholder[data-v-2a283451] .is-fixed {\n  top: 1.25rem;\n}\n.sub-nav-box[data-v-2a283451] {\n  width: 100%;\n  height: 1.09375rem;\n}\n.sub-nav-box[data-v-2a283451] .sub-left {\n  margin-left: 0.375rem;\n}\n.sub-nav-box[data-v-2a283451] .sub-right {\n  margin-right: 0.375rem;\n}\n.sub-nav-box[data-v-2a283451] .sub-nav-item {\n  height: 1.09375rem;\n  text-align: center;\n  line-height: 1.09375rem;\n  position: relative;\n  border-bottom: 0.03125rem solid #eee;\n}\n.sub-nav-box[data-v-2a283451] .sub-nav-item:after {\n  content: '';\n  display: inline-block;\n  height: 0.46875rem;\n  width: 0.03125rem;\n  position: absolute;\n  right: 0;\n  background: #eeeeee;\n  top: 0.34375rem;\n}\n.sub-nav-box[data-v-2a283451] .sub-nav-item:last-child:after {\n  height: 0;\n}\n.sub-nav-box[data-v-2a283451] .sub-nav-item .mint-tab-item-label {\n  margin-top: -0.203125rem;\n  font-size: 0.4375rem;\n  color: #333333;\n}\n.sub-nav-box[data-v-2a283451] .sub-nav-item.is-selected {\n  background: none;\n  border-bottom: 0.03125rem solid #eee;\n}\n.sub-nav-box[data-v-2a283451] .sub-nav-item.is-selected .mint-tab-item-label {\n  width: 1.71875rem;\n  height: 0.75rem;\n  line-height: 0.75rem;\n  border: 0.03125rem solid rgba(23, 135, 221, 0.5);\n  border-radius: 0.375rem;\n  font-size: 0.4375rem;\n  color: #1787dd;\n  margin: auto;\n  margin-top: -0.375rem;\n}\n.fiex-bar[data-v-2a283451]::after {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 0.3125rem;\n  height: 0.46875rem;\n  width: 0.03125rem;\n  z-index: 1;\n  background: #eee;\n}\n.newest[data-v-2a283451]::before {\n  right: 35%;\n}\n.newsBox[data-v-2a283451] {\n  position: relative;\n  width: 100%;\n  min-height: 3.125rem;\n}\n.newsList[data-v-2a283451] {\n  position: relative;\n  width: 100%;\n}\n.mint-navbar.is-fixed[data-v-2a283451] {\n  -webkit-box-shadow: 0 0.0625rem 0.15625rem #ebebeb;\n          box-shadow: 0 0.0625rem 0.15625rem #ebebeb;\n}\n.privacy[data-v-2a283451] {\n  margin: 0.46875rem 0;\n  text-align: center;\n}\n.privacy a[data-v-2a283451] {\n  height: 0.3125rem;\n  line-height: 0.3125rem;\n  text-decoration: underline;\n  font-size: 0.28125rem;\n  color: #999999;\n}",""])},"8C3o":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{ref:"infoList",staticClass:"sub-nav-box-placeholder"},[a("mt-navbar",{staticClass:"sub-nav-box",attrs:{fixed:t.isSubNavBarFixed},model:{value:t.subNavBar,callback:function(e){t.subNavBar=e},expression:"subNavBar"}},[t.anncShow?[a("div",{staticClass:"fiex-bar"},[a("mt-tab-item",{staticClass:"sub-nav-item sub-left",class:{newest:t.isShowRDHomeInfoNews},attrs:{id:"subNavBar1"}},[t._v(t._s(t.$t("message.homepage.announcement")))])],1)]:t._e(),t._v(" "),t.guideShow?[a("mt-tab-item",{staticClass:"sub-nav-item ",attrs:{id:"subNavBar2"}},[t._v(t._s(t.$t("message.homepage.strategy")))])]:t._e(),t._v(" "),t.eventShow?[a("mt-tab-item",{staticClass:"sub-nav-item sub-right",class:{newest:t.isShowRDHomeInfoEvent},attrs:{id:"subNavBar3"}},[t._v(t._s(t.$t("message.homepage.event")))])]:t._e()],2)],1),t._v(" "),a("mt-tab-container",{staticClass:"newsBox",model:{value:t.subNavBar,callback:function(e){t.subNavBar=e},expression:"subNavBar"}},[t.anncShow?[a("mt-tab-container-item",{attrs:{id:"subNavBar1"}},[a("div",{staticClass:"newsList"},[a("ghw-consulting-item",{attrs:{newsArr:t.newsArr,subNavBar:t.subNavBar}}),t._v(" "),a("ghw-no-content",{attrs:{isShowNoContent:!t.showAnncLoading&&0===t.newsArr.length}}),t._v(" "),a("ghw-load-gif",{attrs:{isShowLoadGif:t.showAnncLoading}}),t._v(" "),a("ghw-icon-more",{attrs:{isNoMoredata:t.newsArrIconMore,loadNextPage:t.loadAnncNextPage,isShowBottomText:!1,isNoContent:!t.showAnncLoading&&0===t.newsArr.length}}),t._v(" "),t.showAnncLoading?t._e():a("div",{staticClass:"privacy"},[a("a",{staticClass:"privacy",attrs:{href:"#"},on:{click:function(e){t.isShowPolicy=!0}}},[t._v(t._s(t.$t("message.buoy.privacy.privacyControl")))])])],1)])]:t._e(),t._v(" "),t.guideShow?[a("mt-tab-container-item",{attrs:{id:"subNavBar2"}},[a("ghw-consulting-item",{attrs:{newsArr:t.gameGuideArr,subNavBar:t.subNavBar}}),t._v(" "),a("ghw-no-content",{attrs:{isShowNoContent:0===t.gameGuideArr.length}}),t._v(" "),a("ghw-load-gif",{attrs:{isShowLoadGif:t.showEventLoading}}),t._v(" "),t.gameGuideArrIconMore?a("ghw-icon-more",{attrs:{isShowBottomText:!1,isNoContent:!t.showEventLoading&&0===t.gameGuideArr.length},on:{clickHandeler:t.getMoreGuide}}):t._e()],1)]:t._e(),t._v(" "),t.eventShow?[a("mt-tab-container-item",{attrs:{id:"subNavBar3"}},[a("ghw-info-event",{attrs:{eventArr:t.eventArr}}),t._v(" "),a("ghw-no-content",{attrs:{isShowNoContent:!t.showEventLoading&&0===t.eventArr.length}}),t._v(" "),a("ghw-load-gif",{attrs:{isShowLoadGif:t.showEventLoading}}),t._v(" "),a("ghw-icon-more",{attrs:{isNoMoredata:t.eventArrIconMore,loadNextPage:t.loadEventNextPage,isShowBottomText:!1,isNoContent:!t.showEventLoading&&0===t.eventArr.length}}),t._v(" "),t.showEventLoading?t._e():a("div",{staticClass:"privacy"},[a("a",{staticClass:"privacy",attrs:{href:"#"},on:{click:function(e){t.isShowPolicy=!0}}},[t._v(t._s(t.$t("message.buoy.privacy.privacyControl")))])])],1)]:t._e()],2),t._v(" "),a("privacy-policy",{attrs:{isShowPolicy:t.isShowPolicy,privacyUrl:"https://www.chipsgames.com/privacy/privacy_and_cookie_policy.html"},on:{closePolicy:function(e){t.isShowPolicy=!1}}})],1)};n._withStripped=!0;var s=a("m1cH"),o=a.n(s),i=a("QbLZ"),r=a.n(i),c=a("QYPn"),u=a("3eXy"),v=a("L2JU"),h=a("WPQt"),d=a("/ULO"),l=a("jMMb"),b=a("vXAz"),g=a("UZnt"),m=a("Ub41"),w=a("djgE"),f={name:"InformationList",extends:{},props:{isSubNavBarFixed:{type:Boolean,default:function(){return!1}},subNavBar3:{type:String,default:"subNavBar3"},isLoadNextPage:{type:Boolean,default:function(){return!1}},gameListOffsetTop:{type:Number,default:function(){return 0}},isStartService:{type:Boolean,default:!1},navBar:{type:String,default:""}},data:function(){return{subNavBar:this.$route.params.subNavBar?this.$route.params.subNavBar:"subNavBar1",newsArr:[],gameGuideArr:[],eventArr:[],anncPage:1,guidePage:1,eventPage:1,anncShow:!0,guideShow:!1,eventShow:!0,loadEventNextPage:!1,loadAnncNextPage:!1,newsArrIconMore:!1,gameGuideArrIconMore:!0,eventArrIconMore:!1,showEventLoading:!0,showAnncLoading:!0,flagSubNavBar1:0,flagSubNavBar2:0,flagSubNavBar3:0,scrollTopSubNavBar1:0,scrollTopSubNavBar2:0,scrollTopSubNavBar3:0,isShowPolicy:!1,API_PATH:m.a.API_PATH}},computed:r()({},Object(v.b)({count:function(t){return t.user.count},redDotList:function(t){return t.redDotPush.redDotList},isShowRDHomeInfoNews:function(t){return t.redDotPush.redDotList[w.x].hasRead},isShowRDHomeInfoEvent:function(t){return t.redDotPush.redDotList[w.w].hasRead}})),components:{GhwLoadGif:h.a,GhwIconMore:c.a,GhwConsultingItem:d.a,GhwNoContent:l.a,PrivacyPolicy:b.a,GhwInfoEvent:g.a},watch:{isLoadNextPage:function(t){t&&("subNavBar1"!==this.subNavBar||this.newsArrIconMore||this.showAnncLoading||(this.loadAnncNextPage=!0,this.getMoreAnnc()),"subNavBar3"!==this.subNavBar||this.eventArrIconMore||this.showEventLoading||(this.loadEventNextPage=!0,this.getMoreEvent()))},subNavBar:function(t,e){var a=this;this.focusTab();var n=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(t!==e){if(a.isSubNavBarFixed){switch(e){case"subNavBar1":a.scrollTopSubNavBar1=n;break;case"subNavBar2":a.scrollTopSubNavBar2=n;break;case"subNavBar3":a.scrollTopSubNavBar3=n}switch(t){case"subNavBar1":setTimeout(function(){try{window.offsetTop=a.scrollTopSubNavBar1}catch(t){document.documentElement.scrollTop=document.body.scrollTop=a.scrollTopSubNavBar1}},10);break;case"subNavBar2":setTimeout(function(){try{window.offsetTop=a.scrollTopSubNavBar2}catch(t){document.documentElement.scrollTop=document.body.scrollTop=a.scrollTopSubNavBar2}},10);break;case"subNavBar3":setTimeout(function(){try{window.offsetTop=a.scrollTopSubNavBar3}catch(t){document.documentElement.scrollTop=document.body.scrollTop=a.scrollTopSubNavBar3}},10)}}"subNavBar1"===t?this.$store.dispatch("changeRedDotStatus",{redDotLoca:w.x}):"subNavBar3"===t&&this.$store.dispatch("changeRedDotStatus",{redDotLoca:w.w})}},gameListOffsetTop:function(t){0===this.scrollTopSubNavBar1&&(this.scrollTopSubNavBar1=t),0===this.scrollTopSubNavBar2&&(this.scrollTopSubNavBar2=t),0===this.scrollTopSubNavBar3&&(this.scrollTopSubNavBar3=t)},isStartService:function(t){t&&this.focusTab()},redDotList:function(){(this.newsArr.length>0||this.eventArr.length>0)&&(this.redDotArrList.isRedDotHomeInfoNews&&(this.newsArr=[],this.anncPage=1,this.setNewsList()),this.redDotArrList.isRedDotHomeInfoEvent&&(this.eventArr=[],this.eventPage=1,this.setEventList()))},navBar:function(){"navBar3"===this.navBar&&"subNavBar1"===this.subNavBar&&this.$store.dispatch("changeRedDotStatus",{redDotLoca:w.x})}},methods:{focusTab:function(){switch(this.subNavBar){case"subNavBar1":0===this.flagSubNavBar1&&(this.setNewsList(),this.flagSubNavBar1++);break;case"subNavBar2":0===this.flagSubNavBar2&&(this.setGameGuideList(),this.flagSubNavBar2++);break;case"subNavBar3":0===this.flagSubNavBar3&&(this.setEventList(),this.flagSubNavBar3++)}},getMoreEvent:function(){this.eventPage++,this.setEventList()},getMoreGuide:function(){this.guidePage++,this.setGameGuideList()},getMoreAnnc:function(){this.anncPage++,this.setNewsList()},setNewsList:function(){var t=this,e={newsType:0,page:this.anncPage,pageSize:13};Object(u.t)(e).then(function(e){var a;(t.showAnncLoading=!1,t.loadAnncNextPage=!1,t.$emit("isShowLoadGifNews",!1),e.data.newsList&&e.data.newsList.length>0)?(a=t.newsArr).push.apply(a,o()(e.data.newsList)):t.newsArrIconMore=!0})},setGameGuideList:function(){var t=this,e={newsType:1,page:this.guidePage,pageSize:13};Object(u.t)(e).then(function(e){var a;e.data.newsList&&e.data.newsList.length>0?(a=t.gameGuideArr).push.apply(a,o()(e.data.newsList)):t.gameGuideArrIconMore=!1})},setEventList:function(){var t=this,e={newsType:2,page:this.eventPage,pageSize:13};Object(u.t)(e).then(function(e){var a;(t.loadEventNextPage=!1,t.showEventLoading=!1,t.$emit("isShowLoadGifEvent",!1),e.data.newsList&&e.data.newsList.length>0)?(a=t.eventArr).push.apply(a,o()(e.data.newsList)):t.eventArrIconMore=!0})}},beforeMount:function(){},mounted:function(){this.scrollTopSubNavBar1=this.gameListOffsetTop,this.scrollTopSubNavBar2=this.gameListOffsetTop,this.scrollTopSubNavBar3=this.gameListOffsetTop},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},p=(a("0FDQ"),a("KHd+")),N=Object(p.a)(f,n,[],!1,null,"2a283451",null);N.options.__file="src/containers/Home/InformationList/index.vue";e.default=N.exports},c2Ep:function(t,e,a){var n=a("0U8+");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("SZ7m").default)("f7da813c",n,!1,{})}}]);