(function(b,Ja,v){b.fn.jScrollPane=function(C){function ga(c,C){function ha(a){var d,l,oa,q,r,t=!1,m=!1;e=a;if(f===v)q=c.scrollTop(),r=c.scrollLeft(),c.css({overflow:"hidden",padding:0}),h=c.innerWidth()+O,k=c.innerHeight(),c.width(h),f=b('<div class="jspPane" />').css("padding",pa).append(c.children()),g=b('<div class="jspContainer" />').css({width:h+"px",height:k+"px"}).append(f).appendTo(c);else{c.css("width","");t=e.stickToBottom&&ya();m=e.stickToRight&&za();if(oa=c.innerWidth()+O!=h||c.outerHeight()!=
    k)h=c.innerWidth()+O,k=c.innerHeight(),g.css({width:h+"px",height:k+"px"});if(!oa&&qa==w&&f.outerHeight()==u){c.width(h);return}qa=w;f.css("width","");c.width(h);g.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}f.css("overflow","auto");w=a.contentWidth?a.contentWidth:f[0].scrollWidth;u=f[0].scrollHeight;f.css("overflow","");ia=w/h;Y=u/k;z=1<Y;if((A=1<ia)||z){c.addClass("jspScrollable");if(a=e.maintainPosition&&(n||p))d=G(),l=H();ga();Aa();Ba();a&&(Q(m?w-h:d,!1),I(t?u-k:l,!1));Ca();Da();
  Ea();e.enableKeyboardNavigation&&Fa();e.clickOnTrack&&Ga();Ha();e.hijackInternalLinks&&ra()}else c.removeClass("jspScrollable"),f.css({top:0,width:g.width()-O}),g.unbind(ja),f.find(":input,a").unbind("focus.jsp"),c.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"),sa(),ta();e.autoReinitialise&&!Z?Z=setInterval(function(){ha(e)},e.autoReinitialiseDelay):!e.autoReinitialise&&Z&&clearInterval(Z);q&&c.scrollTop(0)&&I(q,!1);r&&c.scrollLeft(0)&&Q(r,!1);c.trigger("jsp-initialised",
  [A||z])}function ga(){z&&(g.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />'))),aa=g.find(">.jspVerticalBar"),D=aa.find(">.jspTrack"),x=D.find(">.jspDrag"),e.showArrows&&(T=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",J(0,-1)).bind("click.jsp",R),U=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",
  J(0,1)).bind("click.jsp",R),e.arrowScrollOnHover&&(T.bind("mouseover.jsp",J(0,-1,T)),U.bind("mouseover.jsp",J(0,1,U))),ua(D,e.verticalArrowPositions,T,U)),K=k,g.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){K-=b(this).outerHeight()}),x.hover(function(){x.addClass("jspHover")},function(){x.removeClass("jspHover")}).bind("mousedown.jsp",function(a){b("html").bind("dragstart.jsp selectstart.jsp",R);x.addClass("jspActive");var d=a.pageY-x.position().top;b("html").bind("mousemove.jsp",
  function(a){P(a.pageY-d,!1)}).bind("mouseup.jsp mouseleave.jsp",va);return!1}),wa())}function wa(){D.height(K+"px");n=0;ka=e.verticalGutter+D.outerWidth();f.width(h-ka-O);try{0===aa.position().left&&f.css("margin-left",ka+"px")}catch(a){}}function Aa(){A&&(g.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />'))),
  ba=g.find(">.jspHorizontalBar"),E=ba.find(">.jspTrack"),y=E.find(">.jspDrag"),e.showArrows&&(V=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",J(-1,0)).bind("click.jsp",R),W=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",J(1,0)).bind("click.jsp",R),e.arrowScrollOnHover&&(V.bind("mouseover.jsp",J(-1,0,V)),W.bind("mouseover.jsp",J(1,0,W))),ua(E,e.horizontalArrowPositions,V,W)),y.hover(function(){y.addClass("jspHover")},function(){y.removeClass("jspHover")}).bind("mousedown.jsp",
  function(a){b("html").bind("dragstart.jsp selectstart.jsp",R);y.addClass("jspActive");var d=a.pageX-y.position().left;b("html").bind("mousemove.jsp",function(a){S(a.pageX-d,!1)}).bind("mouseup.jsp mouseleave.jsp",va);return!1}),B=g.innerWidth(),xa())}function xa(){g.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){B-=b(this).outerWidth()});E.width(B+"px");p=0}function Ba(){if(A&&z){var a=E.outerHeight(),d=D.outerWidth();K-=a;b(ba).find(">.jspCap:visible,>.jspArrow").each(function(){B+=
  b(this).outerWidth()});B-=d;k-=d;h-=a;E.parent().append(b('<div class="jspCorner" />').css("width",a+"px"));wa();xa()}A&&f.width(g.outerWidth()-O+"px");u=f.outerHeight();Y=u/k;A&&(L=Math.ceil(1/ia*B),L>e.horizontalDragMaxWidth?L=e.horizontalDragMaxWidth:L<e.horizontalDragMinWidth&&(L=e.horizontalDragMinWidth),y.width(L+"px"),M=B-L,la(p));z&&(N=Math.ceil(1/Y*K),N>e.verticalDragMaxHeight?N=e.verticalDragMaxHeight:N<e.verticalDragMinHeight&&(N=e.verticalDragMinHeight),x.height(N+"px"),F=K-N,ma(n))}function ua(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  d,l,e){var b="before",c="after";"os"==d&&(d=/Mac/.test(navigator.platform)?"after":"split");d==b?c=d:d==c&&(b=d,d=l,l=e,e=d);a[b](l)[c](e)}function J(a,d,e){return function(){Ia(a,d,this,e);this.blur();return!1}}function Ia(a,d,l,c){l=b(l).addClass("jspActive");var q,r,t=!0,f=function(){0!==a&&m.scrollByX(a*e.arrowButtonSpeed);0!==d&&m.scrollByY(d*e.arrowButtonSpeed);r=setTimeout(f,t?e.initialDelay:e.arrowRepeatFreq);t=!1};f();q=c?"mouseout.jsp":"mouseup.jsp";c=c||b("html");c.bind(q,function(){l.removeClass("jspActive");
  r&&clearTimeout(r);r=null;c.unbind(q)})}function Ga(){sa();z&&D.bind("mousedown.jsp",function(a){if(a.originalTarget===v||a.originalTarget==a.currentTarget){var d=b(this),l=d.offset(),c=a.pageY-l.top-n,q,r=!0,t=function(){var b=d.offset(),b=a.pageY-b.top-N/2,l=k*e.scrollPagePercent,g=F*l/(u-k);if(0>c)n-g>b?m.scrollByY(-l):P(b);else if(0<c)n+g<b?m.scrollByY(l):P(b);else{f();return}q=setTimeout(t,r?e.initialDelay:e.trackClickRepeatFreq);r=!1},f=function(){q&&clearTimeout(q);q=null;b(document).unbind("mouseup.jsp",
  f)};t();b(document).bind("mouseup.jsp",f);return!1}});A&&E.bind("mousedown.jsp",function(a){if(a.originalTarget===v||a.originalTarget==a.currentTarget){var d=b(this),l=d.offset(),c=a.pageX-l.left-p,q,f=!0,t=function(){var b=d.offset(),b=a.pageX-b.left-L/2,l=h*e.scrollPagePercent,k=M*l/(w-h);if(0>c)p-k>b?m.scrollByX(-l):S(b);else if(0<c)p+k<b?m.scrollByX(l):S(b);else{g();return}q=setTimeout(t,f?e.initialDelay:e.trackClickRepeatFreq);f=!1},g=function(){q&&clearTimeout(q);q=null;b(document).unbind("mouseup.jsp",
  g)};t();b(document).bind("mouseup.jsp",g);return!1}})}function sa(){E&&E.unbind("mousedown.jsp");D&&D.unbind("mousedown.jsp")}function va(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");x&&x.removeClass("jspActive");y&&y.removeClass("jspActive")}function P(a,d){z&&(0>a?a=0:a>F&&(a=F),d===v&&(d=e.animateScroll),d?m.animate(x,"top",a,ma):(x.css("top",a),ma(a)))}function ma(a){a===v&&(a=x.position().top);g.scrollTop(0);n=a;var d=0===n,b=n==F;a=-(a/F)*(u-k);
  if(ca!=d||da!=b)ca=d,da=b,c.trigger("jsp-arrow-change",[ca,da,ea,fa]);e.showArrows&&(T[d?"addClass":"removeClass"]("jspDisabled"),U[b?"addClass":"removeClass"]("jspDisabled"));f.css("top",a);c.trigger("jsp-scroll-y",[-a,d,b]).trigger("scroll")}function S(a,d){A&&(0>a?a=0:a>M&&(a=M),d===v&&(d=e.animateScroll),d?m.animate(y,"left",a,la):(y.css("left",a),la(a)))}function la(a){a===v&&(a=y.position().left);g.scrollTop(0);p=a;var d=0===p,b=p==M;a=-(a/M)*(w-h);if(ea!=d||fa!=b)ea=d,fa=b,c.trigger("jsp-arrow-change",
  [ca,da,ea,fa]);e.showArrows&&(V[d?"addClass":"removeClass"]("jspDisabled"),W[b?"addClass":"removeClass"]("jspDisabled"));f.css("left",a);c.trigger("jsp-scroll-x",[-a,d,b]).trigger("scroll")}function I(a,d){P(a/(u-k)*F,d)}function Q(a,d){S(a/(w-h)*M,d)}function X(a,d,c){var f,q,r=0,t=0,m,n,p;try{f=b(a)}catch(u){return}q=f.outerHeight();a=f.outerWidth();g.scrollTop(0);for(g.scrollLeft(0);!f.is(".jspPane");)if(r+=f.position().top,t+=f.position().left,f=f.offsetParent(),/^body|html$/i.test(f[0].nodeName))return;
  f=H();m=f+k;r<f||d?n=r-e.verticalGutter:r+q>m&&(n=r-k+q+e.verticalGutter);n&&I(n,c);r=G();n=r+h;t<r||d?p=t-e.horizontalGutter:t+a>n&&(p=t-h+a+e.horizontalGutter);p&&Q(p,c)}function G(){return-f.position().left}function H(){return-f.position().top}function ya(){var a=u-k;return 20<a&&10>a-H()}function za(){var a=w-h;return 20<a&&10>a-G()}function Da(){g.unbind(ja).bind(ja,function(a,d,b,c){a=p;d=n;m.scrollBy(b*e.mouseWheelSpeed,-c*e.mouseWheelSpeed,!1);return a==p&&d==n})}function R(){return!1}function Ca(){f.find(":input,a").unbind("focus.jsp").bind("focus.jsp",
  function(a){X(a.target,!1)})}function Fa(){function a(){var a=p,b=n;switch(d){case 40:m.scrollByY(e.keyboardSpeed,!1);break;case 38:m.scrollByY(-e.keyboardSpeed,!1);break;case 34:case 32:m.scrollByY(k*e.scrollPagePercent,!1);break;case 33:m.scrollByY(-k*e.scrollPagePercent,!1);break;case 39:m.scrollByX(e.keyboardSpeed,!1);break;case 37:m.scrollByX(-e.keyboardSpeed,!1)}return l=a!=p||b!=n}var d,l,h=[];A&&h.push(ba[0]);z&&h.push(aa[0]);f.focus(function(){c.focus()});c.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",
  function(c){if(c.target===this||h.length&&b(c.target).closest(h).length){var e=p,f=n;switch(c.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:d=c.keyCode;a();break;case 35:I(u-k);d=null;break;case 36:I(0),d=null}l=c.keyCode==d&&e!=p||f!=n;return!l}}).bind("keypress.jsp",function(b){b.keyCode==d&&a();return!l});e.hideFocus?(c.css("outline","none"),"hideFocus"in g[0]&&c.attr("hideFocus",!0)):(c.css("outline",""),"hideFocus"in g[0]&&c.attr("hideFocus",!1))}function Ha(){if(location.hash&&
  1<location.hash.length){var a,d,c=escape(location.hash);try{a=b(c)}catch(e){return}a.length&&f.find(c)&&(0===g.scrollTop()?d=setInterval(function(){0<g.scrollTop()&&(X(c,!0),b(document).scrollTop(g.position().top),clearInterval(d))},50):(X(c,!0),b(document).scrollTop(g.position().top)))}}function ta(){b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")}function ra(){ta();b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack",function(){var a=this.href.split("#");if(1<a.length&&
  (a=a[1],0<a.length&&0<f.find("#"+a).length))return X("#"+a,!0),!1})}function Ea(){var a,d,b,c,e,f=!1;g.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(g){g=g.originalEvent.touches[0];a=G();d=H();b=g.pageX;c=g.pageY;e=!1;f=!0}).bind("touchmove.jsp",function(g){if(f){g=g.originalEvent.touches[0];var h=p,k=n;m.scrollTo(a+b-g.pageX,d+c-g.pageY);e=e||5<Math.abs(b-g.pageX)||5<Math.abs(c-g.pageY);return h==p&&k==n}}).bind("touchend.jsp",function(a){f=
  !1}).bind("click.jsp-touchclick",function(a){if(e)return e=!1})}var e,m=this,f,h,k,g,w,u,ia,Y,z,A,x,F,n,y,M,p,aa,D,ka,K,N,T,U,ba,E,B,L,V,W,Z,pa,O,qa,ca=!0,ea=!0,da=!1,fa=!1,na=c.clone(!1,!1).empty(),ja=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";pa=c.css("paddingTop")+" "+c.css("paddingRight")+" "+c.css("paddingBottom")+" "+c.css("paddingLeft");c.css("marginBottom",9);O=(parseInt(c.css("paddingLeft"),10)||0)+(parseInt(c.css("paddingRight"),10)||0);b.extend(m,{reinitialise:function(a){a=
  b.extend({},e,a);ha(a)},scrollToElement:function(a,d,b){X(a,d,b)},scrollTo:function(a,d,b){Q(a,b);I(d,b)},scrollToX:function(a,b){Q(a,b)},scrollToY:function(a,b){I(a,b)},scrollToPercentX:function(a,b){Q(a*(w-h),b)},scrollToPercentY:function(a,b){I(a*(u-k),b)},scrollBy:function(a,b,c){m.scrollByX(a,c);m.scrollByY(b,c)},scrollByX:function(a,b){var c=(G()+Math[0>a?"floor":"ceil"](a))/(w-h);S(c*M,b)},scrollByY:function(a,b){var c=(H()+Math[0>a?"floor":"ceil"](a))/(u-k);P(c*F,b)},positionDragX:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         b){S(a,b)},positionDragY:function(a,b){P(a,b)},animate:function(a,b,c,f){var g={};g[b]=c;a.animate(g,{duration:e.animateDuration,ease:e.animateEase,queue:!1,step:f})},getContentPositionX:function(){return G()},getContentPositionY:function(){return H()},getContentWidth:function(){return w},getContentHeight:function(){return u},getPercentScrolledX:function(){return G()/(w-h)},getPercentScrolledY:function(){return H()/(u-k)},getIsScrollableH:function(){return A},getIsScrollableV:function(){return z},
  getContentPane:function(){return f},scrollToBottom:function(a){P(F,a)},hijackInternalLinks:function(){ra()},destroy:function(){var a=H(),b=G();c.removeClass("jspScrollable").unbind(".jsp");c.replaceWith(na.append(f.children()));na.scrollTop(a);na.scrollLeft(b)}});ha(C)}C=b.extend({},b.fn.jScrollPane.defaults,C);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){C[this]=C[this]||C.speed});return this.each(function(){var c=b(this),v=c.data("jsp");v?v.reinitialise(C):
  (v=new ga(c,C),c.data("jsp",v))})};b.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:v,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,
  trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}})(jQuery,this);