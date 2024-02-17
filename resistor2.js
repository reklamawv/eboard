$(document).ready(function(){

	var b= [0,1,2,3,4,5,6,7,8,9," "," "];
	var mul= [1,10,100,1000,10000,100000,1000000,10000000," "," ",0.1,0.01];
	var tol= ["","1%","2%"," "," ","0.5%","0.25%","0.10%","0.05%"," ","5%","10%"];
	var bg= ["000000","997552","ff3939","ffa54a","ffff7a","89ff89","4888f2","f090f6","808080","ffffff","cd9933","cccccc"];
	var sel= [0,12,24,36,58];
	var sel_value=[0,0,0,1,"&#177;5%"];
	var i;
	var currentBandCount=4;
	
	$(window).resize(function(){
		canvas2.style.width ='100%';
		canvas2.style.height=canvas2.style.width/4;
		canvas2.width  = canvas2.offsetWidth;
		canvas2.height = canvas2.offsetWidth/4;
		
		if(currentBandCount==4){
			drawFourBand(ctx2,canvas2,sel[1],sel[2],sel[3],sel[4]);
		}
		else{
			drawFiveBand(ctx2,canvas2,sel[0],sel[1],sel[2],sel[3],sel[4]);
		}
	})
	
	for(i=0; i<12; i++){ //drawing the trs
		$("#main_table").append("<tr id='r_"+i+"'></tr>");
	}
	
	var e=0, c, a;
	for(i=0;i<5;i++){ //drawing the tds
		a=e;
		c=0;
		for(e=a; e<a+12;e++){
			if(e<12){
				$("#r_"+c).append("<td id='"+e+"' class='five_band'>"+b[c]+"</td>");
			}
			else if(e<36){
				$("#r_"+c).append("<td id='"+e+"'>"+b[c]+"</td>");
			}
			else if(e<48){
				
				if(mul[c]<1){
					$("#r_"+c).append("<td id='"+e+"'>"+mul[c]+"</td>");
				}
				else if(mul[c]<1000){
					$("#r_"+c).append("<td id='"+e+"'>"+mul[c]+"&#8486;</td>");
				}
				else if(mul[c]<1000000){
					$("#r_"+c).append("<td id='"+e+"'>"+mul[c]/1000+"K&#8486;</td>");
				}
				else{
					$("#r_"+c).append("<td id='"+e+"'>"+mul[c]/1000000+"M&#8486;</td>");
				}
				
			}
			else{
				if(tol[c]!="" && tol[c]!=" "){
					$("#r_"+c).append("<td id='"+e+"'>&#177;"+tol[c]+"</td>");
				}
				else{
					$("#r_"+c).append("<td id='"+e+"'>"+tol[c]+"</td>");
				}
			}
			
			if(e>47){
				$("#r_"+c+" td").css("background-color", "#"+bg[c]);
				if(c==4||c==5||c==9||c==11){
					$("#r_"+c).css("color", "#000000");
				}
			}
			
			c++;
		}
	}
	
	
	for(i=0;i<sel.length;i++){//drawing first inset borders
		$("#"+sel[i]).css("box-shadow", "inset 0px 0px 0px 5px #ffffff");
	}
	
	$(".five_band").toggle();
	calc();
	
	$("td").click(function(){ //editing sel(Array with selected fields); calling drawInsetBorder()
		var id=this.id;
		
		if($("#"+id).html()!=" "){
			
			if(id<12){
				var inArrPos=0;
			}
			else if(id<24){
				var inArrPos=1;
			}
			else if(id<36){
				var inArrPos=2;
			}
			else if(id<48){
				var inArrPos=3;
			}
			else{
				var inArrPos=4;
			}
			
			drawInsetBorder(inArrPos,id);
			sel[inArrPos]=id;
			if(inArrPos!=3){
				sel_value[inArrPos]=$("#"+id).html();
			}
			else{
				sel_value[inArrPos]=mul[id-36];
			}
			calc();
		}
	})
	
	function drawInsetBorder(s, id){ //drawing the inset border for the chosen fields
		$("#"+sel[s]).css("box-shadow", "none");
		
		var b_drawn=0;
		for(i=0; i<5;i++){
			if(id==4+(i*12)||id==5+(i*12)||id==9+(i*12)||id==11+(i*12)){
				$("#"+id).css("box-shadow", "inset 0px 0px 0px 5px #000000");
				b_drawn=1;
			}
		}
		
		if(b_drawn==0){
			$("#"+id).css("box-shadow", "inset 0px 0px 0px 5px #ffffff");
		}
	}
	
	function calc(){
		if(currentBandCount==5){
			var out=parseInt(sel_value[0].toString()+sel_value[1].toString()+sel_value[2].toString())*parseFloat(sel_value[3]); //+" &#8486; "+sel_value[4];
		}
		else{
			var out=parseInt(sel_value[1].toString()+sel_value[2].toString())*parseFloat(sel_value[3]);
		}
		//alert("out: "+parseInt(sel_value[0].toString()+sel_value[1].toString()+sel_value[2].toString())+" * "+parseInt(sel_value[3])+" = "+out);
		if(out<1000){
			out=Math.round(out*100)/100;
			out+=" &#8486; "+sel_value[4];
		}
		else if(out<1000000){
			out/=1000;
			out+=" K&#8486 "+sel_value[4];
		}
		else{
			out/=1000000;
			
			out+=" M&#8486 "+sel_value[4];
		}
		
		draw();
		$("#erg").html(out);
	}
	
	$("#bandSwitch").click(function(){
		$(".five_band").toggle();
		
		if(currentBandCount==5){
			$("#b_2").html("Кольцо 1");
			$("#b_3").html("Кольцо 2");
			$("#erg_div").css("background-color", "#009444");
			
			sel_value=[0,0,0,1,"&#177;5%"];
			var counter=0;
			for(var i=0; i<sel.length; i++){
				drawInsetBorder(i, counter);
				if(counter==36){
					counter+=22;
				}
				else{
					counter+=12;
				}
			}
			sel= [0,12,24,36,58];
			
			drawFourBand(ctx2,canvas2,sel[1],sel[2],sel[3],sel[4]);
			$("#bandSwitchText").html("↔ 4 кольца");
			currentBandCount=4;
		}
		else{
			$("#b_2").html("Кольцо 2");
			$("#b_3").html("Кольцо 3");
			$("#erg_div").css("background-color", "#00a2ff");
			
			sel_value=[0,0,0,1,"&#177;5%"];
			var counter=0;
			for(var i=0; i<sel.length; i++){
				drawInsetBorder(i, counter);
				if(counter==36){
					counter+=22;
				}
				else{
					counter+=12;
				}
			}
			sel= [0,12,24,36,58];
			
			drawFiveBand(ctx2,canvas2,sel[0],sel[1],sel[2],sel[3],sel[4]);
			$("#bandSwitchText").html("↔ 5 колец");
			currentBandCount=5;
		}
		
		calc();
	})
	
	function draw(){
		
		if(currentBandCount==5){
			drawFiveBand(ctx2,canvas2,sel[0],sel[1],sel[2],sel[3],sel[4]);
		}
		else{
			drawFourBand(ctx2,canvas2,sel[1],sel[2],sel[3],sel[4]);
		}
		
	}
})