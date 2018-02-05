var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android??
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios??
window.onerror = function(err) {
};

function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {
            callback(WebViewJavascriptBridge)
        }, false)
    }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}
function gunagao(){

    setupWebViewJavascriptBridge(function(bridge) {

        if(adsflag == 1){
//		if(isAndroid){
//			alert("bridge"+adsflag)
//			bridge.init(function(message, responseCallback) {
//	        //log('JS got a message', message)
//	        	var data = { 'Javascript Responds':'Wee!' }
//	        //log('JS responding with', data)
//	        	responseCallback(data)
//	    	})
//	    }
            //第三方banner
            bridge.callHandler('getDeviceInfo', '',function(response){
                $(".addBanner").removeClass("none") ;

                if(isiOS){
                    var  idfv = response.idfv,
                        idfa = response.idfa;
                }else if(isAndroid){
                    var  idfv = "",
                        idfa = "";
                }
                var userId = response.userid,
                    appid = response.appid,
                    lid = response.bannerLid,
                    os = response.os,
                    osversion = response.osversion,
                    appversion = response.appversion,
                    androidid = response.androidid,
                    imei = response.imei,
                    mac = response.mac,
                    appname = response.appname,
                    apppackagename = response.apppackagename,
                    imsi = response.imsi,
                    network = response.network,
                    time = response.time,
                    screenwidth = response.screenwidth,
                    screenheight = response.screenheight,
                    width = response.width,
                    height = response.height,
                    brand = response.brand,
                    model = response.model,
                    token = response.token,
                    isGP = response.isGP,
                    density = response.density;
                $(".lidBanner").attr("id",lid);

                var doc = document,
                    w = 640, // 广告位的宽高比自行调整
                    h = 100; // 广告位的宽高比自行调整
                //以下参数说明请参考api对接文档
                if(androidid === undefined){
                    androidid = ''
                }
                if(idfa === undefined){
                    idfa = ''
                }
                if(idfv === undefined){
                    idfv = ''
                }
                if(apppackagename === undefined){
                    apppackagename = '';
                }
                if(density === undefined){
                    density = ''
                }

                __BJJJ.letsGo({
                    appname:appname,
                    lid:lid, //填写lid
                    appid:appid, //填写appid
                    osversion:osversion, //填写osversion
                    appversion:appversion, //填写appversion
                    imei:imei, //填写imei（仅限Android）
                    androidid:androidid, //填写androidid（仅限Android）
                    idfa:idfa, //填写idfa（仅限iOS）
                    mac:mac, //填写mac
                    apppackagename:apppackagename, //填写apppackagename
                    imsi:imsi, //填写imsi（运营商）
                    network:network, //填写network
                    brand:brand, //填写brand
                    model:model, //填写model
                    density:density //填写屏幕密度
                });

            });

            //腰部广告
            //第三方banner

//	    	bridge.callHandler('getDeviceInfo', '',function(response){
//
//		       $(".ybgg").removeClass("none");
////		       alert($(".ybgg").attr("class"))
//	    		if(isiOS){
//	    			  var  idfv = response.idfv,
//			               idfa = response.idfa;
//	    		  }else if(isAndroid){
//	    			  var  idfv = "",
//		               idfa = "";
//	    		  }
//		            var userId = response.userid,
//		            appid = response.appid,
//		            lid = response.yaobuLid,
//		            os = response.os,
//
//		            osversion = response.osversion,
//
//		            appversion = response.appversion,
//
//		            androidid = response.androidid,
//
//		            imei = response.imei,
//
//		            mac = response.mac,
//		            appname = response.appname,
//
//		            apppackagename = response.apppackagename,
//
//		            imsi = response.imsi,
//
//		            network = response.network,
//
//		            time = response.time,
//
//		            screenwidth = response.screenwidth,
//
//		            screenheight = response.screenheight,
//
//		            width = response.width,
//
//		            height = response.height,
//
//		            brand = response.brand,
//
//		            model = response.model,
//
//		            token = response.token,
//		            isGP = response.isGP,
//		            density = response.density;
//		            var doc = document,
//		            w = 640, // 广告位的宽高比自行调整
//		            h = 100; // 广告位的宽高比自行调整
//		            $(".lidYb").attr("id",lid);
////		            alert($(".lidYb").attr("id"))
//		            if(androidid === undefined){
//		            	androidid = ''
//		            }
//		            if(idfa === undefined){
//		            	idfa = ''
//		            }
//		            if(idfv === undefined){
//		            	idfv = ''
//		            }
//		            if(apppackagename === undefined){
//		            	apppackagename = '';
//		            }
//		            if(density === undefined){
//			        	   density = ''
//			           }
//		            __BJJJ.letsGo({
//			                lid:lid, //填写lid
//			                appid:appid, //填写appid
//			                os:os, //填写os
//			                osversion:osversion, //填写osversion
//			                appversion:appversion, //填写appversion
//			                imei:imei, //填写imei（仅限Android）
//			                androidid:androidid, //填写androidid（仅限Android）
//			                idfa:idfa, //填写idfa（仅限iOS）
//			                mac:mac, //填写mac
//			                apppackagename:apppackagename, //填写apppackagename
//			                imsi:imsi, //填写imsi（运营商）
//			                network:network, //填写network
//			                brand:brand, //填写brand
//			                model:model, //填写model
//			                density:density, //填写屏幕密度
//			                screenwidth:screenwidth,
//			                screenheight:screenheight,
//							appname:appname
//			            });
//
//	      });
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                var userid = response.userid;
                var data = {
                    "userid":userid,
                    "adtype":'7'
                };
                data = JSON.stringify(data)
                $.ajax({
                    url: ajaxUrl + '/v1/ads/getAdInfo.do',
                    timeout: 3000,
                    type: 'post',
                    contentType: 'application/json;charset=utf-8',
                    dataType: "json",
                    data:data,
                    success: function(data) {
                        if(data.rescode != 200) {
                            $(".qcpx").addClass("none");
                            $(".qcpx").html("")
                        } else {
                            if(data.advertisementflag == 'true'){
                                var adid = data.adid;
                                $(".qcpx").removeClass("none")

                                $(".qcpx").html("<img style='width:100%;' data-link='"+data.outerurl+"' data-id='"+data.adid+"' src='"+data.adurl+"'>")
                            }else if(data.advertisementflag == 'false'){
                                $(".qcpx").addClass("none");
                                $(".qcpx").html("")
                            }
                        };
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        $(".qcpx").addClass("none");
                        $(".qcpx").html("")
                    },
                    complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
                        if(status=="timeout" || status=="error"){
                            $(".qcpx").addClass("none");
                            $(".qcpx").html("")
                        }

                    }
                });
            });
        }
        if(adsflag == '2'){
//	   		if(isAndroid){
//				bridge.init(function(message, responseCallback) {
//		        //log('JS got a message', message)
//		        	var data = { 'Javascript Responds':'Wee!' }
//		        //log('JS responding with', data)
//		        	responseCallback(data)
//		    	})
//		     };
            //显示、调用方法
            bridge.callHandler('isLogin', '',function(response){
                $.ajax({
                    url: ajaxUrl + "/v1/banner/getHomeBanner.do",
                    timeout : 3000,
                    type: 'get',
                    contentType: 'application/json;charset=utf-8',
                    dataType: "json",
                    success: function(data) {
                        if(data.rescode != 200) {
                            $("#focus").css("display","none")
                        } else {
                            $("#focus").css("display","block")
                            var str = ''
                            $.each(data.imgs,function(index,o){
                                str+='<div class="swiper-slide newBanner" data-id="'+o.adid+'" data-link="'+o.link_url+'"><a href="#"><img src="'+o.img_url+'" /></a></div>'
                            })
                            $(".mybannerone").removeClass("none")
                            $(".mybannerone").html(str);
                            if(data.imgs.length>1){
                                initSwiper();
                            }

                            $(".mybannerone").on("click",".newBanner", function() {

                                var that = this;
                                bridge.callHandler('isLogin', '',function(res){
                                    var lsLogin = res.isLogin;
                                    var userid = res.userid;

                                    if($(that).attr("data-link") !=''){
                                        if($(that).attr("data-link").indexOf("zhongchebaolian.com")>0){
                                            if(lsLogin == 'false'){
                                                bridge.callHandler('showLoginView', '');
                                            }else if(lsLogin == 'true'){
                                                var data = {
                                                    "userid":userid,
                                                    "adid":$(that).attr("data-id")
                                                };
                                                data = JSON.stringify(data)
                                                $.ajax({
                                                    url: ajaxUrl + '/v1/ads/adsCount.do',
                                                    type: 'post',
                                                    contentType: 'application/json;charset=utf-8',
                                                    dataType: "json",
                                                    data:data,
                                                    success: function(data) {
                                                        if(data.rescode != 200) {
                                                            tanwin(data.resdes);
                                                        }
                                                    }
                                                });
                                                bridge.callHandler('pushViewController', {'type':100,'url':$(that).attr("data-link")+'?userId='+userid+'&source=1'});
                                            }
                                        }else{
                                            var data = {
                                                "userid":userid,
                                                "adid":$(that).attr("data-id")
                                            }
                                            data = JSON.stringify(data)
                                            $.ajax({
                                                url: ajaxUrl + '/v1/ads/adsCount.do',
                                                type: 'post',
                                                contentType: 'application/json;charset=utf-8',
                                                dataType: "json",
                                                data:data,
                                                success: function(data) {
                                                    if(data.rescode != 200) {
                                                        tanwin(data.resdes);
                                                    }
                                                }
                                            });
                                            bridge.callHandler('pushViewController', {'type':100,'url':$(that).attr("data-link")});
                                        }
                                    }
                                })

                            });
                        };
                    },
                    complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
                        if(status=="timeout" || status=="error"){
                            $("#focus").css("display","none")
                        }

                    }
                });
            });

            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                var userid = response.userid;
                var data = {
                    "userid":userid,
                    "adtype":'7'
                };
                data = JSON.stringify(data)
                $.ajax({
                    url: ajaxUrl + '/v1/ads/getAdInfo.do',
                    timeout: 3000,
                    type: 'post',
                    contentType: 'application/json;charset=utf-8',
                    dataType: "json",
                    data:data,
                    success: function(data) {
                        if(data.rescode != 200) {
                            $(".qcpx").addClass("none");
                            $(".qcpx").html("")
                        } else {
                            if(data.advertisementflag == 'true'){
                                var adid = data.adid;
                                $(".qcpx").removeClass("none")

                                $(".qcpx").html("<img style='width:100%;' data-link='"+data.outerurl+"' data-id='"+data.adid+"' src='"+data.adurl+"'>")
                            }else if(data.advertisementflag == 'false'){
                                $(".qcpx").addClass("none");
                                $(".qcpx").html("")
                            }
                        };
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        $(".qcpx").addClass("none");
                        $(".qcpx").html("")
                    },
                    complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
                        if(status=="timeout" || status=="error"){
                            $(".qcpx").addClass("none");
                            $(".qcpx").html("")
                        }

                    }
                });
            });
        }
    })
}
var publicbridge;
var ajaxUrl = "https://cms.zhongchebaolian.com/cmsforbjmobile/";
//var ajaxUrl = "http://192.168.1.177:8080/cmsforbjmobile/";
var astrictno="";
var astrictmt="";
var currentuserid = "";
var adsflag = "";
var bridgeone = '';
$(document).ready(function(){

//
//	 $(".addBanner").removeClass("none");
//	  $(".lidBanner").attr("id",'0274378D2A3640FA8A0A135C0970BBC7');
//	  __BJJJ.letsGo({
//          lid:'0274378D2A3640FA8A0A135C0970BBC7', //填写lid
//          appid:'F245BB3FAFE04DD3BE1A40C26B38F686', //填写appid
//          os:'2', //填写os
//          osversion:'6.0', //填写osversion
//          appversion:'23', //填写appversion
//          imei:'', //填写imei（仅限Android）
//          androidid:'', //填写androidid（仅限Android）
//          idfa:'', //填写idfa（仅限iOS）
//          mac:'', //填写mac
//          apppackagename:'com.zcbl.bjjj_driving', //填写apppackagename
//          imsi:'', //填写imsi（运营商）
//          network:'WIFI', //填写network
//          brand:'Xiaomi', //填写brand
//          model:'iPhone7 Pluse', //填写model
//          density:'', //填写屏幕密度
//          screenwidth:'1080',
//          screenheight:'1920'
//      });



    var data = {
        "clientsource":"3",
    };
    data = JSON.stringify(data)
    $.ajax({
        url: ajaxUrl + '/v1/ads/getAdsUseFlag.do',
        type: 'post',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        timeout : 5000,
        data:data,
        success: function(data) {
            adsflag = data.adsflag;
            gunagao()
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#focus").css("display","none")

        } ,
        complete : function(XMLHttpRequest,status){
            if(status=="timeout" || status=="error"){
                $("#focus").css("display","none")
            }
        }
    });


    //requestfn('49a9448e75134f83a5a4918c32773862');
    setupWebViewJavascriptBridge(function(bridge) {
        if(isAndroid){
            bridge.init(function(message, responseCallback) {
                //log('JS got a message', message)
                var data = { 'Javascript Responds':'Wee!' }
                //log('JS responding with', data)
                responseCallback(data)
            })
        };


        /*保险到期提示 */
        bridge.callHandler('isLogin', '',function(response){
            if(response.isLogin == 'true'){
                var userId = response.userid;
                currentuserid = userId;
                requestfn(userId);

            }
        });

        bridge.callHandler('isLogin', '',function(response){
            if(isAndroid){
                var index = response.version.indexOf('-');
                response.version = response.version.substring(0,index);

                if(response.version < '2.4.5'){
//	    			$(".confirmVersionBox").css("display",'block')
                }
            }
            if(isiOS){
                var index = response.version.indexOf(',');
                response.version = response.version.substring(8,index);

                if(response.version < '2.4.4' ){
//	    			$(".confirmVersionBox").css("display",'block')
                }
            }

        })


        publicbridge=bridge;


        $('.comityCrossing').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'https://staticweb.accident.zhongchebaolian.com/message/banmaxian/index.html'});
        });

        //banner图链接地址
        $('.banner2').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'http://jy.beijing.gov.cn/sr/faces/welcome.jsp?surveyId=EFA8368936F611E78CB84AAD859458F8'});
        });
        $('.addTc').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'http://wx.pdyulu.com/coupon/zc_coupon.aspx'});
        });

        $('.tc').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'https://wukong.service.etcp.cn/active_page/bj_trafficpolice.html'});
        });
        $('.carWash').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'https://yc.m.autohome.com.cn/specialtemplate.do?id=2804&pvareaid=2868373'});
        });

        //点击立即续保
        $('#ljtbbtn').click(function(){
            ljyb(currentuserid);
            bridge.callHandler('pushViewController', {'type':100,'url':getRootPath2()+'/chaifen/business-convenience-services/carInsuranceCover.html?source=9'});
        });
        //点击我已投保
        $('#wyxbbtn').click(function(){
            wytb(currentuserid);
        });

        $('#sgecl').click(function(){
            bridge.callHandler('pushViewController', {'type':0});
        });

        $('#jjzbl').click(function(){
            bridge.callHandler('pushViewController', {'type':1});
        });

        $('.wfcx').click(function(){
            bridge.callHandler('pushViewController', {'type':2});
        });

        $('.wfjb').click(function(){
            bridge.callHandler('pushViewController', {'type':3});
        });

        $('.yjjd').click(function(){
            bridge.callHandler('pushViewController', {'type':4});
        });

        $('.jjdt').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'http://jiaojing.ynet.com/news.html'});
        });
        //充电桩
//      $('#cdz').click(function(){
//       bridge.callHandler('pushViewController', {'type':100,'url':'http://appapi.evehicle.cn/wx-map/index.html'});
//      });

        $(".djfu").click(function() {
            bridge.callHandler('pushViewController', {'type':100,'url':'http://openweb.liangzibao.cn/redirect/to?p=1157344'});
        })

        $(".qcpx").click(function(){
//				if(adsflag == '2'){
            var that = this;
            bridge.callHandler('isLogin', '',function(res){
                var lsLogin = res.isLogin;
                var userid = res.userid;
                if($(that).find('img').attr("data-link") !=''){
                    var data = {
                        "userid":userid,
                        "adid":$(that).find('img').attr("data-id")
                    }
                    data = JSON.stringify(data)
                    $.ajax({
                        url: ajaxUrl + '/v1/ads/adsCount.do',
                        type: 'post',
                        contentType: 'application/json;charset=utf-8',
                        dataType: "json",
                        data:data,
                        success: function(data) {
                            if(data.rescode != 200) {

                            }
                        }
                    });
                    bridge.callHandler('pushViewController', {'type':100,'url':$(that).find('img').attr("data-link")});
                }
            })
//			}
        })


        $("#czzx").click(function() {
            bridge.callHandler('pushViewController', {'type':100,'url':'http://jiaojing.ynet.com/skill.html'});
        })
//		预约验车
        $(".yyyc").click(function() {
            bridge.callHandler('isLogin', '',function(response){
                console.log('js调用客户端方法回调传参'+response);
                var lsLogin = response.isLogin;
                if(response.isLogin == 'true'){
                    var userId = response.userid;
                    bridge.callHandler('pushViewController', {'type':100,'url':"https://bjjj.zhongchebaolian.com/AppointValidate/jsp/yyyc/vehicle.jsp?userId="+userId});
                } else if(lsLogin == 'false'){
                    $('.tan').removeClass('none');
                    var clea=setInterval(function(){
                        $('.tan').addClass('none');
                        clearInterval(clea);
                    },1000);
                }
            });
        })
        //		民生生卡
        $(".msck").click(function() {
            bridge.callHandler('isLogin', '',function(response){
                console.log('js调用客户端方法回调传参'+response);
                var lsLogin = response.isLogin;
                var userid = response.userid;
                var data = {
                    "userid":userid,
                    "adid":"minsheng"
                }
                data = JSON.stringify(data)
                $.ajax({
                    url: ajaxUrl + '/v1/ads/adsCount.do',
                    type: 'post',
                    contentType: 'application/json;charset=utf-8',
                    dataType: "json",
                    data:data,
                    success: function(data) {
                        if(data.rescode != 200) {

                        }else{
                            bridge.callHandler('pushViewController', {'type':100,'url':"http://t.cn/RQsSlrA"});
                        }
                    }
                });
            });
        })
        //二手车
        $('.oldCar').click(function(){
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                var userid = response.userid;
                var data = {
                    "userid":userid,
                    "adid":"ershouche"
                }
                data = JSON.stringify(data)
                $.ajax({
                    url: ajaxUrl + '/v1/ads/adsCount.do',
                    type: 'post',
                    contentType: 'application/json;charset=utf-8',
                    dataType: "json",
                    data:data,
                    success: function(data) {
                        if(data.rescode != 200) {
                        }else{
                        }
                        bridge.callHandler('pushViewController', {'type':100,'url':'https://e.cn.miaozhen.com/r/k=2069516&p=7CvVa&dx=__IPDX__&rt=2&ns=__IP__&ni=__IESID__&v=__LOC__&xa=__ADPLATFORM__&tr=__REQUESTID__&mo=__OS__&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&vo=3f2d14953&vr=2&o=https://cm.xin.com/jump.html?s=bjjj&c=icon4&type=mindex&channel=a147b287c44774d243285e2337489f513'});
                    }
                });
            });
        });
        //同城服务
        $('.sameCity').click(function(){
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                var userid = response.userid;
                var data = {
                    "userid":userid,
                    "adid":"ershouche"
                }
                data = JSON.stringify(data)
                $.ajax({
                    url: ajaxUrl + '/v1/ads/adsCount.do',
                    type: 'post',
                    contentType: 'application/json;charset=utf-8',
                    dataType: "json",
                    data:data,
                    success: function(data) {
                        bridge.callHandler('pushViewController', {'type':100,'url':'https://jumpluna.58.com/i/2c5rkhpf23v43nkddh1'});
                        if(data.rescode != 200) {
                        }else{
                        }
                    }
                });
            });

        });
        //审验教育
        $('.syjy').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'https://bjjj.zhongchebaolian.com/shenyan/shenyanController/index.do'});
        });

        //办事指南
        $('.bszn').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'https://bjjj.zhongchebaolian.com/policy/view/work.jsp'});
        });

        $('.differAdress').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'https://mp.weixin.qq.com/s?__biz=MzI4Mzg4Nzk5Mw==&mid=2247483657&idx=1&sn=d9dd09ec2b2126419170f8fbe60d3a5d&chksm=eb82911fdcf5180964884d3dd5167e78d211f770b05d2ebed63ed6c78466bc5f2da1331e4606&mpshare=1&scene=1&srcid=0925rPp4fW2UZZpgsW0bm6SS#rd'});
        });
        $('.router').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'https://mp.weixin.qq.com/s/mDx7xtFc_u8O3mqnvywlhw'});
        });
        $('.taiqiang').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'http://clickc.admaster.com.cn/c/a93508,b1949543,c2,i0,m101,8a2,8b3,h'});
        });
        $('.rule').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'https://staticweb.accident.zhongchebaolian.com/message/20170809/20170809jiaogua.html'});
        });
//      $('.jingDong').click(function(){
//          bridge.callHandler('pushViewController', {'type':100,'url':'http://clickc.admaster.com.cn/c/a91011,b1916562,c2,i0,m101,8a2,8b2,h'});
//         });
        $('.jingDong02').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'http://clickc.admaster.com.cn/c/a93682,b1959539,c2,i0,m101,8a2,8b2,h'});
        });

        // $('.jwgk').click(function(){
        // 	bridge.callHandler('pushViewController', {'type':6});
        // });
        // $('#jtggxq').click(function(){
        // 	bridge.callHandler('pushViewController', {'type':8});
        // });
        $('.winpage').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':'https://staticweb.accident.zhongchebaolian.com/winningInformation/winInfoPage.html'});
        });
        //出行提示
        $(".cxts").click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':getRootPath() + '/jsp/savedemo/travelTips/travelTipsPage.html'});
        })
        $('#jtggxq').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':getRootPath2()+'/ssmframe/jtadvisement/jtpage.do?categoryid=10'});
        });
        $('#jwgk').click(function(){
            bridge.callHandler('pushViewController', {'type':100,'url':getRootPath2()+'/ssmframe/jtadvisement/jtpage.do?categoryid=30'});
        });

        $('#downjjzx').click(function(){
            //线上环境
            bridge.callHandler('pushViewController', {'type':100,'commonUrl':'https://api.accidentx.zhongchebaolian.com/mobile/jsp/jjzbl/ajzbl.html'});
            //本地环境
            //bridge.callHandler('pushViewController', {'type':100,'url':'https://mock.zhongchebaolian.com/industryguild_mobile_standard_self2.1.2/jsp/jjzbl/ajzbl.html'});
            //测试环境
            //bridge.callHandler('pushViewController', {'type':100,'url':'http://101.201.61.39:80/mobile/jsp/jjzbl/ajzbl.html'});
        });
        //2017-5-9目前废除
        /*$('.sbxl').click(function(){
                    //线上环境
                    // 获取终端的相关信息
                    var Terminal = {
                        // 辨别移动终端类型
                    x    platform : function(){
                            var u = navigator.userAgent, app = navigator.appVersion;

                            return {
                                //ios终端
                                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                                //android终端或者uc浏览器
                                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
                            };
                        }()
                    }
                    // 判断不同的终端
                    if (Terminal.platform.ios){
                             bridge.callHandler('pushViewController', {'type':7,'url':'https://api.accident.zhongchebaolian.com/industryguild_mobile_standard_self2.1.2/jsp/tonggao.html'});

                    }else{
                            bridge.callHandler('pushViewController', {'type':100,'url':'https://api.accident.zhongchebaolian.com/industryguild_mobile_standard_self2.1.2/jsp/tonggao.html'});

                    }


            });*/




        //路况导航模块
        $("#lkdh").click(function(){
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                if(lsLogin == 'false'){
                    bridge.callHandler('showLoginView', '');
                }else if(response.isLogin == 'true'){
                    var userId = response.userid;

                    if(isiOS){
                        bridge.callHandler('pushViewController',{'type':100,'url':getRootPath2()+"/tongji/roadNavigation/navigationIos.html?userId="+userId+"&astrictno="+encodeURI(astrictno)+"&astrictmt="+encodeURI(astrictmt)});
                    }else{
                        bridge.callHandler('pushViewController',{'type':100,'url':getRootPath2()+"/tongji/roadNavigation/navigation.html?userId="+userId+"&astrictno="+encodeURI(astrictno)+"&astrictmt="+encodeURI(astrictmt)});
                    }



                }
            });
        });

        $('.hcds').click(function(){
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                if(lsLogin == 'false'){
                    bridge.callHandler('showLoginView', '');
                }else if(response.isLogin == 'true'){
                    var userId = response.userid;
                    var phone = response.phoneNum;
                    bridge.callHandler('pushViewController', {'type':100,'url':getRootPath2()+'/HandGesture/html/vote.html?userId='+userId+'&phone='+phone+'&pageid=1'});
                }
            });
        });


        $('.weixins').click(function(){
            if(isiOS){
                bridge.callHandler('pushViewController', {'type':7,'url':'http://mp.weixin.qq.com/s?__biz=MjM5MzM4MDU0Mg==&mid=2670927229&idx=1&sn=8b188e16160f62f94dc965281d7675a1&scene=0#wechat_redirect'});
            }else{
                bridge.callHandler('pushViewController', {'type':100,'url':'http://mp.weixin.qq.com/s?__biz=MjM5MzM4MDU0Mg==&mid=2670927229&idx=1&sn=8b188e16160f62f94dc965281d7675a1&scene=0#wechat_redirect'});
            }

        });
//  信息公开模块
        $('#xxgk').click(function(){
            if(isiOS){
                bridge.callHandler('pushViewController', {'type':7,'url':getRootPath()+'/jsp/xxgk.jsp'});
            }else{
                bridge.callHandler('pushViewController', {'type':100,'url':getRootPath()+'/jsp/xxgk.jsp'});
            }

        });
        $('.gzwm').click(function(){
            if(isiOS){
                bridge.callHandler('pushViewController', {'type':7,'url':'http://ggk.carcycle.cn/scratchcard/index'});
            }else{
                bridge.callHandler('pushViewController', {'type':100,'url':'http://ggk.carcycle.cn/scratchcard/index'});
            }

        });

        //  交通播报
        $('#jtbb').click(function(){
            if(isiOS){
                bridge.callHandler('pushViewController', {'type':7,'url':getRootPath()+'/jsp/savedemo/travelTips/travelTipsPage_v1.html'});
            }else{
                bridge.callHandler('pushViewController', {'type':100,'url':getRootPath()+'/jsp/savedemo/travelTips/travelTipsPage_v1.html'});
            }

        });
        //  交通播报
        $('.jtbb').click(function(){
            if(isiOS){
                bridge.callHandler('pushViewController', {'type':7,'url':getRootPath()+'/jsp/savedemo/travelTips/travelTipsPage_v1.html'});
            }else{
                bridge.callHandler('pushViewController', {'type':100,'url':getRootPath()+'/jsp/savedemo/travelTips/travelTipsPage_v1.html'});
            }

        });

        $('.clbf_hg').click(function(){
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                if(lsLogin == 'false'){
                    bridge.callHandler('showLoginView', '');
                }else if(response.isLogin == 'true'){
                    var userId = response.userid,
                        mobile = response.phoneNum;;
                    $.ajax({
                        url: getRootPath2() + "/ConvenientServiceCS/csCommon/transferLog.do?userId=" + userId + "&mobile=" + mobile,
                        type: 'get',
                        contentType: 'application/json;charset=utf-8',
                        dataType: "json",
                        success: function(data) {
                            if(data.rescode != 200) {
                                tanwin(data.resdes);
                            } else {
                                bridge.callHandler('pushViewController', {'type':100,'url':data.resdata.url});
                            };
                        }
                    });

                }
            });

        });


        var Url122 = "https://platform.zhongchebaolian.com" ;
// var Url122 = "https://mock.zhongchebaolian.com" ;
//情况反映
        $('.qkfy').click(function(){
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                if(lsLogin == 'false'){
                    bridge.callHandler('showLoginView', '');
                }else if(response.isLogin == 'true'){
                    var userId = response.userid;
                    var phone = response.phoneNum;
                    bridge.callHandler('pushViewController', {'type':100,'url':Url122+'/bjjj-122platform-frontend/jsp/complaints/complaints.html?phone='+phone+'&userId='+userId});
                }
            });
        });
//业务咨询
        $('.ywzx').click(function(){
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                if(lsLogin == 'false'){
                    bridge.callHandler('showLoginView', '');
                }else if(response.isLogin == 'true'){
                    var userId = response.userid;
                    var phone = response.phoneNum;
                    bridge.callHandler('pushViewController', {'type':100,'url':Url122+'/bjjj-122platform-frontend/jsp/consult/consultpage.html?phone='+phone+'&userId='+userId});
                }
            });
        });
//拥堵报警
        $('.ydbj').click(function(){
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                if(lsLogin == 'false'){
                    bridge.callHandler('showLoginView', '');
                }else if(response.isLogin == 'true'){
                    var userId = response.userid;
                    var phone = response.phoneNum;
                    bridge.callHandler('pushViewController', {'type':100,'url':Url122+'/bjjj-122platform-frontend/jsp/blockup/blockuppage.html?phone='+phone+'&userId='+userId});
                }
            });
        });
//挪车求助
        $('.ncqz').click(function(){
            $(".confirmBox").css('display','block')
//	bridge.callHandler('isLogin', '',function(response){
//		 var lsLogin = response.isLogin;
//		 if(lsLogin == 'false'){
//		   bridge.callHandler('showLoginView', '');
//		 }else if(response.isLogin == 'true'){
//		 	var userId = response.userid;
//		 	var phone = response.phoneNum;
//		   bridge.callHandler('pushViewController', {'type':100,'url':Url122+'/bjjj-122platform-frontend/jsp/consult/bjjjNuoche.html?phone='+phone+'&userId='+userId});
//		 }
//	 });
//	tanwin("即将开通，敬请期待……");
            /* bridge.callHandler('isLogin', '',function(response){
               var lsLogin = response.isLogin;
               if(lsLogin == 'false'){
                 bridge.callHandler('showLoginView', '');
               }else if(response.isLogin == 'true'){
                      //var userId = response.userid;
                      var app_id="d584542d105322";
                      var app_secret ="abeed7c94b550b6946";
                       var phone = response.phoneNum;
                       var nick =response.deviceid;
                       var openid = phone;
                       var gender=0;
                       var tmp = Math.round(new Date().getTime()/1000).toString();
                       var timestamp = tmp.substr(0,10);
                       var sign =md5(app_id+app_secret+gender+nick+phone+openid+timestamp);
                       //测试
                    bridge.callHandler('pushViewController', {'type':100,'url':'https://dev.quanmin110.com/h5/80/bjjj/nuoche.html?app_id='+app_id+'&phone='+phone+'&nick='+nick+'&openid='+openid+'&gender='+gender+'&timestamp='+timestamp+'&sign='+sign});
                      //正式
                    // bridge.callHandler('pushViewController', {'type':100,'url':'https://api.quanmin110.com/h5/80/bjjj/nuoche.html?app_id='+app_id+'&phone='+phone+'&nick='+nick+'&openid='+openid+'&gender='+gender+'&timestamp='+timestamp+'&sign='+sign});
               }
           });*/
        });
//关闭挪车弹框
        $(".closeFont").click(function(){
            $(".confirmBox").css('display','none')
        })

//  便民服务
//        $('.bmfu').click(function(){
//            var soucenum = $(this).attr('data-souce');
//
//	    bridge.callHandler('isLogin', '',function(response){
//	         var lsLogin = response.isLogin;
//	         if(lsLogin == 'false'){
//	           bridge.callHandler('showLoginView', '');
//	         }else if(response.isLogin == 'true'){
//	          bridge.callHandler('pushViewController', {'type':100,'url':getRootPath2()+'/chaifen/business-convenience-services/bm/bm.html?source='+soucenum});
//	         }
//	      });
//
//      });

//        $('.bmfw').click(function(){
//    	    bridge.callHandler('isLogin', '',function(response){
//    	         var lsLogin = response.isLogin;
//    	         if(lsLogin == 'false'){
//    	           bridge.callHandler('showLoginView', '');
//    	         }else if(response.isLogin == 'true'){
//    	          //var userId = response.userid;
//    	           bridge.callHandler('pushViewController', {'type':100,'url':getRootPath2()+'/chaifen/business-convenience-services/bm/bm.html?source=2'});
//    	         }
//    	      });
//
//          });

        //电子保单
        $('#dzbdcx').click(function(){
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                if(lsLogin == 'false'){
                    bridge.callHandler('showLoginView', '');
                }else if(response.isLogin == 'true'){
                    var userId = response.userid;
                    bridge.callHandler('pushViewController', {'type':100,'url':getRootPath2()+'/einsurancepolicy/jsp/elePolicy.html?userId='+userId});
                }
            });

        });


        $('.cjg').click(function(){
            if(isiOS){
                bridge.callHandler('pushViewController', {'type':7,'url':getRootPath2()+'/industryguild_mobile_standard_self2.1.2/jsp/savedemo/banner0.jsp'});
            }else{
                bridge.callHandler('pushViewController', {'type':100,'url':getRootPath2()+'/industryguild_mobile_standard_self2.1.2/jsp/savedemo/banner0.jsp'});
            }
        });
        $('.er').click(function(){
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                if(response.isLogin == 'true'){
                    var userId = response.userid;
                    bridge.callHandler('pushViewController', {'type':100,'url':getRootPath2()+'/hand/login.html?userId='+userId});

                }
                else if(lsLogin == 'false'){

                    $('.tan').removeClass('none');
                    var clea=setInterval(function(){

                        $('.tan').addClass('none');
                        clearInterval(clea);
                    },1000);

                }
            });

        });

        $('.aqxc').click(function(){
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                if(lsLogin == 'false'){
                    bridge.callHandler('showLoginView', '');
                }else if(response.isLogin == 'true'){

                    //bridge.callHandler('pushViewController', {'type':100,'url':'https://api.accident.zhongchebaolian.com/industryguild_mobile_standard_self2.1.2/jsp/savedemo/demo.html'});
                    bridge.callHandler('pushViewController', {'type':100,'url':getRootPath2()+'/chaifen/business-safe-drumbeating/SafetyAdvertise.html'});
                }
            });
        });
        //banner图无违法好车主
        $('.noIllegal').click(function(){
            bridge.callHandler('isLogin', '',function(response){
                var lsLogin = response.isLogin;
                if(lsLogin == 'false'){
                    bridge.callHandler('showLoginView', '');
                }else if(response.isLogin == 'true'){

                    bridge.callHandler('pushViewController', {'type':100,'url':getRootPath2()+'/chaifen/noViolationDraw/index.html?userId='+response.userid+'&source=1'});
                }
            });
        });
        //汛期驾车，点击关闭按钮，弹窗关闭
        $('.floodSeason').click(function(){
            $('.floodSeason').addClass('none');
        })

        //显示、调用方法
        bridge.callHandler('getLocationCoordinate', '', function(response) {
            var location=response.citycode;
            var latx=response.lat;
            var lngy=response.lon;
            var acc="";
            bridge.callHandler('isLogin', '',function(response1){
                if(response1.isLogin == 'true'){
                    acc=response1.userid;
                }
                $.ajax({
                    type: "post",
                    data:{
                        "location":location,
                        "latx":latx,
                        "lngy":lngy,
                        "acc":acc
                    },
                    url: getRootPath()+"/mobile/standard/weather",
                    dataType: "json",
                    success: function(data) {
                        var astrictcarstr = "<span>今日限行:"+data.astrictno+"<span>";
                        $("#astrictcar").append(astrictcarstr);
                        var dateandweekstr = "<span>"+data.date+"<span></span> "+data.week+"</span>";
                        $("#dateandweek").append(dateandweekstr);

                    }
                });});
        });

    });
});
function jtgg(e){
    publicbridge.callHandler('pushViewController', {'type':7,'url':$(e).attr('data')});
}
//初始化swiper
function initSwiper(){
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        autoplay:3000,
        autoplayDisableOnInteraction : false
    });
}
function getRootPath(){
    //获取当前网址，如： http://localhost:8088/test/test.jsp
    var curPath=window.document.location.href;
    //获取主机地址之后的目录，如： test/test.jsp
    var pathName=window.document.location.pathname;
    var pos=curPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8088
    var localhostPaht=curPath.substring(0,pos);
    //获取带"/"的项目名，如：/test
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    return(localhostPaht+projectName);
}

function getRootPath2(){
    //获取当前网址，如： http://localhost:8088/test/test.jsp
    var curPath=window.document.location.href;
    //获取主机地址之后的目录，如： test/test.jsp
    var pathName=window.document.location.pathname;
    var pos=curPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8088
    var localhostPaht=curPath.substring(0,pos);
    //获取带"/"的项目名，如：/test
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    return localhostPaht;
}
//弹窗
function tanwin(text) {
    $("#tanwin").text(text).attr('style','');
    var clea=setInterval(function(){
        $('.tan').fadeOut("slow",function(){
            $("#tanwin").attr('style','display:none');
            clearInterval(clea);
        });
    },1000);
};
//保险到期提示方法
function requestfn(myuserid){
    var timestamp_random = new Date().getTime();
    var obj = new Object();
    obj.userid = myuserid;
    var jsonobj = JSON.stringify(obj);
    $.ajax({
        type: "get",
        url: getRootPath2() +"/boot-app-api-electronicpolicy/electronicpolicy/standard/v1/policy/getelectronicpolicy?userid="+myuserid+"&random="+timestamp_random,
        success:function(data){
            if(data.rescode=='4000'){
                if(data.data.ifshow=='1'){
                    var telectronicpolicylist = data.data.telectronicpolicylist;  //列表的集合
                    //显示模块
                    var str='<div class=mycar><h3>车牌号'+telectronicpolicylist[0].carno+'</h3><p>交强险于'+telectronicpolicylist[0].overduetime+'日到期</p></div>';
                    $('#allcar').html(str);
                    $('#tbdqtx').removeClass('none');
                }else if(data.data.ifshow=='2'){
                    //隐藏模块
                    $('#tbdqtx').addClass('none');
                };
            }else{
                //调取接口失败
                tanwin(data.resdes);
            };
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
    });

};

//点击我已投保
function wytb(myuserid){
    var timestamp_random = new Date().getTime();
    $('#tbdqtx').addClass('none');
    $.ajax({
        type: "get",
        url:getRootPath2() +"/boot-app-api-electronicpolicy/electronicpolicy/standard/v1/policy/renewedelectronicpolicy?userid="+myuserid+"&random="+timestamp_random,
        success:function(data){
        }
    });
};

//点击立即投保
function ljyb(myuserid){
    var timestamp_random = new Date().getTime();
    $.ajax({
        type: "get",
        url:getRootPath2() +"/boot-app-api-electronicpolicy/electronicpolicy/standard/v1/policy/wantrenewal?userid="+myuserid+"&random="+timestamp_random,
        success:function(data){
        }
    });
};