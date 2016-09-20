$(".animate-and-do-something").velocity({
    
    scale: 1.5
}, 
{	
	duration: 500,
    loop: 2,
    // loop: true,
    /* Wait 100ms before alternating back. */
    delay: 100,
    complete: function(elements) { 
    	console.log(elements); 
    }
});