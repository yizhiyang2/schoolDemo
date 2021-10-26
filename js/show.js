var url = location.href;
console.log(url)

var temp1 = url.split("?")[1];
var name = url.split("=")[1];
name = decodeURI(name,"UTF-8");

var showname = document.getElementById('showname');
showname.innerHTML = name;


Date.prototype.format = function(fmt){
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };

  if(/(y+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
        
  for(var k in o){
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(
        RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
    }       
  }

  return fmt;
}


var time = document.getElementById('time');
var date = new Date();
var now = date.format("yyyy-MM-dd hh:mm:ss");
time.innerHTML = now+" "+now;

var timebox = document.getElementById('timebox');
var position = 0;
setInterval(function(){
	position-=2;
	if(position <-210) {
		position=0;
	}
	timebox.style.transform = "translateX("+position+"px)";
	
},50)