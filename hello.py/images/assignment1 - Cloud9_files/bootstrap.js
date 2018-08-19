!function(global){"use strict"
function bindScript(script){return"function"==typeof script?script:loadScript.bind(null,script,token)

}function loadScript(path,token,callback){var head=document.head||document.getElementsByTagName("head")[0]||document.documentElement,s=document.createElement("script"),and=path.indexOf("?")>=0?"&":"?"


s.src=path+(token?and+"access_token="+encodeURIComponent(token):""),s.src.indexOf("://"+window.location.host)==-1&&(s.crossOrigin=!0),
head.appendChild(s),s.onload=s.onreadystatechange=function(_,isAbort){!isAbort&&s.readyState&&"loaded"!=s.readyState&&"complete"!=s.readyState||(s=s.onload=s.onreadystatechange=null,
isAbort||callback())}}function importCssString(cssText){var style
document.createStyleSheet?(style=document.createStyleSheet(),style.cssText=cssText):(style=document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml","style"):document.createElement("style"),
style.appendChild(document.createTextNode(cssText)),(document.head||document.getElementsByTagName("head")[0]||document.documentElement).appendChild(style))

}function serial(handlers,callback){!function loop(i){return i>=handlers.length?callback():void handlers[i](function(err){
return err?callback(err):void loop(i+1)})}(0)}function parallel(handlers,callback){var hadErr=!1,count=0


handlers.forEach(function(handler){handler(function(err){if(!hadErr)return err?(hadErr=!0,callback(err)):(count+=1,
count==handlers.length?callback():void 0)})})}function Auth(clientId,authorizationUrl,loginHint){this.clientId=clientId,
this.authorizationUrl=authorizationUrl,this.loginHint=loginHint,listeners[authorizationUrl]={}}function uid(length){
var buf=new Uint8Array(new ArrayBuffer(length))
return(window.crypto||window.msCrypto).getRandomValues(buf),btoa(Array.prototype.reduce.call(buf,function(s,c){
return s+String.fromCharCode(c)},"")).slice(0,length)}var token="",auth=global.auth=function(options){
function noop(callback){callback()}function login(callback,errback){function iframeLogin(){errback&&errback(),
oauth.authorize(!1,function(err,_token){return err?callback(err):(token=_token.access_token,void callback(null,token))

})}var oauth=new Auth(options.clientId,options.authorizationUrl,options.loginHint)
return oauth.authorize(!0,function(err,_token){return err?iframeLogin():(token=_token.access_token,void callback(null,token))

}),function(){oauth.cancel()}}function done(err){onLoad(err,token)}global.auth=null
var onLoad=options.onLoad,preload=options.preload||noop,authorized=options.authorized||noop,background=options.background||noop


return importCssString("html.fulliframe, body.fulliframe {        overflow: hidden;        margin: auto;        height: 100%;        width: 100%;    }"),
onLoad&&auth.parallel([].concat(background,auth.serial([auth.parallel([preload,login]),authorized])))(done),
{login:login}}
auth.serial=function(list){return function(callback){serial(list.map(bindScript),callback)}},auth.parallel=function(list){
return function(callback){parallel(list.map(bindScript),callback)}}
var listeners={}
window.addEventListener("message",function(e){var token=e.data.token
if(token)for(var url in listeners)if(0===url.indexOf(e.origin)){var callback=listeners[url][token.state]


delete listeners[url][token.state],callback&&callback(null,token),e.data.token=null
break}},!0),Auth.prototype.authorize=function(immediate,callback){if("function"==typeof immediate)return this.authorize({},immediate)


immediate=immediate||!1
var that=this
this.state=uid(15)
var url=this.authorizationUrl+"?response_type=postmessage&client_id="+encodeURIComponent(this.clientId)+"&state="+encodeURIComponent(this.state)+"&style=overlay"


this.loginHint&&(url+="&login_hint="+encodeURIComponent(this.loginHint||"")),immediate&&(url+="&immediate=1")


var frame=this._createFrame(url,immediate),timeout=immediate?3e3:0
if(timeout)var timer=setTimeout(function(){that._unpoll(),callback(new Error("Login timed out"))},timeout)


this._removeFrame=function(){clearTimeout(timer),frame.parentNode.removeChild(frame),document.documentElement.className=document.documentElement.className.replace(/\bfulliframe\b/,""),
document.body.className=document.body.className.replace(/\bfulliframe\b/,""),that._removeFrame=null},
this._poll(function(err,token){return that._removeFrame&&that._removeFrame(),err?callback(err):token.error?(err=new Error(token.error),
err.code=token.error_code,callback(err)):(that.token=token,callback(null,token))})},Auth.prototype.cancel=function(){
this._unpoll(),this._removeFrame&&this._removeFrame()},Auth.prototype._createFrame=function(url,hidden){
var frame=document.createElement("iframe")
return frame.setAttribute("src",url),frame.setAttribute("frameborder","0"),hidden?(frame.style.width="1000px",
frame.style.height="1000px",frame.style.left="-10000px"):(frame.style.width="100%",frame.style.height="100%",
frame.style.zIndex="300000",document.documentElement.className+=" fulliframe",document.body.className+=" fulliframe"),
frame.style.position="absolute",document.body.appendChild(frame),frame},Auth.prototype._poll=function(callback){
listeners[this.authorizationUrl][this.state]=callback},Auth.prototype._unpoll=function(){delete listeners[this.authorizationUrl][this.state]

}}(this)

