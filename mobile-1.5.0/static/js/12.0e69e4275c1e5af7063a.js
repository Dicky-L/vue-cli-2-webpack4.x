(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"39R9":function(e,t,n){"use strict";var i=n("UPaO");n.n(i).a},"58IK":function(e,t,n){},"6dHy":function(e,t,n){"use strict";var i=n("vjJv");n.n(i).a},"A/YR":function(e,t,n){"use strict";var i={name:"GhwWarnPop",props:{isShowWarn:{type:Boolean,default:!1},warnContent:{type:String,default:""},isChangeContent:{type:Boolean,default:!1},serviceAnimation:{type:Boolean,default:!1}},data:function(){return{isShowWranContent:!1}},methods:{getWarnStyle:function(){return this.serviceAnimation?{"service-animation":this.isShowWranContent}:{"field-animation":this.isShowWranContent}}},watch:{isChangeContent:function(){var e=this;this.isShowWranContent||(this.isShowWranContent=!0,setTimeout(function(){e.isShowWranContent=!1},2e3))}},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},a=(n("39R9"),n("KHd+")),s=Object(a.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return this.isShowWarn?t("div",{staticClass:"field-warning",class:this.getWarnStyle()},[this._v("\n  "+this._s(this.warnContent)+"\n")]):this._e()},[],!1,null,"05c4af85",null);s.options.__file="index.vue";t.a=s.exports},AGVk:function(e,t,n){"use strict";var i={props:{dataDict:{type:Array,default:function(){return[]}},isRequested:{type:Boolean,default:!1},defaultIndex:{type:Number,default:0},transDate:{type:String,default:"value"},dataIndex:{type:Boolean,default:!1}},data:function(){return{industrySlots:[],popupVisible:!1,currentIndustry:null}},components:{},methods:{open:function(){this.popupVisible=!0},onIndustryChange:function(e,t){this.currentIndustry=t[0]},handleIndustry:function(){this.popupVisible=!1,this.$emit("confirm",this.currentIndustry)}},computed:{},watch:{isRequested:function(e,t){e&&(this.industrySlots=[{flex:1,values:this.dataDict,className:"slot1",textAlign:"center",defaultIndex:this.defaultIndex}])},dataIndex:function(e){this.industrySlots=[{flex:1,values:this.dataDict,className:"slot1",textAlign:"center",defaultIndex:this.defaultIndex}]},defaultIndex:function(e){this.industrySlots=[{flex:1,values:this.dataDict,className:"slot1",textAlign:"center",defaultIndex:this.defaultIndex}]}},mounted:function(){var e={flex:1,values:this.dataDict,className:"slot1",textAlign:"center",defaultIndex:this.defaultIndex};console.log("defaultIndex",this.defaultIndex),this.industrySlots.push(e),this.currentIndustry=this.value}},a=(n("Rp9Y"),n("KHd+")),s=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mt-popup",{staticClass:"mint-popup-4",attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[n("span",{staticClass:"mint-datetime-action mint-datetime-cancel",on:{click:function(t){e.popupVisible=!1,e.$emit("cancel")}}},[e._v(e._s(e.$t("message.public.cancel")))]),e._v(" "),n("span",{staticClass:"mint-datetime-action mint-datetime-confirm",on:{click:e.handleIndustry}},[e._v(e._s(e.$t("message.public.confirm")))]),e._v(" "),n("mt-picker",{staticClass:"picker-top",attrs:{slots:e.industrySlots,"visible-item-count":5,"show-toolbar":!1,"value-key":e.transDate},on:{change:e.onIndustryChange}})],1)},[],!1,null,"102af160",null);s.options.__file="index.vue";t.a=s.exports},GtZd:function(e,t,n){"use strict";var i=n("conj");n.n(i).a},KbzQ:function(e,t,n){"use strict";n.r(t);var i=n("gDS+"),a=n.n(i),s=n("QbLZ"),o=n.n(s),c=n("L2JU"),r=n("dqDD"),l=n("3eXy"),u=n("b0Xh"),d=n.n(u),h=n("AGVk"),p=n("Sok2"),f=n("djgE"),g=n("fGem"),m=n("iqdw"),v=n("fGzO"),y=n("gyqf"),b=n("kX11"),I=n("T2pr"),k=n("SLrP"),w={name:"BindAccount",extends:{},props:{},data:function(){return{checkedValue:"",isEdit:!1,startDate:new Date("1900/1/1"),endDate:new Date,industryValue:null,genderValue:null,EditText:this.$t("message.public.edit"),isChangeContent:!1,warnContent:"",iconString:"",isShowSpinner:!1,showEditSave:!0,account:{gender:{selectedKey:null,dataDict:[]},birthdate:null,email:"",mobile:"",industry:{selectedKey:null,dataDict:[]}},birthValue:null,popupVisible:!1,currentIndustry:null,dataDictIndus:[],industrySlots:[{flex:1,className:"slot1",textAlign:"center"}],requestComplete:!1,uploading:!1,oldAccount:{},industryIndex:0,genderIndex:0,headerImage:"",picValue:"",isShowInput:!0,oldIndustryIndex:0}},computed:o()({},Object(c.b)({isLogin:function(e){return e.user.isLogin},userObj:function(e){return e.user.userObj},userId:function(e){return e.user.userObj.userId},showFooterFlag:function(e){return e.home.showFooterFlag},userToken:function(e){return e.user.userObj.h5Token}})),components:{TemplatePicker:h.a,GhwField:p.a,GhwBtn:m.a,HeaderMessage:v.a,HeaderIcon:y.a,GhwHeaderTitle:I.a},watch:{userId:function(e,t){this.initAccountMsg()}},methods:{getGender:function(e){return"0"===e?1:0},changeSelectedKey:function(e){this.account.gender.selectedKey=e.key},open:function(e){if(this.isEdit){this.$refs[e].open();var t=this;setTimeout(function(){document.getElementsByClassName("v-modal")[0].addEventListener("click",function(){t.$store.dispatch("showFooter",!0)})},500),this.$store.dispatch("showFooter",!1)}},confirmGender:function(e){this.genderValue=e.value,this.account.gender.selectedKey=e.key,this.$store.dispatch("showFooter",!0)},confirmIndustry:function(e){this.industryValue=e.value,this.account.selectedKey=e.key,this.$store.dispatch("showFooter",!0)},confirmBirthdate:function(e){this.account.birthdate=this.$moment(new Date(e)).format("YYYY-MM-DD"),this.$store.dispatch("showFooter",!0)},changeImage:function(e){this.uploading=!0;var t=e.target.files||e.dataTransfer.files,n=document.getElementById("imgform");if(t.length){if(this.picValue=t[0],this.picValue>5242880)return Object(r.Toast)({message:this.$t("message.me.profile.picExceed5M"),position:"bottom"}),void n.reset();this.imgPreview(this.picValue)}},goBack:function(){this.EditText===this.$t("message.public.save")?(this.cancleAccountMsg(),this.goBackHandler()):this.$router.push({name:"PersonalCenter"})},goBackHandler:function(){this.iconString="",this.EditText=this.$t("message.public.edit")},postImg:function(){var e=this,t=document.getElementById("imgform"),n=new FormData;n.append("attachData",this.convertBase64UrlToBlob(this.headerImage)),n.append("userId",this.userId),n.append("userToken",this.userToken),n.append("v",(new Date).getTime()),n.append("locale",(navigator.language||navigator.userLanguage).toString().replace(/-/,"_")),null!=this.userId&&null!=this.userToken&&Object(l.K)(n).then(function(t){t.data&&(e.updateImage(t.data.attachUrl),e.account.iconUrl=t.data.attachUrl)},function(e){console.log(e)}),t.reset()},imgPreview:function(e){var t=this,n=void 0;if(d.a.getData(e,function(){n=d.a.getTag(this,"Orientation")}),e&&window.FileReader&&/^image/.test(e.type)){var i=new FileReader;i.readAsDataURL(e),i.onloadend=function(){var e=this.result,i=new Image;i.src=e,this.result.length<=102400?(t.headerImage=this.result,t.postImg()):i.onload=function(){var e=t.compress(i,n);t.headerImage=e,t.postImg()}}}},convertBase64UrlToBlob:function(e){for(var t=window.atob(e.split(",")[1]),n=new ArrayBuffer(t.length),i=new Uint8Array(n),a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return new Blob([n],{type:"image/png"})},rotateImg:function(e,t,n){if(null!=e){var i=e.height,a=e.width,s=2;null==s&&(s=0),"right"===t?++s>3&&(s=0):--s<0&&(s=3);var o=90*s*Math.PI/180,c=n.getContext("2d");switch(s){case 0:n.width=a,n.height=i,c.drawImage(e,0,0);break;case 1:n.width=i,n.height=a,c.rotate(o),c.drawImage(e,0,-i);break;case 2:n.width=a,n.height=i,c.rotate(o),c.drawImage(e,-a,-i);break;case 3:n.width=i,n.height=a,c.rotate(o),c.drawImage(e,-a,0)}}},compress:function(e,t){var n=document.createElement("canvas"),i=n.getContext("2d"),a=document.createElement("canvas"),s=a.getContext("2d"),o=e.src.length,c=e.width,r=e.height,l=void 0;(l=c*r/4e6)>1?(console.log("大于400万像素"),c/=l=Math.sqrt(l),r/=l):l=1,n.width=c,n.height=r,i.fillStyle="#fff",i.fillRect(0,0,n.width,n.height);var u=void 0;if((u=c*r/1e6)>1){console.log("超过100W像素");var d=~~(c/(u=~~(Math.sqrt(u)+1))),h=~~(r/u);a.width=d,a.height=h;for(var p=0;p<u;p++)for(var f=0;f<u;f++)s.drawImage(e,p*d*l,f*h*l,d*l,h*l,0,0,d,h),i.drawImage(a,p*d,f*h,d,h)}else i.drawImage(e,0,0,c,r);if(""!==t&&1!==t)switch(t){case 6:this.rotateImg(e,"left",n);break;case 8:this.rotateImg(e,"right",n);break;case 3:this.rotateImg(e,"right",n),this.rotateImg(e,"right",n)}var g=n.toDataURL("image/jpeg",.1);return console.log("压缩前："+o),console.log("压缩后："+g.length),console.log("压缩率："+~~(100*(o-g.length)/o)+"%"),a.width=a.height=n.width=n.height=0,g},updateImage:function(e){var t=this,n={userId:this.userId,userToken:this.userToken,iconUrl:e};Object(l.e)(n).then(function(n){if(200===n.code){t.uploading=!1,b.a.getInstance().setItemToSSCookie(f.E,e);var i=JSON.parse(a()(t.userObj));i.iconUrl=e,t.$store.dispatch("updateUserInfo",{userObj:i}),top.location!==self.location&&top.postMessage(a()({cmd:g.h,data:{iconUrl:e}}),"*")}},function(e){console.log(e)})},initAccountMsg:function(){var e=this;console.log("0-0-0-0-0-0-",this.userToken);var t={};if(null==this.userId||null==this.userToken)return!1;t={userId:this.userId,userToken:this.userToken},console.log(333333),Object(l.f)(t).then(function(t){if(t.data){e.oldAccount=JSON.parse(a()(t.data)),e.account=t.data,e.requestComplete=!0,t.data.birthdate?e.birthValue=t.data.birthdate:e.birthValue="2000-01-01";for(var n=e.account.industry.dataDict,i=t.data.industry.selectedKey,s=0;s<n.length;s++)i===n[s].key&&(e.industryIndex=s,e.oldIndustryIndex=s,e.industryValue=n[s].value,e.oldIndustryValue=n[s].value);e.genderValue=e.getSeletedValue(t.data.gender.selectedKey,e.account.gender.dataDict),e.genderIndex=e.getSelectedIndex(t.data.gender.selectedKey,e.account.gender.dataDict)}},function(e){console.log(e)})},getSeletedValue:function(e,t){for(var n=0;n<t.length;n++)if(e===t[n].key)return t[n].value},getSeletedKey:function(e,t){for(var n=0;n<t.length;n++)if(e===t[n].value)return t[n].key},getSelectedIndex:function(e,t){for(var n=0;n<t.length;n++)if(e===t[n].key)return n},hanlderMessage:function(){this.EditText===this.$t("message.public.save")?this.editAccountMsg():(this.EditText=this.$t("message.public.save"),this.isEdit=!0,this.iconString="none")},editAccountMsg:function(){var e=this;if(this.account.nickname){if(!this.account.email||/^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/.test(this.account.email)){var t=/[^(\d\+\-\(\))$]/;if(console.log("mobileReg.test(this.account.mobile):::",t.test(this.account.mobile)),this.account.mobile&&t.test(this.account.mobile))this.changeWranContent("account_mobile",this.$t("message.me.profile.mobileFormatInvalid"));else{var n={};if(null==this.userId||null==this.userToken)return!1;n={userId:this.userId,userToken:this.userToken,nickname:this.account.nickname,gender:this.account.gender.selectedKey,birthdate:this.account.birthdate,email:this.account.email,mobile:this.account.mobile,industry:this.getSeletedKey(this.industryValue,this.account.industry.dataDict)},this.isShowSpinner=!0,Object(l.e)(n).then(function(t){if(200===t.code){e.isShowSpinner=!1,Object(k.a)({message:e.$t("message.me.profile.saved"),iconClass:"iconfont icon-toast-tick"}),e.oldAccount=JSON.parse(a()(e.account)),e.isEdit=!1,e.goBackHandler(),e.account.gender.selectedValue=e.getSeletedValue(n.gender,e.account.gender.dataDict),b.a.getInstance().setItemToSSCookie(f.G,e.account.nickname),b.a.getInstance().setItemToSSCookie(f.D,e.account.email);var i=JSON.parse(a()(e.userObj));i.nickname=e.account.nickname,i.email=e.account.email,e.$store.dispatch("updateUserInfo",{userObj:i}),top.location!==self.location&&top.postMessage(a()({cmd:g.h,data:{nickname:e.account.nickname}}),"*")}},function(e){console.log(e)})}}else this.changeWranContent("account_email",this.$t("message.me.profile.mailFormatInvalid"))}else this.changeWranContent("account_name",this.$t("message.me.profile.nicknameNotEmpty"))},cancleAccountMsg:function(){this.account=JSON.parse(a()(this.oldAccount)),this.genderValue=this.getSeletedValue(this.oldAccount.gender.selectedKey,this.account.gender.dataDict),this.industryValue=this.getSeletedValue(this.oldAccount.industry.selectedKey,this.account.industry.dataDict),this.isEdit=!1,this.isShowSpinner=!1},cancelPicker:function(){this.$store.dispatch("showFooter",!0)},getContentLength:function(e,t){for(var n=0,i=0;i<e.length;i++){var a=e.charCodeAt(i);if(a>=1&&a<=126||a>=65376&&a<=65439?n++:n+=2,n>t){this.account.nickname=e.substr(0,i);break}}},changeWranContent:function(e,t){var n=document.getElementById(e);n.style.borderBottom="1px solid #FF4542",this.warnContent=t,this.isChangeContent=!this.isChangeContent;var i=document.getElementById("title_height").scrollHeight;document.getElementById("innerWrapper").scrollTop=document.body.scrollTop=n.offsetTop-i}},beforeMount:function(){console.log(this.nickname1)},mounted:function(){this.initAccountMsg(),console.log("<><><><><>",this.userObj)},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},_=(n("6dHy"),n("qQgw"),n("KHd+")),x=Object(_.a)(w,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"warp"},[n("div",{staticClass:"main"},[n("ghw-header-title",{attrs:{headerContent:e.$t("message.me.bingAcct"),isShowWarn:!0,warnContent:e.warnContent,isChangeContent:e.isChangeContent,showEditSave:e.showEditSave,EditText:e.EditText,iconStyle:e.iconString},on:{goBack:e.goBack,hanlderMessage:e.hanlderMessage}}),e._v(" "),n("div",{staticClass:"headsBox clearfix"},[n("div",{staticClass:"heads heads-center"},[n("header-icon",{attrs:{hasLoadingIcon:!1,userIcon:e.userObj.iconUrl,uploading:e.uploading,userIconSize:"small"}})],1),e._v(" "),n("form",{staticClass:"file",attrs:{id:"imgform"}},[n("ghw-btn",{attrs:{inputType:"file",disabled:e.uploading,accept:"image/*"},on:{changeImage:function(t){e.changeImage(t)}}})],1),e._v(" "),n("header-message",{attrs:{MessageType:"default",userName:e.userObj.nickname,userId:e.userObj.userId}})],1),e._v(" "),n("div",{staticClass:"bind-infoBox bind-borderBt"},[n("ghw-field",{attrs:{typeInput:"text",isEditInput:e.isEdit,inputTitle:e.$t("message.me.profile.nickname"),placeholder:e.$t("message.me.profile.clickEdit"),isMustField:!0,id:"account_name"},on:{searchGame:function(t){e.getContentLength(e.account.nickname,22)}},model:{value:e.account.nickname,callback:function(t){e.$set(e.account,"nickname",t)},expression:"account.nickname"}}),e._v(" "),n("ghw-field",{attrs:{typeInput:"text",isEditInput:e.isEdit,readonly:!0,inputTitle:e.$t("message.me.profile.gender"),placeholder:e.$t("message.me.profile.clickEdit")},on:{openPicker:function(t){e.open("picker3")}},model:{value:e.genderValue,callback:function(t){e.genderValue=t},expression:"genderValue"}}),e._v(" "),n("template-picker",{ref:"picker3",attrs:{dataDict:e.account.gender.dataDict,isRequested:e.requestComplete,defaultIndex:e.genderIndex,transDate:"value"},on:{confirm:e.confirmGender,cancel:e.cancelPicker}}),e._v(" "),n("ghw-field",{attrs:{typeInput:"text",isEditInput:e.isEdit,inputTitle:e.$t("message.me.profile.birthdate"),readonly:!0,placeholder:e.$t("message.me.profile.clickEdit")},on:{openPicker:function(t){e.open("picker1")}},model:{value:e.account.birthdate,callback:function(t){e.$set(e.account,"birthdate",t)},expression:"account.birthdate"}}),e._v(" "),n("mt-datetime-picker",{ref:"picker1",attrs:{type:"date",startDate:e.startDate,endDate:e.endDate,disabled:!e.isEdit,cancelText:e.$t("message.public.cancel"),confirmText:e.$t("message.public.confirm")},on:{confirm:e.confirmBirthdate,cancel:e.cancelPicker},model:{value:e.birthValue,callback:function(t){e.birthValue=t},expression:"birthValue"}}),e._v(" "),n("ghw-field",{attrs:{typeInput:"text",isEditInput:e.isEdit,inputTitle:e.$t("message.me.profile.email"),placeholder:e.$t("message.me.profile.clickEdit"),id:"account_email"},model:{value:e.account.email,callback:function(t){e.$set(e.account,"email",t)},expression:"account.email"}}),e._v(" "),n("ghw-field",{attrs:{typeInput:"tel",isEditInput:e.isEdit,inputTitle:e.$t("message.me.profile.phoneNum"),placeholder:e.$t("message.me.profile.clickEdit"),maxlength:22,id:"account_mobile"},model:{value:e.account.mobile,callback:function(t){e.$set(e.account,"mobile",t)},expression:"account.mobile"}}),e._v(" "),n("ghw-field",{attrs:{typeInput:"text",isEditInput:e.isEdit,inputTitle:e.$t("message.me.profile.industry"),readonly:!0,placeholder:e.$t("message.me.profile.clickEdit")},on:{openPicker:function(t){e.open("picker2")}},model:{value:e.industryValue,callback:function(t){e.industryValue=t},expression:"industryValue"}}),e._v(" "),n("template-picker",{ref:"picker2",attrs:{dataDict:e.account.industry.dataDict,isRequested:e.requestComplete,defaultIndex:e.industryIndex,transDate:"value"},on:{confirm:e.confirmIndustry,cancel:e.cancelPicker}}),e._v(" "),n("div",{staticClass:"bootomBox clearfix"},[e.isEdit?e._e():n("ghw-btn",{attrs:{inputType:"button",inputValue:e.$t("message.public.edit"),size:"rectangular",type:"public"},on:{triggerEvent:e.hanlderMessage}}),e._v(" "),e.isEdit?n("ghw-btn",{staticClass:"heads-rg cancel-position",attrs:{inputType:"button",inputValue:e.$t("message.public.cancel"),size:"rectangular",type:"cancel",isShowSpinner:e.isShowSpinner},on:{triggerEvent:e.goBack}}):e._e(),e._v(" "),e.isEdit?n("ghw-btn",{staticClass:"heads-rg",attrs:{inputType:"button",inputValue:e.$t("message.public.save"),size:"rectangular",type:"public",isHasSpinner:!0,isShowSpinner:e.isShowSpinner},on:{triggerEvent:e.hanlderMessage}}):e._e()],1)],1)],1)])])},[],!1,null,"4a0e390d",null);x.options.__file="index.vue";t.default=x.exports},KdKD:function(e,t,n){},Rp9Y:function(e,t,n){"use strict";var i=n("c0DR");n.n(i).a},Sok2:function(e,t,n){"use strict";var i={name:"GhwField",extends:{},props:{typeInput:{type:String,default:"text"},isEditInput:{type:Boolean,default:!0},inputTitle:{type:String,default:""},placeholder:{type:String,default:""},isMustField:{type:Boolean,default:!1},maxlength:{type:Number,default:100},readonly:{type:Boolean,default:!1},value:{}},data:function(){return{currentValue:this.value}},computed:{},components:{},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e)}},methods:{handleInput:function(e){this.currentValue=e.target.value},hiddenGameLists:function(e){e.target.parentElement.style.borderBottom="1px solid #1787DD",e.target.classList.remove("warn-contet"),this.$emit("hiddenGameList")},hiddenLists:function(e){e.target.parentElement.style.borderBottom="1px solid #eee",this.$emit("hiddenList")}},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},a=(n("GtZd"),n("KHd+")),s=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bind-list clearfix"},[n("label",[e._v(e._s(e.inputTitle)),e.isMustField?n("i",{staticClass:"must-star"},[e._v("*")]):e._e()]),e._v(" "),n("input",{ref:"input",staticClass:"bind-write",class:e.isEditInput?"":"write-unable",attrs:{type:e.typeInput,disabled:!e.isEditInput,readonly:e.readonly,placeholder:e.isEditInput&&e.placeholder,maxlength:e.maxlength},domProps:{value:e.currentValue},on:{change:function(t){e.$emit("change",e.currentValue)},input:e.handleInput,click:function(t){e.$emit("openPicker",t)},keyup:function(t){e.$emit("searchGame")},focus:function(t){e.hiddenGameLists(t)},blur:function(t){e.hiddenLists(t)}}})])},[],!1,null,"6bacceef",null);s.options.__file="index.vue";t.a=s.exports},T2pr:function(e,t,n){"use strict";var i=n("A/YR"),a={name:"GhwHeaderTitle",props:{headerContent:{type:String,default:""},iconStyle:{type:String,default:""},isHasRedDot:{type:Boolean,default:!1},isShowWarn:{type:Boolean,default:!1},warnContent:{type:String,default:""},isChangeContent:{type:Boolean,default:!1},showEditSave:{type:Boolean,default:!1},EditText:{type:String,default:""}},data:function(){return{EditContent:this.$t("message.public.save")}},components:{GhwWarnPop:i.a},watch:{},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=(n("lLto"),n("KHd+")),o=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap-title-box",attrs:{id:"wrap_title_box"}},[n("div",{staticClass:"title-background clearfix",attrs:{id:"title_height"}},[n("i",{staticClass:"go-back-triangle ",class:["back"+e.iconStyle],on:{click:function(t){e.$emit("goBack")}}},[e.EditText===e.EditContent?n("span",{staticClass:"accout-text"},[e._v(e._s(e.$t("message.public.cancel")))]):e._e()]),e._v(" "),n("i",{staticClass:"title-icon",class:[e.iconStyle+"-icon",{newest:e.isHasRedDot}],on:{click:function(t){e.$emit("hanlderMessage")}}},[e.showEditSave?n("span",{staticClass:"accout-text"},[e._v(e._s(e.EditText))]):e._e()]),e._v(" "),n("h3",{staticClass:"header-content"},[e._v(e._s(e.headerContent))])]),e._v(" "),n("ghw-warn-pop",{staticClass:"location",attrs:{isShowWarn:e.isShowWarn,warnContent:e.warnContent,isChangeContent:e.isChangeContent}})],1)},[],!1,null,"a489e408",null);o.options.__file="index.vue";t.a=o.exports},UPaO:function(e,t,n){},c0DR:function(e,t,n){},cXG8:function(e,t,n){"use strict";var i=n("58IK");n.n(i).a},conj:function(e,t,n){},fGzO:function(e,t,n){"use strict";var i=n("QbLZ"),a=n.n(i),s=n("L2JU"),o={name:"HeaderMessage",props:{MessageType:{type:String,default:"default"},userName:{type:String,default:""},userId:{type:[String,Number],default:null},queryId:{type:Number,default:0},appName:{type:String,default:""},serverName:{type:String,default:""},roleName:{type:String,default:""},ticketTypeName:{type:String,default:""},email:{type:String,default:""}},computed:a()({},Object(s.b)({isPlaying:function(e){return e.user.isPlaying}}))},c=(n("cXG8"),n("KHd+")),r=Object(c.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return"default"===e.MessageType?n("div",{staticClass:"heads-lf"},[n("span",[e._v("ID : "+e._s(e.userId))])]):"detailed"===e.MessageType?n("div",{staticClass:"service-heads-lf",class:{"service-marging":e.isPlaying}},[n("h5",[e._v(e._s(e.$t("message.me.checkTicket.ticketNo")))]),e._v(" "),n("span",[e._v("#"+e._s(e.queryId))]),n("br"),e._v(" "),n("h5",[e._v(e._s(e.$t("message.me.checkTicket.game")))]),e._v(" "),n("span",[e._v(e._s(e.appName))]),n("br"),e._v(" "),n("h5",[e._v(e._s(e.$t("message.me.checkTicket.characterName")))]),e._v(" "),n("span",[e._v(e._s(e.roleName))]),n("br"),e._v(" "),n("h5",[e._v(" "+e._s(e.$t("message.me.checkTicket.problemCategory")))]),e._v(" "),n("span",{staticClass:"service-over"},[e._v(e._s(e.ticketTypeName))]),n("br"),e._v(" "),n("h5",[e._v(" "+e._s(e.$t("message.me.checkTicket.email")))]),e._v(" "),n("span",[e._v(e._s(e.email))])]):e._e()},[],!1,null,"76ada2d4",null);r.options.__file="index.vue";t.a=r.exports},lLto:function(e,t,n){"use strict";var i=n("vGLk");n.n(i).a},qQgw:function(e,t,n){"use strict";var i=n("KdKD");n.n(i).a},vGLk:function(e,t,n){},vjJv:function(e,t,n){}}]);