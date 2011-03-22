jQuery.fn.searchBehavior = function() {
    var search = this.find('.search_field');
    var clear = this.find('.clear_search');    
    var submit = this.find('.submit_search');	

    function updateClearSearch() {
        if (search.val().length > 0) {
            clear.show();
        } else {
            clear.hide();
        }
    }
	
    updateClearSearch();

    search.keyup(function(){
        updateClearSearch();
        search.focus();
    });

    search.keypress(function(e){
        if(e.keyCode==13) {        
            clear.hide();			
			alert("You have used the search widget!");
			updateClearSearch();
        }
    });

    clear.click(function(){
        search.val("");
        search.focus();
        updateClearSearch();
    });
    
    submit.click(function(){
        clear.hide();   
		alert("You have used the search widget!");
		updateClearSearch();
    });
	
	search.bind("paste", function() {});
};

  