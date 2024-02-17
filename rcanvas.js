
	var canvas2 = document.getElementById("myCanvas2");
	var ctx2 = canvas2.getContext("2d");
	
	canvas2.style.width ='100%';
	canvas2.style.height=canvas2.style.width/4;
	canvas2.width  = canvas2.offsetWidth;
	canvas2.height = canvas2.offsetWidth/4;
	
	
	function drawFourBand(ctx,canvas,b1,b2,mul,tol){
		
		ctx.fillStyle="grey";
		ctx.fillRect(0,(canvas.height/2)-(canvas.height/20),canvas.width/4,canvas.height/20);
		ctx.fillRect(canvas.width-(canvas.width/4),(canvas.height/2)-(canvas.height/20),canvas.width/4,canvas.height/20);
		
		ctx.fillStyle="#43aaff";
		ctx.fillRect(canvas.width/4,canvas.height/4,canvas.width/2, canvas.height/2);
		
		ctx.fillStyle=$("#"+b1).css("background-color");
		ctx.fillRect(canvas.width/4+canvas.width*0.04375,canvas.height/4, canvas.width*0.0375, canvas.height/2);
		
		ctx.fillStyle=$("#"+b2).css("background-color");
		ctx.fillRect(canvas.width/4+canvas.width*0.04375+canvas.width*0.0375+canvas.width*0.025,canvas.height/4, canvas.width*0.0375, canvas.height/2);
		
		ctx.fillStyle=$("#"+mul).css("background-color");
		ctx.fillRect(canvas.width/4+canvas.width*0.04375+2*canvas.width*0.0375+2*canvas.width*0.025,canvas.height/4, canvas.width*0.0375, canvas.height/2);
		
		
		ctx.fillStyle=$("#"+tol).css("background-color");
		ctx.fillRect(2*canvas.width/4+canvas.width*0.04375+2*canvas.width*0.0375+2*canvas.width*0.025,canvas.height/4, canvas.width*0.0375, canvas.height/2);
		
	}
	
	function drawFiveBand(ctx,canvas,b1,b2,b3,mul,tol){
		ctx.fillStyle="grey";
		ctx.fillRect(0,(canvas.height/2)-(canvas.height/20),canvas.width/4,canvas.height/20);
		ctx.fillRect(canvas.width-(canvas.width/4),(canvas.height/2)-(canvas.height/20),canvas.width/4,canvas.height/20);
		
		ctx.fillStyle="#c0e8ff";
		ctx.fillRect(canvas.width/4,canvas.height/4,canvas.width/2, canvas.height/2);
		
		ctx.fillStyle=$("#"+b1).css("background-color");
		ctx.fillRect(canvas.width/4+canvas.width*0.04375,canvas.height/4, canvas.width*0.0375, canvas.height/2);
		
		ctx.fillStyle=$("#"+b2).css("background-color");
		ctx.fillRect(canvas.width/4+canvas.width*0.04375+canvas.width*0.0375+canvas.width*0.025,canvas.height/4, canvas.width*0.0375, canvas.height/2);
		
		ctx.fillStyle=$("#"+b3).css("background-color");
		ctx.fillRect(canvas.width/4+canvas.width*0.04375+2*canvas.width*0.0375+2*canvas.width*0.025,canvas.height/4, canvas.width*0.0375, canvas.height/2);
		
		ctx.fillStyle=$("#"+mul).css("background-color");
		ctx.fillRect(canvas.width/4+canvas.width*0.04375+3*canvas.width*0.0375+3*canvas.width*0.025,canvas.height/4, canvas.width*0.0375, canvas.height/2);
		
		ctx.fillStyle=$("#"+tol).css("background-color");
		ctx.fillRect(2*canvas.width/4+canvas.width*0.04375+2*canvas.width*0.0375+2*canvas.width*0.025,canvas.height/4, canvas.width*0.0375, canvas.height/2);
	}
	