/*eslint-env jquery*/

jQuery(document).ready(function($)
{
    var mainTl = new TimelineMax(),
        $svg = $('#scene svg');



    function clearStage() {
        var clearTl = new TimelineMax();

        //clearTl
            

        return clearTl;
    }

    function init() {
        mainTl.add(clearStage()); 
    }
    init(); 

});
