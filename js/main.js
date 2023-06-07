
$(document).ready(function(){
    
        var current = location.pathname;
        $('#navbarNav ul li a').each(function() {
            var $this = $(this); 
            // we check comparison between current page and attribute redirection.
            
            if ($this.attr('href') === current) {
               $this.addClass('active border-left-0 border-top-0 border-right-0 border-bottom border-3 border-white'); 
            }
        });
 
});
   