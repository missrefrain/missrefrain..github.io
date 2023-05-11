//refresh page on browser resize
$(window).bind('resize', function(e)
{
console.log('window resized..');
this.location.reload(false); /* false to get page from cache */
/* true to fetch page from server */
});