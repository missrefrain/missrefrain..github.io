
$(document).ready(function(){
    
        var current = location.pathname;
        $('#navbarNav ul li a').each(function() {
            var $this = $(this); 
    console.log($this);
            // we check comparison between current page and attribute redirection.
            
            if ($this.attr('href') === current) {
               $this.addClass('active'); 
            }
        });
 

});
   