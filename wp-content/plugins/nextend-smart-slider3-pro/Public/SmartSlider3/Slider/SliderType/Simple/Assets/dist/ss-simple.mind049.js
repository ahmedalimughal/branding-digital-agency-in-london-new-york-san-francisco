!function(t){var i=t;i._N2=i._N2||{_r:[],_d:[],r:function(){this._r.push(arguments)},d:function(){this._d.push(arguments)}};var s=t.document,n=(s.documentElement,t.setTimeout),h=t.clearTimeout,a=i._N2,r=(t.requestAnimationFrame,Object.assign),o=function(t,i){return t.dispatchEvent(i)},c=function(t,i){return o(t,new Event(i,{bubbles:!1,cancelable:!1}))},u=function(t,i,s){t.addEventListener(i,s,{once:!0})};navigator.userAgent.indexOf("+http://www.google.com/bot.html")>-1||i.requestIdleCallback,i.cancelIdleCallback;!function(t){if("complete"===s.readyState||"interactive"===s.readyState)t();else if(Document&&Document.prototype&&Document.prototype.addEventListener&&Document.prototype.addEventListener!==s.addEventListener){const i=()=>{t(),t=()=>{}};s.addEventListener("DOMContentLoaded",i),s.addEventListener("readystatechange",(()=>{"complete"!==s.readyState&&"interactive"!==s.readyState||i()})),Document.prototype.addEventListener.call(s,"DOMContentLoaded",i)}else s.addEventListener("DOMContentLoaded",t)}((function(){s.body})),a.d("SmartSliderMainAnimationSimple",["SmartSliderMainAnimationAbstract"],(function(){function t(t,i){switch(this.postBackgroundAnimation=!1,this._currentBackgroundAnimation=!1,this.reverseSlideIndex=null,(i=r({delay:0,type:"horizontal",shiftedBackgroundAnimation:"auto"},i)).delay/=1e3,i.duration<300&&(i.type="no"),a.SmartSliderMainAnimationAbstract.prototype.constructor.call(this,t,i),t.isAdmin||t.disabled.postBackgroundAnimations||!this.slider.parameters.postBackgroundAnimations||(this.isReverseAllowed=!1,this.postBackgroundAnimation=new a.SmartSliderPostBackgroundAnimation(t,this)),this.parameters.type){case"no":this.animation=this._mainAnimationNo,this.isNoAnimation=!0;break;case"fade":this.animation=this._mainAnimationFade;break;case"crossfade":this.animation=this._mainAnimationCrossFade;break;case"vertical":t.backgrounds.hasFixed?this.animation=this._mainAnimationFade:this.animation=this._mainAnimationVertical;break;case"vertical-reversed":t.backgrounds.hasFixed?this.animation=this._mainAnimationFade:this.animation=this._mainAnimationVerticalReversed;break;case"horizontal-reversed":this.animation=this._mainAnimationHorizontalReversed;break;default:this.animation=this._mainAnimationHorizontal}}return t.prototype=Object.create(a.SmartSliderMainAnimationAbstract.prototype),t.prototype.constructor=t,t.prototype.changeTo=function(t,i,s,n){this.postBackgroundAnimation&&this.postBackgroundAnimation.prepareToSwitchSlide(t,i),a.SmartSliderMainAnimationAbstract.prototype.changeTo.apply(this,arguments)},t.prototype.setActiveSlide=function(t){for(var i=0;i<this.slider.slides.length;i++)this.slider.slides[i]!==t&&this.hideSlide(this.slider.slides[i])},t.prototype.hideSlide=function(t){a.MW.B(t.SMWs,{x:-1e5*n2const.rtl.modifier})},t.prototype.showSlide=function(t){a.MW.B(t.SMWs,{x:0,y:0})},t.prototype.cleanSlideIndex=function(t){this.hideSlide(this.slider.slides[t])},t.prototype.revertTo=function(t,i){a.MW.B(this.slider.slides[i].SMWs,{zIndex:""}),this.hideSlide(this.slider.slides[i]),a.SmartSliderMainAnimationAbstract.prototype.revertTo.apply(this,arguments)},t.prototype._initAnimation=function(t,i,s){this.animation(t,i,s)},t.prototype.onBackwardChangeToComplete=function(t,i,s){this.reverseSlideIndex=null,this.onChangeToComplete(t,i,s)},t.prototype.onChangeToComplete=function(t,i,s){null!==this.reverseSlideIndex&&(c(this.slider.slides[this.reverseSlideIndex].element,"mainAnimationStartInCancel"),this.reverseSlideIndex=null),this.hideSlide(t),a.SmartSliderMainAnimationAbstract.prototype.onChangeToComplete.apply(this,arguments)},t.prototype.onReverseChangeToComplete=function(t,i,s){this.hideSlide(t),a.SmartSliderMainAnimationAbstract.prototype.onReverseChangeToComplete.apply(this,arguments)},t.prototype._mainAnimationNo=function(t,i){this.parameters.delay=0,this.parameters.duration=.1,this._mainAnimationFade(t,i)},t.prototype._mainAnimationFade=function(t,i){a.MW.B(t.SMWs,{zIndex:23}),this.showSlide(i),t.unsetActive(),i.setActive();var s=this.adjustMainAnimation();if(0!==this.parameters.shiftedBackgroundAnimation){var n=!1,h=!1;if("auto"===this.parameters.shiftedBackgroundAnimation?t.hasLayers()?n=!0:h=!0:n=!0,this._currentBackgroundAnimation&&n){var r=s.outDuration-s.extraDelay;r>0&&this.timeline.shiftChildren(r),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup()}else h&&(s.extraDelay>0&&this.timeline.shiftChildren(s.extraDelay),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup())}var o=[t.SMWs[0]];!this._currentBackgroundAnimation&&t.SMWs[1]&&o.push(t.SMWs[1]),this.timeline.fromTo(o,s.outDuration,{opacity:1},{opacity:0,ease:this.getEase()},s.outDelay);var c=a.MW.i(i.element);this.timeline.fromTo(c,s.inDuration,{opacity:0},{opacity:1,ease:this.getEase()},s.inDelay),!this._currentBackgroundAnimation&&i.background&&(a.MW.i(i.background.element).opacity=1),u(this.sliderElement,"mainAnimationComplete",function(e){var t=this.slider.slides[e.detail.previousSlideIndex];a.MW.B(t.SMWs,{zIndex:"",opacity:1})}.bind(this)),this.slider.updateInsideSlides([t,i])},t.prototype._mainAnimationCrossFade=function(t,i){a.MW.B(t.SMWs,{zIndex:23}),this.showSlide(i),t.unsetActive(),i.setActive();var s=this.adjustMainAnimation();if(0!=this.parameters.shiftedBackgroundAnimation){var n=!1,h=!1;if("auto"==this.parameters.shiftedBackgroundAnimation?t.hasLayers()?n=!0:h=!0:n=!0,this._currentBackgroundAnimation&&n){var r=s.outDuration-s.extraDelay;r>0&&this.timeline.shiftChildren(r),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup()}else h&&(s.extraDelay>0&&this.timeline.shiftChildren(s.extraDelay),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup())}var o=[t.SMWs[0]];!this._currentBackgroundAnimation&&t.SMWs[1]&&o.push(t.SMWs[1]),this.timeline.fromTo(o,s.outDuration,{opacity:1},{opacity:0,ease:this.getEase()},s.outDelay);var c=[i.SMWs[0]];!this._currentBackgroundAnimation&&i.SMWs[1]&&c.push(i.SMWs[1]),this.timeline.fromTo(c,s.inDuration,{opacity:0},{opacity:1,ease:this.getEase()},s.inDelay),u(this.sliderElement,"mainAnimationComplete",function(e){var t=this.slider.slides[e.detail.previousSlideIndex],i=this.slider.slides[e.detail.currentSlideIndex];a.MW.B(t.SMWs,{zIndex:"",opacity:1}),a.MW.B(i.SMWs,{opacity:1})}.bind(this)),this.slider.updateInsideSlides([t,i])},t.prototype._mainAnimationHorizontal=function(t,i,s){this.__mainAnimationDirection(t,i,"horizontal",s)},t.prototype._mainAnimationVertical=function(t,i,s){this.showSlide(i),this.__mainAnimationDirection(t,i,"vertical",s)},t.prototype._mainAnimationHorizontalReversed=function(t,i,s){this.__mainAnimationDirection(t,i,"horizontal",!s)},t.prototype._mainAnimationVerticalReversed=function(t,i,s){this.showSlide(i),this.__mainAnimationDirection(t,i,"vertical",!s)},t.prototype.__mainAnimationDirection=function(t,i,s,n){var h=t.SMWs,r=i.SMWs,o=[t,i],c="",l=0;"horizontal"===s?(c="x",l=Math.floor(this.slider.responsive.resizeContext.slideOuterWidth),n2const.rtl.isRtl&&(n=!n)):"vertical"===s&&(c="y",l=Math.floor(this.slider.responsive.resizeContext.slideOuterHeight)),n&&(l*=-1);var f={},v={snap:"x,y",ease:this.getEase()},d={snap:"x,y",ease:this.getEase()};f[c]=l,d[c]=-l,a.MW.B(h,{zIndex:23});var m={zIndex:23};m[c]=l,a.MW.B(r,m),t.unsetActive(),i.setActive();var p,S=this.adjustMainAnimation();if(v[c]=0,this.timeline.fromTo(r,S.inDuration,f,v,S.inDelay),0!=this.parameters.shiftedBackgroundAnimation){var y=!1,x=!1;if("auto"===this.parameters.shiftedBackgroundAnimation?t.hasLayers()?y=!0:x=!0:y=!0,this._currentBackgroundAnimation&&y){var b=S.outDuration-S.extraDelay;b>0&&this.timeline.shiftChildren(b),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup()}else x&&(S.extraDelay>0&&this.timeline.shiftChildren(S.extraDelay),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup())}if(this.timeline.to(h,S.outDuration,d,S.outDelay),this.isTouch&&this.isReverseAllowed)if(n?this.slider.blockCarousel&&this.slider.isChangeCarousel("next")||(p=t.getNext()):this.slider.blockCarousel&&this.slider.isChangeCarousel("previous")||(p=t.getPrevious()),p&&p!==i){this.reverseSlideIndex=p.index,this.enableReverseMode(),o.push(p),"vertical"===s&&this.showSlide(p);var D=p.SMWs,z={};z[c]=l,a.MW.B(D,z);var w={},A={snap:"x,y",ease:this.getEase()},I={},C={snap:"x,y",ease:this.getEase()};A[c]=0,w[c]=-l,C[c]=l,I[c]=0,p.u("mainAnimationStartIn",{mainAnimation:this,previousSlideIndex:t.index,currentSlideIndex:p.index,isSystem:!1}),this.reverseTimeline.paused(!0),this.reverseTimeline.eventCallback("onComplete",this.onBackwardChangeToComplete.bind(this),[t,p,!1]),this.reverseTimeline.fromTo(D,S.inDuration,w,A,S.inDelay),this.reverseTimeline.fromTo(h,S.inDuration,I,C,S.inDelay)}else this.reverseSlideIndex=null;u(this.sliderElement,"mainAnimationComplete",function(e){var t=this.slider.slides[e.detail.previousSlideIndex],i=this.slider.slides[e.detail.currentSlideIndex];a.MW.B(t.SMWs,{zIndex:""}),a.MW.B(i.SMWs,{zIndex:""})}.bind(this)),this.slider.updateInsideSlides(o)},t.prototype.getExtraDelay=function(){return 0},t.prototype.adjustMainAnimation=function(){var t=this.parameters.duration,i=this.parameters.delay,s=this.timeline.totalDuration(),n=this.getExtraDelay();if(s>0){var h=t+i;if(!(h>s))return{inDuration:t,outDuration:t,inDelay:s-t,outDelay:n,extraDelay:n};t=t*s/h,(i=i*s/h)<n&&(t-=n-i,i=n)}else i+=n;return{inDuration:t,outDuration:t,inDelay:i,outDelay:i,extraDelay:n}},t.prototype.hasBackgroundAnimation=function(){return!1},t})),a.d("SmartSliderResponsiveSimple",["SmartSliderResponsive"],(function(){function t(){this.round=1,a.SmartSliderResponsive.prototype.constructor.apply(this,arguments),this.t=this.sliderElement.classList.contains("n2-ss-full-page--constrain-ratio"),this.mainAnimation=this.slider.mainAnimation}return t.prototype=Object.create(a.SmartSliderResponsive.prototype),t.prototype.constructor=t,t.prototype.init=function(){a.SmartSliderResponsive.prototype.init.call(this),this._cacheEl={slider:this.sliderElement.querySelector(".n2-ss-slider-wrapper-inside")||this.sliderElement,"n2-ss-slider-2":this.sliderElement.querySelector(".n2-ss-slider-2"),"n2-ss-slider-3":this.sliderElement.querySelector(".n2-ss-slider-3")},this._cacheEl["n2-ss-slider-3"].addEventListener("scroll",(function(e){e.currentTarget.scrollTop=0,e.currentTarget.scrollLeft=0}),{capture:!0})},t.prototype.calculateResponsiveValues=function(){var t=this.slider.visibleRealSlides[0].element,i=t.getBoundingClientRect();this.resizeContext.slideSelfWidth=i.width,this.resizeContext.slideSelfHeight=i.height;var s=t.querySelector(".n2-ss-layers-container").getBoundingClientRect();this.resizeContext.slideWidth=s.width,this.resizeContext.slideHeight=s.height;var n=this._cacheEl.slider.getBoundingClientRect();this.resizeContext.sliderWidth=n.width,this.resizeContext.sliderHeight=n.height;var h=this._cacheEl["n2-ss-slider-3"].getBoundingClientRect();if(this.resizeContext.slideOuterWidth=h.width,this.resizeContext.slideOuterHeight=h.height,a.SmartSliderResponsive.prototype.calculateResponsiveValues.call(this),this.t){var r=(this.resizeContext.sliderWidth-this.resizeContext.slideWidth)/-2+"px",o=(this.resizeContext.sliderHeight-this.resizeContext.slideHeight)/-2+"px";a.MW.i(this._cacheEl.slider)["--ss-clip-path"]="inset("+o+" "+r+" "+o+" "+r+")"}},t.prototype.onStarterSlide=function(t){this.slider.slides.forEach((function(t){t.SMWs=[a.MW.i(t.element,{x:"-10000px"})],t.background&&t.SMWs.push(a.MW.i(t.background.element,{x:"-10000px"}))})),a.SmartSliderResponsive.prototype.onStarterSlide.apply(this,arguments),this.mainAnimation.setActiveSlide(this.slider.currentSlide)},t})),a.d("SmartSliderSimple",["SmartSliderAbstract"],(function(){function t(t,i){this.type="simple",a.SmartSliderAbstract.prototype.constructor.call(this,t,r({bgAnimations:0,carousel:1},i))}return t.prototype=Object.create(a.SmartSliderAbstract.prototype),t.prototype.constructor=t,t.prototype.initResponsiveMode=function(){this.responsive=new a.SmartSliderResponsiveSimple(this,this.parameters.responsive),this.responsive.start(),a.SmartSliderAbstract.prototype.initResponsiveMode.call(this)},t.prototype.initMainAnimation=function(){!this.disabled.backgroundAnimations&&this.parameters.bgAnimations?this.mainAnimation=new a.SmartSliderFrontendBackgroundAnimation(this,this.parameters.mainanimation,this.parameters.bgAnimations):this.mainAnimation=new a.SmartSliderMainAnimationSimple(this,this.parameters.mainanimation)},t.prototype.afterRawSlidesReady=function(){if(this.parameters.postBackgroundAnimations&&this.parameters.postBackgroundAnimations.slides){for(var t=0;t<this.slides.length;t++)this.slides[t].postBackgroundAnimation=this.parameters.postBackgroundAnimations.slides[t];delete this.parameters.postBackgroundAnimations.slides}if(this.parameters.bgAnimations&&this.parameters.bgAnimations.slides){for(var i=0;i<this.slides.length;i++)this.slides[i].backgroundAnimation=this.parameters.bgAnimations.slides[i];delete this.parameters.bgAnimations.slides}},t.prototype.forceSetActiveSlide=function(t){t.setActive(),this.mainAnimation.showSlide(t)},t.prototype.forceUnsetActiveSlide=function(t){t.unsetActive(),this.mainAnimation.hideSlide(t)},t.prototype.getSlideBackgroundContainer=function(){return this.sliderElement.querySelector(".n2-ss-slider-3")},t.prototype.getAnimationAxis=function(){switch(this.mainAnimation.parameters.type){case"vertical":case"vertical-reversed":return"vertical"}return"horizontal"},t})),a.d("ss-simple",["SmartSliderSimple","SmartSliderResponsiveSimple","SmartSliderMainAnimationSimple"])}(window);