// JavaScript Document
$(document).ready(function(e) {
    console.log("ready!");
	
	$("#unlock").click(function(){
		unlock_app();
		console.log("clicked");
	});
});

function unlock_app(){
	$("#unlock").html('<img src="themes/images/ajax-loader.gif" height="46" width="46" />');
	$('body').pagecontainer('change', '#page_main', {
        transition: 'flip',
        changeHash: false,
        reverse: true,
        showLoadMsg: true
    });
}