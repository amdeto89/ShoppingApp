$(document).ready(function () {
	// use enter to add list items
	$('#text').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#addItem').click();
			$('input#text').val("");
		};
	});	
    var addItem = $('#addItem');
    addItem.click(function () {
        var toAdd = $('input#text').val();
        $('#shoppingList').append('<li><input type="checkbox"/>' + toAdd + '</li>');
    });

   $("#shoppingList").on('click','input:checkbox', function () {
            var $this = $(this);
            if (this.checked) {
                $this.parent().addClass('completed');
            } else {
                $this.parent().removeClass('completed');
            }
        });
    $('#RemoveItem').click(function() {
    	$('ul').empty();
    
    });

});


