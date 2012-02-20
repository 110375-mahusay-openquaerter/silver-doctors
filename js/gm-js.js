// JavaScript Document
jQuery(document).ready(function($){
	var login_info = $("#trans-blocker").html();
	$("#trans-blocker").remove();
	
	/* to login */
	$(".logreg").click(function(){
			if($(this).attr("id")=='login'){
				$('body').append('<div id="trans-blocker"></div>');
				$("#trans-blocker").html(login_info);
				$("#login-div").fadeIn('slow');
				x();
			}
	});
	function x(){
		$("#close-login a").click(function(){
				$("#login-div").fadeOut('slow',function(){
														$("#trans-blocker").remove();	
															});		
				return false;
		});
	}
	
	/* top comment */
	
	$("#day a").click(
	function(){
		if($(this).parent().hasClass("current-t")){
			return false;
		}
		
		$("#top-content").css('position','relative');
		$("#top-content").append('<div id="loader-block"></div><div id="loader1"></div>');
		
		setTimeout(function(){
					$("#top-content").slideToggle('slow',
												  function(){
													$("#week").removeClass("current-t");
													$("#day a").parent().addClass("current-t");
													$("#top-content").css('display','none');
													$("#top-content").css('position','inherit');
													$("#top-content").html('<ul><li>Post of top day 1</li><li>Post of top day 1</li><li>Post of top day 1</li><li>Post of top day 1</li><li>Post of top day 1</li><li>Post of top day 1</li></ul>');
													
													$("#top-content").slideToggle('slow');
												  });
							},1000);
		return false
	});
	
	$("#week a").click(
	function(){
		if($(this).parent().hasClass("current-t")){
			return false;
		}
		
		$("#top-content").css('position','relative');
		$("#top-content").append('<div id="loader-block"></div><div id="loader1"></div>');
		
		setTimeout(function(){
					$("#top-content").slideToggle('slow',
												  function(){
													  	$("#day").removeClass("current-t");
														$("#week a").parent().addClass("current-t");
														$("#top-content").css('display','none');
														$("#top-content").css('position','inherit');
														$("#top-content").html('<ul><li>Post of top week 1</li><li>Post of top week 1</li><li>Post of top week 1</li></ul>');
														
														$("#top-content").slideToggle('slow');
													});
							},1000);
		return false;
	});
	
	/* for kitco */
	$("#kitco-nav a").click(
	function(){
		var cckit = $(this).attr('href');
		var ckit = $("#kitco-nav .c-kitco a").attr('href');
		$("."+ckit).fadeOut('slow',
							function(){
								$("#kitco-"+cckit).addClass("c-kitco");
								$("#kitco-"+ckit).removeClass("c-kitco");
								$("."+ckit).removeClass('c-kitco-img');
								$("."+cckit).fadeIn('slow',
													function(){
														$("#"+cckit).addClass('c-kitco-img');
													});
							});
		return false;
	});
	
	/* sidebar + */
	$(".plus-sign a").click(
							function(){
								var alink = this;
								$(this).parent().parent().find('div.img-wrap').slideToggle('slow',
																						   function(){
																							   if($(alink).hasClass("minus-img")){
																									$(alink).removeClass("minus-img");
																									$(alink).addClass("plus-img");
																							   }
																								else{
																									$(alink).removeClass("plus-img");
																									$(alink).addClass("minus-img");
																								}
																						   });
								
								return false;
							});
	
	/* coin click */
	$(".coin-like").click(
						  function(){
							 var ccoin = this;
							 $(this).html('<img src="images/coin.gif" />'); 
							 setTimeout(function(){$(ccoin).html('<img src="images/coin.png" />')},2000);
						  });
	
	/* click-edit profile */
	$("#edit_profile").click(
							 function(){
									if ( $(".ui_input").attr("disabled") ){
										$(".ui_input").removeAttr("disabled");
										$(".ui_input").addClass("with_border");
										$(this).text("cancel");
									}
									else{
										$(".ui_input").attr("disabled","disabled");
										$(".ui_input").removeClass("with_border");
										$(this).text("change");
									}
								return false;
							 });
	
	/* click-profile nav */
	$("#p-n-c ul li a").click(
							  function(){
								  var obj = this;
								  if( $(".p-current a").attr('class') == $(this).attr('class') ){
										return false;
								  }
								 $("#" + $(".p-current a").attr('class')).fadeOut('slow',
																				  function(){
																					  $(".p-current").removeClass("p-current");
																					  $(obj).parent().addClass("p-current");
																					  $("#"+ $(".p-current a").attr('class')).fadeIn('slow',
																																	 function(){
																																		if( $(".p-current a").attr('class') == 'mailing'){
																																			$("#mail-inbox").show(); 
																																		}
																																		else if( $(".p-current a").attr('class') != 'mailing'){
																																			$("#mail-create").hide();
																																			$("#mail-sent").hide();
																																			$("#mail-draft").hide();
																																			$(".m-current").removeClass("m-current");
																																			$("#ie1").addClass("m-current");
																																		}
																																	 });
																				  });
								 
								 return false;
							  });
	
	/* click-mail nav */
	$("#mail_nav li a").click(
								 function(){
									 var obj = this;
									 $("#" + $(".m-current a").attr('class')).fadeOut('slow',
																					  function(){
																						  $(".m-current").removeClass("m-current");
																						  $(obj).parent().addClass("m-current");
																						  $("#" + $(".m-current a").attr('class')).fadeIn('slow');
																					  });
									 return false;
								 });
	/* add user to create mail */
	
	var getUsers,stt;
	$(".em-add").click(
					   function(){
						   displayBlocker();
						   if ( !getUsers ) {
							   switch ( $(this).attr('id')){
									case 'a-to' :
										stt='to';
										break;
									case 'a-cc' :
										stt='cc';
										break;
							   }
						   }
						  // $("#login-f").html(getUsers);
						   $("#login-div").fadeIn('slow');
						   x();
						   ccn();
					   });
	
	function ccn(){
		$(".u-list").click(
							function(){
								if ( $(this).find(".chk-u-l").is(':checked') ){
									$(this).find(".chk-u-l").attr("checked",false);
									$(this).css("background","transparent");
								}
								else{
									$(this).find(".chk-u-l").attr("checked",true);
									$(this).css("background","#ccc");
								}
							});
		
	$("#u-l-cancel,#u-l-done").click(
						 function(){
							 if($(this).attr('id')=="u-l-done"){
								 	var ulist='',ctr=1;
									$("#trans-blocker .u-list").each(
																function(){
																	if( $(this).find(".chk-u-l").is(':checked') ){
																		if( ctr > 1 ){
																			ulist +=';';	
																		}
																		ulist += $(this).find(".chk-u-l").val();
																		ctr ++;
																	}
																});
									if( stt == 'to' ){
										if( $("#c-to").val()){
											ulist = $("#c-to").val() + ';' + ulist;	
										}
										$("#c-to").val(ulist);	
									}
									else if(stt == 'cc'){
										if( $("#c-cc").val() ){
											ulist = $("#c-cc").val() + ';' + ulist;	
										}
										$("#c-cc").val(ulist);	
									}
							 }
							 $("#login-div").fadeOut('slow',function(){
														$("#trans-blocker").remove();	
															});
						 });
	}
	function displayBlocker(){
		$('body').append('<div id="trans-blocker"></div>');
		$("#trans-blocker").html(login_info);	
	}
});
