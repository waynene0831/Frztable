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
		var move1 = this.option.count.slide;
		var show1 =this.option.count.show;
        console.log(this);
        console.log(this.ele);
        console.log(this.$ele);

        console.log(show1);
        console.log(move1);
       
         
    	$('.box').on('click',function(){
    		$('td .box').removeClass('active');
    		$('td .box').removeClass('HLgray');
    		var t = $(this).index();
            $('.longbox').each(function(){
            $(this).children('.box:eq(' + t + ')').addClass('HLgray')});
            $(this).addClass('active');
            $(this).siblings().addClass('HLgray');
    		;})

        var slide=0;
	    var sliderWidth=90;
	    var slideCount=7;
        var slidershowWdith = 270;
        var width;
        var slidemove = slidershowWdith/show1;

        var boxsize = slidershowWdith/show1+'px';
        	if (window.matchMedia("(max-width: 376px)").matches){
            $('.box').css('min-width', boxsize);
            $('.gray').css('min-width', boxsize)
        	}
    //-----------------------
	    function goSlider(slide){
	    	console.log(slidemove);
	      width=0-slidemove*slide+"px";
           $(".slideTd").css("left", width);

          if(slide<5){
	      $("#dotwrap1 .dot1").removeClass('active');
	      $("#dotwrap1 .dot1").eq(slide).addClass('active');}
	    }
        

           //slide<5
	   $('.goRight').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(slide+move1<=slideCount-show1){
	        slide=slide+move1;
	        goSlider(slide);
	      }
          else{
            slide=slideCount-show1;
            goSlider(slide);
           }
	  }
	    });
       
        $('.goLeft').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		console.log(slide);
	   		if(slide-move1>=0){
	        slide=slide-move1;
	        goSlider(slide);
	      } else{
            slide=0;
            goSlider(slide);
	      }
	     }
	      console.log(slide);
	    });


 


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
 

        var secslide=0;
	    var secsliderWidth=110
	    var secslideCount=5;
	    var secslidershowWdith = 220;
        var secwidth;
        var secslidemove = secslidershowWdith/show1;

        var secboxsize = secslidershowWdith/show1+'px';

        function secgoSlider(secslide){
          //滑動特效
	      secwidth=0-secslidemove*secslide+"px";
	      $(".secslideTd").css("left", secwidth);
	      //點點特效
	      if(slide<4){
	      $("#dotwrap2 .dot2").removeClass('active');
	      $("#dotwrap2 .dot2").eq(secslide).addClass('active');}
	    }


	   $('.secgoRight').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(secslide+move1<secslideCount-show1){
	        secslide=secslide+move1;
	        secgoSlider(secslide);
	      }}
	       else{
            secslide=secslide-show1;
            goSlider(secslide);
           }
	    });
       
       $('.secgoLeft').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(secslide-move1>=0){
	        secslide=secslide-move1;
	        secgoSlider(secslide);
	      }else{
            slide=0;
            goSlider(secslide);
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