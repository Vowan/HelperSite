
$('#fix').affix({
    offset: {
        top: $('#fix').offset().top - $("#topNavBar").height(),
        bottom: $('#footer').outerHeight(true) 
    }
});
var ww = 'aa'
var qqq =(1 && [[2+(false && 3),ww]])|| null;

console.log('qqq '+ qqq);

$(window)
        .on('scroll',
                function () {
                    console.log(
                            $('[data-spy="affix"]').attr("class") +"  "+
                            $('[data-spy="affix"]').css("position")
                            );
                }
                        )

/*
 * 
 
 $('#fixRight').affix({
 offset: {
 top: $('#fixRight').offset().top,
 + $('.application').outerHeight(true) + 40*/
/* }
 });


 
$(window)
        .on('scroll',
                function () {
                    console.log(
                            "most-top-position  "+
                            $(window).scrollTop() + "  " +
                            $(document).height() + "  " +
                            $('[data-spy="affix"]').offset().top + "  " +
                            $('[data-spy="affix"]').data('bs.affix').options.offset.top + "  " +
                            $('#topNavBar').outerHeight()
                            );
                })
         .on('scroll',
                function () {
                    console.log(
                            "most-bottom-position  "+
                            $('[data-spy="affix"]').offset().top + " + " +
                            $('[data-spy="affix"]').outerHeight(true)+" =  "+
                            ($('[data-spy="affix"]').offset().top +$('[data-spy="affix"]').outerHeight(true))+"   "+
                            $(document).height() + " - " +
                            
                            $('[data-spy="affix"]').data('bs.affix').options.offset.bottom+" = " +
                            ($(document).height() - $('[data-spy="affix"]').data('bs.affix').options.offset.bottom)
                            
                            );
                })       

;
*/


