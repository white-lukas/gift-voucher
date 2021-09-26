!function(e){void 0===Craft.GiftVoucher&&(Craft.GiftVoucher={});var t="verbb\\giftvoucher\\elements\\Voucher";Craft.GiftVoucher.VoucherIndex=Craft.BaseElementIndex.extend({editableVoucherTypes:null,$newVoucherBtnVoucherType:null,$newVoucherBtn:null,init:function(t,i,r){this.on("selectSource",e.proxy(this,"updateButton")),this.on("selectSite",e.proxy(this,"updateButton")),this.base(t,i,r)},afterInit:function(){this.editableVoucherTypes=[];for(var e=0;e<Craft.GiftVoucher.editableVoucherTypes.length;e++){var t=Craft.GiftVoucher.editableVoucherTypes[e];this.getSourceByKey("voucherType:"+t.id)&&this.editableVoucherTypes.push(t)}this.base()},getDefaultSourceKey:function(){if("index"===this.settings.context&&"undefined"!=typeof defaultVoucherTypeHandle)for(var t=0;t<this.$sources.length;t++){var i=e(this.$sources[t]);if(i.data("handle")===defaultVoucherTypeHandle)return i.data("key")}return this.base()},updateButton:function(){if(this.$source){var t=this.$source.data("handle"),i,r,n;if(this.editableVoucherTypes.length){var o,a;if(this.$newVoucherBtnVoucherType&&this.$newVoucherBtnVoucherType.remove(),t)for(i=0;i<this.editableVoucherTypes.length;i++)if(this.editableVoucherTypes[i].handle===t){o=this.editableVoucherTypes[i];break}if(this.$newVoucherBtnVoucherType=e('<div class="btngroup submit"/>'),o?(r=this._getVoucherTypeTriggerHref(o),n="index"===this.settings.context?Craft.t("gift-voucher","New voucher"):Craft.t("gift-voucher","New {voucherType} voucher",{voucherType:o.name}),this.$newVoucherBtn=e('<a class="btn submit add icon" '+r+">"+Craft.escapeHtml(n)+"</a>").appendTo(this.$newVoucherBtnVoucherType),"index"!==this.settings.context&&this.addListener(this.$newVoucherBtn,"click",(function(e){this._openCreateVoucherModal(e.currentTarget.getAttribute("data-id"))})),this.editableVoucherTypes.length>1&&(a=e('<div class="btn submit menubtn"></div>').appendTo(this.$newVoucherBtnVoucherType))):this.$newVoucherBtn=a=e('<div class="btn submit add icon menubtn">'+Craft.t("gift-voucher","New voucher")+"</div>").appendTo(this.$newVoucherBtnVoucherType),a){for(var s='<div class="menu"><ul>',i=0;i<this.editableVoucherTypes.length;i++){var h=this.editableVoucherTypes[i];"index"!==this.settings.context&&h===o||(r=this._getVoucherTypeTriggerHref(h),n="index"===this.settings.context?h.name:Craft.t("gift-voucher","New {voucherType} voucher",{voucherType:h.name}),s+="<li><a "+r+'">'+Craft.escapeHtml(n)+"</a></li>")}e(s+="</ul></div>").appendTo(this.$newVoucherBtnVoucherType);var u=new Garnish.MenuBtn(a);"index"!==this.settings.context&&u.on("optionSelect",e.proxy((function(e){this._openCreateVoucherModal(e.option.getAttribute("data-id"))}),this))}this.addButton(this.$newVoucherBtnVoucherType)}if("index"===this.settings.context&&"undefined"!=typeof history){var c="gift-voucher/vouchers";t&&(c+="/"+t),history.replaceState({},"",Craft.getUrl(c))}}},_getVoucherTypeTriggerHref:function(e){if("index"===this.settings.context){var t="gift-voucher/vouchers/"+e.handle+"/new";if(this.siteId&&this.siteId!=Craft.primarySiteId)for(var i=0;i<Craft.sites.length;i++)Craft.sites[i].id==this.siteId&&(t+="/"+Craft.sites[i].handle);return'href="'+Craft.getUrl(t)+'"'}return'data-id="'+e.id+'"'},_openCreateVoucherModal:function(i){if(!this.$newVoucherBtn.hasClass("loading")){for(var r,n=0;n<this.editableVoucherTypes.length;n++)if(this.editableVoucherTypes[n].id===i){r=this.editableVoucherTypes[n];break}if(r){this.$newVoucherBtn.addClass("inactive");var o=this.$newVoucherBtn.text();this.$newVoucherBtn.text(Craft.t("gift-voucher","New {voucherType} voucher",{voucherType:r.name})),new Craft.ElementEditor({hudTrigger:this.$newVoucherBtnGroup,elementType:t,siteId:this.siteId,attributes:{typeId:i},onBeginLoading:e.proxy((function(){this.$newVoucherBtn.addClass("loading")}),this),onEndLoading:e.proxy((function(){this.$newVoucherBtn.removeClass("loading")}),this),onHideHud:e.proxy((function(){this.$newVoucherBtn.removeClass("inactive").text(o)}),this),onSaveElement:e.proxy((function(e){var t="voucherType:"+i;this.sourceKey!==t&&this.selectSourceByKey(t),this.selectElementAfterUpdate(e.id),this.updateElements()}),this)})}}}}),Craft.registerElementIndexClass(t,Craft.GiftVoucher.VoucherIndex)}(jQuery),function(e){void 0===Craft.GiftVoucher&&(Craft.GiftVoucher={});var t="verbb\\giftvoucher\\elements\\Code";Craft.GiftVoucher.CodeIndex=Craft.BaseElementIndex.extend({afterInit:function(){var t='href="'+Craft.getUrl("gift-voucher/codes/new")+'"',i=Craft.t("gift-voucher","New code");this.$newProductBtnGroup=e('<div class="btngroup submit"/>'),this.$newProductBtn=e('<a class="btn submit add icon" '+t+">"+i+"</a>").appendTo(this.$newProductBtnGroup),this.addButton(this.$newProductBtnGroup),this.base()}});try{Craft.registerElementIndexClass(t,Craft.GiftVoucher.CodeIndex)}catch(e){}}(jQuery),void 0===Craft.GiftVoucher&&(Craft.GiftVoucher={}),function(e){Craft.GiftVoucher.CpAddVoucher=Garnish.Base.extend({orderNumber:null,init:function(t){this.orderNumber=t;var i=e('.menubtn[data-icon="settings"]').data("menubtn");if(i){var r=e('<li><a data-action="apply-gift-voucher">'+Craft.t("gift-voucher","Add voucher code")+"</a></li>");i.menu.addOptions(r.children()),r.prependTo(i.menu.$container.children().first()),i.menu.on("optionselect",e.proxy(this,"_handleMenuBtn"))}},_handleMenuBtn:function(t){var i;"apply-gift-voucher"==e(t.selectedOption).data("action")&&new Craft.GiftVoucher.AddCodeModal}}),Craft.GiftVoucher.AddCodeModal=Garnish.Modal.extend({init:function(){this.$form=e('<form class="modal fitted add-code-modal" method="post" accept-charset="UTF-8"/>').appendTo(Garnish.$bod),this.$body=e('<div class="pane"></div>').appendTo(this.$form),Craft.ui.createTextField({label:Craft.t("gift-voucher","Voucher Code"),instructions:Craft.t("gift-voucher","Enter the gift voucher code to be applied on the order."),id:"voucher-code",name:"voucherCode"}).appendTo(this.$body);var t=window.location.pathname.split("/"),i=t[t.length-1];e('<input type="hidden" name="orderId" value="'+i+'">').appendTo(this.$body);var r=e('<div class="footer"/>').appendTo(this.$body),n=e('<div class="buttons right"/>').appendTo(r);this.$cancelBtn=e('<input type="button" class="btn" value="'+Craft.t("commerce","Cancel")+'"/>').appendTo(n),this.$updateBtn=e('<input type="button" class="btn submit" value="'+Craft.t("gift-voucher","Add voucher code")+'"/>').appendTo(n),this.$footerSpinner=e('<div class="spinner right hidden"/>').appendTo(r),Craft.initUiElements(this.$form),this.addListener(this.$cancelBtn,"click","onFadeOut"),this.addListener(this.$updateBtn,"click","onSubmit"),this.base(this.$form,settings)},onFadeOut:function(){this.$form.remove(),this.$shade.remove()},onSubmit:function(t){t.preventDefault(),this.$footerSpinner.removeClass("hidden");var i=this.$form.serialize();Craft.postActionRequest("gift-voucher/cart/add-code",i,e.proxy((function(e){this.$footerSpinner.addClass("hidden"),e.success?location.reload():Craft.cp.displayError(e.error)}),this))}})}(jQuery);
//# sourceMappingURL=gift-voucher.js.map