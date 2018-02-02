const ModuleName = 'frzTable';
const ModuleDefaults =  {
  
};
const ModuleReturns = [];

class Module {
	constructor ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;   
	}


	init () {
			$('.box').on('click',function(){
    		$('td .box').removeClass('active');
    		$('td .box').removeClass('HLgray');
    		var t = $(this).index();
            $('.longbox').each(function(){
            $(this).children('.box:eq(' + t + ')').addClass('HLgray')});
            $(this).addClass('active');
            $(this).siblings().addClass('HLgray');
    		;})

           //-----------------------------------第二個
           $('.secBox').on('click',function(){
        	//--清除原本的特效
        	$('.arrive').find('.plane').removeClass('planeblock'); 
        	$('.sectd1').find('.plane').removeClass('planeblock'); 
    		$('td .secBox').removeClass('active');
    		$('.secgray').removeClass('active');
    		$('.setoffbox').removeClass('active');

    		//--hightlight特效
    		$(this).addClass('active');
    		var s = $(this).index();

            //--飛機 目的地
            $(this).addClass('active');
            $('.arrive').children('.secgray:eq(' + s + ') ').addClass('active'); 
            $('.arrive').children('.arrivebox:eq(' + s + ')').find('.plane').addClass('planeblock'); 
            //--飛機 出發地
            var sa =$(this).parents('.seclongbox').index()-1;
            console.log(sa); 
            $('.sectd1').children('.seclgray:eq(' +sa+ ')').addClass('active');
            $('.sectd1').children('.seclgray:eq(' +sa+ ')').find('.plane').addClass('planeblock');

    		;})
 







		var move = this.option.count.slide;
		var show =this.option.count.show;
        // console.log(this);
        // console.log(this.ele);
        // console.log(this.$ele);

        // console.log(show);
        // console.log(move);
       



        var slide=0;
	    var sliderWidth=90;
	    var slideCount=7;
        var slidershowWdith = 270;
        var width;
        var slidemove = slidershowWdith/show;

        // console.log(slidemove);

        var boxsize = slidershowWdith/show+'px';

        	if (window.matchMedia("(max-width: 376px)").matches){
            this.$ele.find('.box').css('min-width', boxsize);
            this.$ele.find('.gray').css('min-width', boxsize);
        	}
    //-----------------------
	    function goSlider(slide){

	      width=0-slidemove*slide+"px";
           $(".slideTd").css("left", width);
          if(slide<=slideCount-show){
	      $("#dotwrap1 .dot1").removeClass('active');
	      $("#dotwrap1 .dot1").eq(slide).addClass('active');}
	    }
        

           //slide<5
	  this.$ele.find('.goRight').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(slide+move<=slideCount-show){
	        slide=slide+move;
	        goSlider(slide);
	        console.log(slide);
	      }
          else{
            slide=slideCount-show;
            goSlider(slide);
           }
	  }
	    });
       
        this.$ele.find('.goLeft').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(slide-move>=0){
	        slide=slide-move;
	        goSlider(slide);
	      } else{
            slide=0;
            goSlider(slide);
	      }
	     }

	    });


 
/////////

       

        var secslide=0;
	    var secsliderWidth=110;
	    var secslideCount=5;
	    var secslidershowWdith = 220;
        var secwidth;
        var secslidemove = secslidershowWdith/show;

        var secboxsize = secslidershowWdith/show+'px';

        if (window.matchMedia("(max-width: 376px)").matches){
            this.$ele.find('.secgraybox').css('min-width', secboxsize);
        	}

        function secgoSlider(secslide){
          //滑動特效
	      secwidth=0-secslidemove*secslide+"px";
	      $(".secslideTd").css("left", secwidth);
	      //點點特效
	      if(slide<=slideCount-show){
	      $("#dotwrap2 .dot2").removeClass('active');
	      $("#dotwrap2 .dot2").eq(secslide).addClass('active');}
	    }


	  this.$ele.find('.secgoRight').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(secslide+move<=secslideCount-show){
	        secslide=secslide+move;
	        secgoSlider(secslide);
	      }}
	       else{
            secslide=secslide-show;
            goSlider(secslide);
           }
	    });
       
      this.$ele.find('.secgoLeft').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(secslide-move>=0){
	        secslide=secslide-move;
	        secgoSlider(secslide);
	      }else{
            slide=0;
            secgoSlider(secslide);
	      }

	  }
	    });


    	
			return this;
			}


			methods () {
			return this;
			}
        
            






}
export { ModuleName, ModuleDefaults, ModuleReturns, Module };