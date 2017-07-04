var cd="";//记录
var myshort="shimeru";//在多说设置的短域名
var cdpath="su/";//目录src
var mdpath="md/";//files src sub
var mycharset="UTF-8";//使用的字符集
var cdp='{"iv":"Jmeqe5wgD8YQMvSroyE0JQ","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"kgytpxllXxk","ct":"8/rNLM9HpCJdciYXBME"}';//目录文件加密信息
var lis=new Array();
/*
*index0:title
*index1:20160721 date
*index2:dictionary
*index3:aha? question
*index4:path crypt
*/
$(document).ready(function(){
  $("<div>").load(cdpath+sjcl.decrypt("key",cdp)+".cd",function(r,s,x){
    cd=r;
    lo_li();
  });
  location.hash="#!/";
  hashChange();
});
function lo_li()
{
	var lol_i=cd.split('\n');
	for(var loli in lol_i)
	{
		var lolitas=lol_i[loli].split('| |');
		lis.push(lolitas);
		var lisl=$("<div>");
		lisl.html("<div>"+lolitas[0]+"</div>"+
				  "<small>"+lolitas[1]+"</small>");
		lisl.attr("loli",loli);
		lisl.attr("class","loli");
		$(lisl).click(function(){
				location.hash="#!/"+lis[$(this).attr("loli")][0];
				hashChange();
		});
		$("#ls").append(lisl);
	}
}
function futa(l){
	var k;
	for(var jsk in lis)
	{
		if(lis[jsk].indexOf(l)>-1)
			k=jsk;
	}
	l=lis[k];
	if(l[3]!="null")
	{
		var key=prompt(l[3],"****");
		try{
		  var cjcl=sjcl.decrypt(key,l[4]);
		  sasa(k,cjcl);
		}catch(e){
			alert("em,wrong?\n"+e);
		}
	}else{
		sasa(k,l[4]);
	}
}
function sasa(k,j){
	//显示标题、文章和评论
	$("#t").text("T|"+lis[k][0]);
	$("footer").css("display","none");
	$("<div>").load(mdpath+j+".md",function(r,s,x){
		if(s=="success")
		{
			$("#coc").html(markdown.toHTML(r));
			location.hash="#!/"+j;
			getComment(k,j);
			$("#ls").css("display","none");
			$("#coc").css("display","block");
			$("#cmt").css("display","block");
		}else{
			alert("en...something wrong");
		}
	});
}
function getComment(k,j){
	try{$("#ds-thread").remove();}catch(e){console.log(e);}
	var comm=$("<div>");
	comm.attr({
		"class":"ds-thread",
		"data-thread-key":j,
		"data-title":lis[k][0],
		"data-url":location.href
	});
	$("#cmt").append(comm);
	if(!window.DUOSHUO)
	{
	  window.duoshuoQuery={short_name:myshort};	
	  var ds=$("<script>");
	  ds.attr({
		  type:"text/javascript",
		  async:true,
		  chartset:mycharset,
		  src:(document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js'
		  });
	  ds.ready(function(){ds.remove();});
	  ($('head')||$('body')).append(ds);
	}else{
		DUOSHUO.EmbedThread('.ds-thread');
	}
}
function hashChange()
{
	if(decodeURIComponent(location.hash).indexOf("#!/")>=0)
	{
	  var nhows=decodeURIComponent(location.hash).split("#!/")[1];
	  (nhows=="")?location.hash="#!/"+"home":null;
	  (nhows=="home"||nhows=="")?null:futa(nhows);
	}
}
window.onhashchange=hashChange();