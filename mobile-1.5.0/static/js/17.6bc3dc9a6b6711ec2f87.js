(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+GLu":function(e,t,n){},"08k9":function(e,t,n){},"1flF":function(e,t,n){"use strict";n.r(t);var s=n("QbLZ"),i=n.n(s),a=n("L2JU"),o=n("3eXy"),r=n("NDHI"),u=n("iqdw"),c=n("T2pr"),l=n("0LM5"),f=n("tcTK"),d={name:"messageDetails",extends:{},props:{},data:function(){return{messageDetail:{},headerTitle:this.$route.query.title,isDeleteMessage:!1,messageTab:this.$route.query.tab}},computed:i()({},Object(a.b)({isLogin:function(e){return e.user.isLogin},userObj:function(e){return e.user.userObj}})),components:{GhwHeaderTitle:c.a,GhwBtn:u.a,GhwPopUp:l.a,GhwInfoDetail:f.a},watch:{isLogin:function(){this.isLogin&&this.setMessageDetail()}},methods:{goBack:function(){this.$router.push({name:"MyMessageList",query:{tab:this.$route.query.tab}})},getTime:function(e){return this.$moment(new Date(parseInt(e))).format("YYYY-MM-DD")},returnMsg:function(){this.$router.push({name:"MyMessageList"})},setMessageDetail:function(){var e=this,t={userId:this.userObj.userId,userToken:this.userObj.h5Token,notifId:this.$route.query.notifId};Object(o.r)(t).then(function(t){e.messageDetail=t.data},function(e){console.log(e)})},setDeleteMessage:function(){var e=this,t={userId:this.userObj.userId,userToken:this.userObj.h5Token,notifId:this.$route.query.notifId};Object(o.d)(t).then(function(t){e.$router.back(-1)},function(e){console.log(e)})},deleteMsg:function(){this.isDeleteMessage=!0},senderType:function(e){var t="";switch(parseInt(e)){case 0:t=this.$t("message.me.myMessage.system");break;case 1:t=this.$t("message.me.myMessage.announcement");break;case 2:t=this.$t("message.me.myMessage.event");break;case 3:t=this.$t("message.me.myMessage.warning");break;case 4:t=this.$t("message.me.myMessage.guide")}return t},linkTo:function(e,t,n,s){switch(parseInt(t)){case 0:Object(r.a)(this.isLogin,n,s,e,this);break;case 1:this.$router.push({name:"Information",query:{newsId:n,notifType:1}});break;case 2:this.$router.push({name:"Information",query:{newsId:n,notifType:2}});break;case 3:this.$router.push({name:"Information",query:{newsId:n,notifType:3}});break;case 4:this.$router.push({name:"ExternalIframeWrapper",query:{url:e,gameIcon:"gameIcon"}})}}},beforeMount:function(){},mounted:function(){this.setMessageDetail()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){this.$store.dispatch("isShowPopup",!1)},destroyed:function(){}},p=(n("lEfL"),n("KHd+")),h=Object(p.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ghw-header-title",{attrs:{iconStyle:"delete"},on:{goBack:e.goBack,hanlderMessage:e.deleteMsg}}),e._v(" "),n("div",{staticClass:"message-detail clearfix"},[n("ghw-info-detail",{attrs:{infoTitle:e.messageDetail.notifTitle,infoPublishTime:e.messageDetail.sendTime,infoDescription:e.messageDetail.notifContent}}),e._v(" "),5!=e.messageDetail.notifType?n("span",{staticClass:"detail-more",on:{click:function(t){e.linkTo(e.messageDetail.notifLink,e.messageDetail.notifType,e.messageDetail.id,e.messageDetail.appName)}}},[e._v(e._s(e.$t("message.me.messageDetail.clickDetail")))]):e._e()],1),e._v(" "),n("ghw-pop-up",{attrs:{isShowPopUp:e.isDeleteMessage,popupClass:"pop-up-bottom"},on:{closePopUp:function(t){e.isDeleteMessage=!1},closeMask:function(t){e.isDeleteMessage=!1}}},[n("div",{staticClass:"delete-message-content",attrs:{slot:"title"},slot:"title"},[e._v("\n      "+e._s(e.$t("message.me.bindAcctData.confirmDelete"))+"\n    ")]),e._v(" "),n("div",{staticClass:"add-game-btn",attrs:{slot:"btn"},slot:"btn"},[n("ghw-btn",{attrs:{type:"cancle",inputValue:e.$t("message.public.cancel"),inputType:"button"},on:{triggerEvent:function(t){e.isDeleteMessage=!1}}}),e._v(" "),n("ghw-btn",{attrs:{type:"popup",inputValue:e.$t("message.public.confirm"),size:"public",inputType:"button"},on:{triggerEvent:e.setDeleteMessage}})],1)])],1)},[],!1,null,"b6e17c30",null);h.options.__file="index.vue";t.default=h.exports},"39R9":function(e,t,n){"use strict";var s=n("UPaO");n.n(s).a},"A/YR":function(e,t,n){"use strict";var s={name:"GhwWarnPop",props:{isShowWarn:{type:Boolean,default:!1},warnContent:{type:String,default:""},isChangeContent:{type:Boolean,default:!1},serviceAnimation:{type:Boolean,default:!1}},data:function(){return{isShowWranContent:!1}},methods:{getWarnStyle:function(){return this.serviceAnimation?{"service-animation":this.isShowWranContent}:{"field-animation":this.isShowWranContent}}},watch:{isChangeContent:function(){var e=this;this.isShowWranContent||(this.isShowWranContent=!0,setTimeout(function(){e.isShowWranContent=!1},2e3))}},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},i=(n("39R9"),n("KHd+")),a=Object(i.a)(s,function(){var e=this.$createElement,t=this._self._c||e;return this.isShowWarn?t("div",{staticClass:"field-warning",class:this.getWarnStyle()},[this._v("\n  "+this._s(this.warnContent)+"\n")]):this._e()},[],!1,null,"05c4af85",null);a.options.__file="index.vue";t.a=a.exports},T2pr:function(e,t,n){"use strict";var s=n("A/YR"),i={name:"GhwHeaderTitle",props:{headerContent:{type:String,default:""},iconStyle:{type:String,default:""},isHasRedDot:{type:Boolean,default:!1},isShowWarn:{type:Boolean,default:!1},warnContent:{type:String,default:""},isChangeContent:{type:Boolean,default:!1},showEditSave:{type:Boolean,default:!1},EditText:{type:String,default:""}},data:function(){return{EditContent:this.$t("message.public.save")}},components:{GhwWarnPop:s.a},watch:{},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},a=(n("lLto"),n("KHd+")),o=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap-title-box",attrs:{id:"wrap_title_box"}},[n("div",{staticClass:"title-background clearfix",attrs:{id:"title_height"}},[n("i",{staticClass:"go-back-triangle ",class:["back"+e.iconStyle],on:{click:function(t){e.$emit("goBack")}}},[e.EditText===e.EditContent?n("span",{staticClass:"accout-text"},[e._v(e._s(e.$t("message.public.cancel")))]):e._e()]),e._v(" "),n("i",{staticClass:"title-icon",class:[e.iconStyle+"-icon",{newest:e.isHasRedDot}],on:{click:function(t){e.$emit("hanlderMessage")}}},[e.showEditSave?n("span",{staticClass:"accout-text"},[e._v(e._s(e.EditText))]):e._e()]),e._v(" "),n("h3",{staticClass:"header-content"},[e._v(e._s(e.headerContent))])]),e._v(" "),n("ghw-warn-pop",{staticClass:"location",attrs:{isShowWarn:e.isShowWarn,warnContent:e.warnContent,isChangeContent:e.isChangeContent}})],1)},[],!1,null,"a489e408",null);o.options.__file="index.vue";t.a=o.exports},UPaO:function(e,t,n){},fw0T:function(e,t,n){"use strict";var s=n("08k9");n.n(s).a},lEfL:function(e,t,n){"use strict";var s=n("+GLu");n.n(s).a},lLto:function(e,t,n){"use strict";var s=n("vGLk");n.n(s).a},tcTK:function(e,t,n){"use strict";var s={name:"GhwInfoDetail",extends:{},props:{infoTitle:{type:String,default:""},infoSender:{type:String,default:""},infoPublishTime:{type:String,default:""},infoDescription:{type:String,default:""}},data:function(){return{}},computed:{},components:{},watch:{},methods:{getTime:function(e){return this.$moment(new Date(parseInt(e))).format("YYYY-MM-DD HH:mm")}},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},i=(n("fw0T"),n("KHd+")),a=Object(i.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-detail clearfix"},[n("div",{staticClass:"detail-title"},[e._v(e._s(e.infoTitle))]),e._v(" "),n("div",{staticClass:"detail-sender-time"},[n("span",[e._v(e._s(e.$t("message.me.messageDetail.sender"))+"  ")]),e._v("【\n    "),n("span",[e._v(e._s(e.$t("message.me.myMessage.system"))+"】")]),e._v(" "),n("span",{staticClass:"detail-time"},[e._v(e._s(e.getTime(e.infoPublishTime)))])]),e._v(" "),n("div",{staticClass:"detail-content",domProps:{innerHTML:e._s(e.infoDescription)}})])},[],!1,null,"9f0d8d8c",null);a.options.__file="index.vue";t.a=a.exports},vGLk:function(e,t,n){}}]);