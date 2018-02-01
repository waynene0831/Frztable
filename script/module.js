const ModuleName = 'frzTable';
const ModuleDefaults =  {
	count: {
        // M版時每次點擊往前往後移動幾格儲存格
        slide: 1, // [number] 
        // M版時一個畫面show幾格儲存格
        show: 3 // [number] 
    },
    // 設定花多久時間移動完成
    speed: .3, // [number] 
    // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
    whenClick: function($element) {
        // console.log($element)
    }

};
const ModuleReturns = [];

class Module {
	constructor ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		 
	}


	init () {
		console.log(this.option.count.slide);
		var move1 = this.option.count.slide;
		var show1 =this.option.count.show;
		console.log(move1);
		$("#dotwrap1 .dot1").eq(0).addClass('active');
		$("#dotwrap2 .dot2").eq(0).addClass('active');

         
    	$('.box').on('click',function(){
    		$('td .box').removeClass('active');
    		$('td .box').removeClass('HLgray');
    		var t = $(this).index();
            console.log(t); 
            $('.longbox').each(function(){
            $(this).children('.box:eq(' + t + ')').addClass('HLgray')});
            $(this).addClass('active');
            $(this).siblings().addClass('HLgray');
    		;})

        var slide=0;
	    var sliderWidth=90;
	    var slideCount=7;
        var width;
	     //設定一個變數吃去this.option.count.slide
	     //設定this.option.count.show  
	     //append li 決定可右滑的數量 加dot
	     //show
	     //270px/show
	     //sliderWidth*slide

    //-----------------------

	    function goSlider(slide){
	      width=0-sliderWidth*slide*move1+"px";
	      console.log(width);
	      $(".slideTd").css("left", width);

          if(slide<5){
	      $("#dotwrap1 .dot1").removeClass('active');
	      $("#dotwrap1 .dot1").eq(slide).addClass('active');}
	      //slide判斷不超過slidecount-slideshow
	    }


	   $('.goRight').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(slide+1<slideCount-2){
	        slide=slide+1;
	        goSlider(slide);
	        console.log(slide);
	      }}
	    });
       
       	   $('.goLeft').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(slide-1>=0){
	        slide=slide-1;
	        goSlider(slide);
	      }}
	    });
        //-----------------------------------第二個
        $('.secBox').on('click',function(){
    		$('td .secBox').removeClass('active');
    		$('.secgray').removeClass('hlorange');
    		$('.setoffbox').removeClass('hlorange');
    		$(this).addClass('active');
    		var s = $(this).index();
            // console.log(s); 
            $(this).addClass('active');
            $('.arrive').children('.secgray:eq(' + s + ')').addClass('hlorange');    

            var sa =$(this).parents('.seclongbox').index()-1;
            console.log(sa); 
            $('.sectd1').children('.seclgray:eq(' +sa+ ')').addClass('hlorange');
            
    		;})
         
        var secslide=0;
	    var secsliderWidth=110;
	    var secslideCount=5;
        var secwidth;
        function secgoSlider(secslide){
	      secwidth=0-secsliderWidth*secslide+"px";
	      $(".secslideTd").css("left", secwidth);
	      if(slide<4){
	      $("#dotwrap2 .dot2").removeClass('active');
	      $("#dotwrap2 .dot2").eq(secslide).addClass('active');}
	    }


	   $('.secgoRight').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(secslide+1<secslideCount-1){
	        secslide=secslide+1;
	        secgoSlider(secslide);
	        console.log(secslide);
	      }}
	    });
       
       	   $('.secgoLeft').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(secslide-1>=0){
	        secslide=secslide-1;
	        secgoSlider(secslide);
	      }}
	    });
        
    

    	
			return this;
			}


			methods () {
			return this;
			}
        
     






}
export { ModuleName, ModuleDefaults, ModuleReturns, Module };