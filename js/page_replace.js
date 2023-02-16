$(document).ready ( function(){

	if (window.location.href.includes('?game'))
    {
        $("body").load("/app/index.html")
    }
    
});