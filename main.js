(function(){
    function recursion() 
	{   
        const child = document.getElementById('deepChild');  
        function drawGreen(el) {el.style.border = '4px solid green';}
		function drawColor(el) {
		var x = Math.floor(Math.random() * 256);
		var y = Math.floor(Math.random() * 256);
		var z = Math.floor(Math.random() * 256);
		var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  		el.style.background = bgColor;
		}
        function catchParent(el) 
		{   
            drawGreen(el);
            const parent = el.parentNode;
            const id = parent.getAttribute('id');
			document.getElementById("blockName").innerHTML = parent.tagName;
			drawColor(document.getElementById("blockName"));
			 if(!id) 
			{
                setTimeout(() => 
				{
                    drawGreen(parent);
                    catchParent(parent)
                }, 10);        
            } else 
			{
                drawGreen(parent)
            };
        }
		catchParent(child); 
    }
    recursion();
}());  
