var delay1 = 100;
var delay2 = 350;
var delay3 = 400;
var delay4 = 500;
var delay5 = 600;
var delay6 = 633;
var rangpur_bival_zilla_count = 8;
var chittagong_bivag_zilla_count = 11;
var rajshahi_bivag_zilla_count = 8;
var khulna_bivag_zilla_count = 9;
var dhaka_bivag_zilla_count = 13;
var sylhet_bivag_zilla_count = 5;
var barishal_bivag_zilla_count = 7;
var mymensingh_bivag_zilla_count = 4;
var chittagon_sadar_upazilla_count = 14;
var kumilla_upazilla_count = 16;
var coxsbazar_upazilla_count = 8;
var brammhonbaria_upazilla_count = 9;
var feni_upazilla_count = 6;
var chadpur_chittagong_upazilla_count = 8;
var lokkhipur_upazilla_count = 5;
var noakhali_upazilla_count = 9;
var khagrachori_upazilla_count = 8;
var ranggamati_upazilla_count = 10;
var bandorban_upazilla_count = 7;

var from = 0;
var to = 10;

var total_bivag = 8;
var bivag_name = ["চট্টগ্রাম", "রাজশাহী", "খুলনা", "বরিশাল", "সিলেট", "ঢাকা", "রংপুর", "ময়মনসিংহ"];

  var rangpur_bivag = ["দিনাজপুর", "গাইবান্ধা", "কুরিগ্রাম", "লালমনিরহাট", "নিলফামারি", "পঞ্ছগড়", "রংপুর সদর", "ঠাকুরগাওন"];
	var chittagong_bivag = ["চট্টগ্রাম সদর", "কুমিল্লা","কক্সবাজার", "নোয়াখালী", "ব্রাহ্মণবাড়িয়া", "চাঁদপুর", "লক্ষ্মীপুর", "ফেনী", "খাগড়াছড়ি", "রাঙ্গামাটি", "বান্দরবান"];
	var rajshahi_bivag = ['চাঁপাইনবাবগঞ্জ', 'জয়পুরহাট', 'নওগাঁ', 'নাটোর', 'পাবনা', 'বগুড়া', 'রাজশাহী', 'সিরাজগঞ্জ'];
	var khulna_bivag = ['কয়রা', 'ডুমুরিয়া', 'তেরখাদা', 'দাকোপ', 'দিঘলিয়া', 'পাইকগাছা', 'ফুলতলা', 'বটিয়াঘাটা', 'রূপসা'];
	var dhaka_bivag = ['ঢাকা','ফরিদপুর', 'গাজীপুর', 'গোপালগঞ্জ', 'টাঙ্গাইল', 'কিশোরগঞ্জ', 'মাদারীপুর', 'মানিকগঞ্জ', 'মুন্সীগঞ্জ', 'নারায়ণগঞ্জ', 'নরসিংদী', 'রাজবাড়ী', 'শরীয়তপুর'];
	var sylhet_bivag =['ক্রমিকজেলা','হবিগঞ্জ','মৌলভীবাজার','সুনামগঞ্জ','সিলেট'];
	var barishal_bivag =['ক্রমিকজেলা','বরগুনা','বরিশাল','৩ভোলা','ঝালকাঠী','পটুয়াখালী','পিরোজপুর']
	var mymensingh_bivag = ['ময়মনসিংহ', 'জামালপুর', 'ণেত্রকোণা', 'শেরপুর'];

	var rangpur_sadar_zilla = ['রংপুর সদর', 'গঙ্গাচড়া', 'বদরগঞ্জ', 'কাউনিয়া', 'মিঠাপুকুর', 'পীরগঞ্জ,পীরগাছা', 'তারাগঞ্জ'];
	var dinajpur_zilla = ['দিনাজপুর সদর', 'পার্বতীপুর', 'বিরামপুর', 'বীরগঞ্জ', 'বিরল', 'বোচাগঞ্জ', 'চিরিরবন্দর', 'ফুলবাড়ি', 'ঘোড়াঘাট', 'হাকিমপুর', 'কাহারোল', 'খানসামা', 'নবাবগঞ্জ'];
	var nilphamari_zilla = ['ডিমলা', 'ডোমার', 'জলঢাকা', 'কিশোগঞ্জ', 'নীলফামারী সদর', 'সৈয়দপুর'];
	var lalmonirhat_zilla = ['লালমনিরহাট সদর', 'আদিতমারী', 'হাতিবান্ধা', 'কালীগঞ্জ', 'পাটগ্রাম'];
	var thakurgaon_zilla = ['বালিয়াডাঙ্গি', 'হরিপুর', 'পীরগঞ্জ', 'রানীশংকৈল', 'ঠাকুরগাঁও সদর'];
	var kurigram_zilla = ['কুড়িগ্রাম সদর', 'ভুরুঙ্গামারী', 'চর রাজীবপুর', 'উলিপুর', 'চিলমারী', 'ফুলবাড়ী', 'রাজারহাট', 'নাগেশ্বরী', 'রৌমারী'];
	var ponchogor_zilla = ['পঞ্চগড় সদর', 'বোদা', 'দেবীগঞ্জ', 'আটোয়ারী', 'তেঁতুলিয়া'];
	var gaibandha_zilla = ['ফুলছড়ি', 'গাইবান্ধা সদর', 'গোবিন্দগঞ্জ', 'পলাশবাড়ী', 'সাদুল্যাপুর', 'সাঘাটা', 'সুন্দরগঞ্জ'];

	var chittagong_sadar_zilla = ['মীরসরাই', 'সীতাকুণ্ড', 'ফটিকছড়ি', 'রাউজান', 'রাঙ্গুনিয়া', 'হাটহাজারী', 'সাতকানিয়া', 'পটিয়া', 'চন্দনাইশ', 'লোহাগাড়া', 'সন্দ্বীপ', 'বোয়ালখালি', 'আনোয়ারা', 'বাঁশখালী'];
	var coxsbazar_zilla = ['সদর', 'রামু', 'চকরিয়া', 'কুতুবদিয়া', 'পেকুয়া', 'উখিয়া', 'টেকনাফ', 'মহেশখালী'];
	var kumilla_zilla = ['আদর্শ সদর', 'সদর দক্ষিণ', 'বুড়িচং', 'দেবিদ্বার', 'চৌদ্দগ্রাম', 'চান্দিনা', 'মুরাদনগর', 'বরুড়া', 'দাউদকান্দি', 'মনোহরগঞ্জ', 'লাকসাম' ,'নাঙ্গলকোট', 'ব্রাহ্মণপাড়া', 'হোমনা', 'মেঘনা', 'তিতাস'];
	var brammhonbaria_zilla = ['সদর', 'সরাইল', 'আখাউড়া', 'কসবা', 'নাসিরনগর', 'বিজয়নগর', 'আশুগঞ্জ', 'নবীনগর', 'বাঞ্ছারামপুর'];
	var feni_zilla = ['সদর', 'ছাগলনাইয়া', 'দাগনভূইঞা', 'পরশুরাম', 'সোনাগাজী', 'ফুলগাজী'];
	var chadpur_chittagong_zilla = ['সদর', 'মতলব উত্তর', 'মতলব দক্ষিণ', 'ফরিদগঞ্জ', 'হাইমচর', 'শাহরাস্তি', 'কচুয়া', 'হাজীগঞ্জ'];
	var lokkhipur_zilla = ['সদর', 'রায়পুর', 'রামগঞ্জ', 'রামগতি', 'কমলনগর'];
	var noakhali_zilla = ['সদর', 'বেগমগঞ্জ', 'কোম্পানিগঞ্জ', 'চাটখিল', 'হাতিয়া', 'সুবর্ণচর', 'সেনবাগ', 'কবিরহাট', 'সোনাইমুড়ি'];
	var khagrachori_zilla = ['সদর', 'দীঘিনালা', 'রামগড়', 'মানিকছড়ি', 'মহালছড়ি', 'পানছড়ি', 'মাটিরাঙ্গা', 'লক্ষ্মীছড়ি'];
	var ranggamati_zilla = ['সদর', 'কাউখালি', 'নানিয়ারচর', 'লংগদু', 'রাজস্থলি', 'বিলাইছড়ি', 'বরকল', 'বাঘাইছড়ি', 'কাপ্তাই', 'জুরাছড়ি'];
	var bandorban_zilla = ['সদর', 'রুমা', 'থানচি', 'নাইক্ষ্যংছড়ি', 'রোয়াংছড়ি', 'লামা', 'আলীকদম'];

	var rajshahi_sadar_zilla = ['পবা', 'চরঘাট', 'বাঘা', 'পুঠিয়া', 'তনোর', 'মহনপুর', 'দুর্গাপুর', 'বাগমারা', 'গোদাগাড়ী'];
	var nouga_zilla = ['নওগাঁসদর', 'আত্রাই', 'রণীনগর', 'পত্নীতলা', 'সাপাহার', 'পোরশা', 'মান্দা', 'মহাদেবপুর', 'ধামাইরহাট', 'বদলগাছী', 'নিয়ামতপুর'];
	var nator_zilla = ['নাটোরসদর', 'লালপুর', 'বাগাতিপাড়া', 'বড়ইগ্রাম', 'গুরুদাসপুর', 'সিংড়া', 'নলডাঙ্গা'];
	var chapai_zilla = ['চাঁপাইনবাবগঞ্জসদর', 'শিবগঞ্জ', 'ভোলাহাট', 'গোপস্তাপুর', 'নাচোল'];
	var bogura_zilla = ['বগুড়াসদর', 'শাজাহানপুর', 'শেরপুর', 'ধুনট', 'সারিয়াকান্দি', 'গাবতলী', 'সোনাতলা', 'শিবগঞ্জ', 'দুপচাচিয়া', 'কাহালু', 'আদমদীঘি', 'নন্দিগ্রাম'];
	var joypurhat_zilla = ['জয়পুরহাটসদর', 'পাঁচবিবি', 'আক্কেলপুর', 'ক্ষেতলাল', 'কালাই'];
	var pabna_zilla = ['পাবনাসদর', 'সাঁথিয়া', 'সুজানগর', 'বেড়া', 'ঈশ্বরদী', 'ভাঙ্গুড়া', 'ফরিদপুর', 'চাটমোহর', 'আটঘড়িয়া'];
	var shirajgonj_zilla = ['সিরাঞ্জগঞ্জসদর', 'রায়গঞ্জ', 'কাজিপুর', 'তাড়াশ', 'শাহজাদপুর', 'উল্লাপাড়া', 'কামারখন্দ', 'বেলকুচি', 'চৌহালী'];

	var bagerhat_zilla = ['বাগেরহাট সদর','ফকিরহাট','মোললাহাট','চিতলমারী','কচুয়া','মোড়েলগঞ্জ','শরণখোলা','রামপাল','মোংলা'];
	var shatkhira_zilla = ['সাতক্ষীরা সদর','কলারোয়া','তালা','আশাশুনি','দেবহাটা','কালিগঞ্জ','শ্যামনগর'];
	var zoshor_zilla = ['যশোর সদর','বাঘারপাড়া','অভয়নগর','মনিরামপুর','কেশবপুর','ঝিকরগাছা','শার্শা','চৌগাছা'];
	var norail_zilla = ['নড়াইল সদর','লোহাগড়া','কালিয়া'];
	var magura_zilla = ['মাগুরা সদর','মহম্মদপুর','শালিখা','শ্রীপুর'];
	var jhinaidoho_zilla = ['ঝিনাইদহ সদর','শৈলকুপা','হরিণাকুন্ডু','কালীগঞ্জ','কোটচাঁদপুর','মহেশপুর'];
	var kushtia_zilla = ['কুষ্টিয়া সদর','কুমারখালী','খোকসা','মিরপুর','ভেড়ামারা','দৌলতপুর'];
	var chadpur_zilla = ['চুয়াডাঙ্গা সদর','আলমডাঙ্গা','দামুড়হুদা','জীবননগর'];
	var meherpur_zilla = ['মেহেরপুর সদর','গাংনী','মুজিবনগর'];

	var dhaka_sadar_zilla = ['ঢাকা  সদর ', 'কোতোয়ালি ', 'কেরানীগঞ্জ ', 'দোহার ', 'ধামরাই ', 'নবাবগঞ্জ ', 'সাভার'];
	var kishorgonj_zilla = ['কিশোরগঞ্জ  সদর ', 'অষ্টগ্রাম ', 'ইটনা ', 'করিমগঞ্জ ', 'কটিয়াদি ', 'কুলিয়ারচর ', 'তাড়াইল ', 'নিকলী ', 'পাকুন্দিয়া ', 'বাজিতপুর ', 'ভৈরব ', 'মিটামইন ', 'হোসেনপুর'];
	var gopalgonj_zilla = ['গোপালগঞ্জ সদর ', 'মুকসুদপুর ', 'কাশিয়ানী ', 'কোটালীপাড়া ', 'টুঙ্গিপাড়া'];
	var tangail_zilla = ['টাংগাইল সদর ', 'মধুপুর ', 'ধনবাড়ী ', 'গোপালগঞ্জ ', 'ভূঞাপুর ', 'ঘাটাইল ', 'কালিহাতী ', 'নাগরপুর ', 'দেলদুয়ার ', 'মির্জাপুর ', 'বাসাইল ', 'সখিপুর'];
	var norshingdi_zilla = ['নরসিংদী সদর ', 'পলাশ ', 'শিবপুর ', 'বেলাব ', 'মনোহরদী ', 'রায়পুর'];
	var narayongonj = ['নারায়ণগঞ্জ সদর ', 'বন্দর ', 'আড়াইহাজার ', 'রূপগঞ্জ ', 'সোনারগাঁও'];
	var foridpur_zilla = ['ফরিদপুর সদর ', 'বোয়ালমারী ', 'আলফাডাঙা ', 'মধুখালী ', 'ভাঙ্গা ', 'নগরকান্দা ', 'চরভদ্রাসন ', 'সদরপুর ', 'সালথা'];
	var madaripur_zilla = ['মাদারিপুর সদর ', 'শিবচর ', 'কালকিনি ', 'রাজৈর ', 'ডাসার'];
	var manikgonj_zilla = ['মানিকগঞ্জ সদর ', 'ঘিওর ', 'দৌলতপুর ', 'শিবালয় ', 'সাটুরিয়াসিঙ্গাইর ', 'হরিরামপুর'];
	var munshigonj_zilla = ['মুন্সিগঞ্জ সদর ', 'গজারিয়া ', 'টঙ্গিবাড়ী ', 'লৌহজং ', 'শ্রীনগর ', 'সিরাজদিখাঁন'];
	var rajbari_zilla = ['রাজবাড়ী সদর ', 'গোয়ালন্দ ', 'পাংশা ', 'বালিয়াকান্দি ', 'কালুখালী'];
	var shoriotpur_zilla = ['শরিয়তপুর সদর ', 'জাজিরা ', 'গোসাইরহাট ', 'ডামুড্যা ', 'ভেদরগঞ্জ ', 'নড়িয়া'];
	var gajipur_zilla = ['গাজীপুর সদর ', 'কালিয়াকৈর ', 'কালীগঞ্জ ', 'কাপাসিয়া ', 'শ্রীপুর'];

$(function(){

  var rgba_values = ["rgba(0,0,0,0)", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.3", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.7)","rgba(0,0,0,0.8)",
  "rgba(0,0,0.9)", "rgba(0,0,0,1)"];

	setTimeout(function(){
		$(".logo-text").removeClass("hide");
	}, delay1);

	setTimeout(function(){
		$("#slogan-text").removeClass("hide");
	}, delay2);

	setTimeout(function(){
		$("#blood-group").removeClass("hide");
	}, delay3);

	setTimeout(function(){
		$("#search_btn").removeClass("hide");
	}, delay4);

	setTimeout(function(){
		$("#hr_div").removeClass("hide");
		$("#hr_div").addClass("animated fadeIn");
	}, delay5);

	setTimeout(function(){
		$("#option_text").removeClass("hide");
		$("#option_text").addClass("animated fadeIn");
		}, delay6);

		$("#search_btn").click(function(){
		$("#main_page").addClass("animated fadeOut");
		$("#main_page").addClass("hide");
		$("#search_page").addClass("animated fadeIn");
		$("#search_page").removeClass("hide");
    var curr_op = 9;
    setInterval(function(){
      if(curr_op >= 0){
        $("body").css("background", rgba_values[curr_op]);
        curr_op--;
      }
    }, 10);
	});

		for(var current = 0; current<total_bivag; current++)
		{
			var option_value = '<option>' + bivag_name[current] + '</option';
			$("#bivag_select").append(option_value);
		}

		for(var current=0;current<chittagong_bivag_zilla_count;current++)
		{
			$("#zilla_select").append('<option>' + chittagong_bivag[current] + '</option>');
		}

		$(document).on('change', '#bivag_select', function()
		{
			$("#zilla_select").empty();
			switch($("#bivag_select").val())
			{
				case 'চট্টগ্রাম':
				for(var current=0;current<chittagong_bivag_zilla_count;current++)
				{
					$("#zilla_select").append('<option>' + chittagong_bivag[current] + '</option>');
				}
				break;

				case 'রাজশাহী':
				for(var current=0;current<rajshahi_bivag_zilla_count;current++)
				{
					$("#zilla_select").append('<option>' + rajshahi_bivag[current] + '</option>');
				}
				break;

				case 'খুলনা':
				for(var current=0;current<khulna_bivag_zilla_count;current++)
				{
					$("#zilla_select").append('<option>' + khulna_bivag[current] + '</option>');
				}
				break;

				case 'বরিশাল':
				for(var current=0;current<barishal_bivag_zilla_count;current++)
				{
					$("#zilla_select").append('<option>' + barishal_bivag[current] + '</option>');
				}
				break;

				case 'সিলেট':
				for(var current=0;current<sylhet_bivag_zilla_count;current++)
				{
					$("#zilla_select").append('<option>' + sylhet_bivag[current] + '</option>');
				}
				break;

				case 'ঢাকা':
				for(var current=0;current<dhaka_bivag_zilla_count;current++)
				{
					$("#zilla_select").append('<option>' + dhaka_bivag[current] + '</option>');
				}
				break;

				case 'রংপুর':
				for(var current=0;current<rangpur_bival_zilla_count;current++)
				{
					$("#zilla_select").append('<option>' + rangpur_bivag[current] + '</option>');
				}
				break;

				case 'ময়মনসিংহ':
				for(var current=0;current<mymensingh_bivag_zilla_count;current++)
				{
					$("#zilla_select").append('<option>' + mymensingh_bivag[current] + '</option>');
				}
				break;
			}
			$(document).on('change', '#zilla_select', function()
			{
				$("#upazilla_select").empty();
				switch($("#zilla_select").val())
				{
					case 'চট্টগ্রাম সদর':
					for(var current=0;current<chittagon_sadar_upazilla_count;current++)
				    {
					$("#upazilla_select").append('<option>' + chittagong_sadar_zilla[current] + '</option>');
				    }
				    break;

				    case 'কুমিল্লা':
					for(var current=0;current<kumilla_upazilla_count;current++)
				    {
					$("#upazilla_select").append('<option>' + kumilla_zilla[current] + '</option>');
				    }
				    break;

				    case 'কক্সবাজার':
					for(var current=0;current<coxsbazar_upazilla_count;current++)
				    {
					$("#upazilla_select").append('<option>' + coxsbazar_zilla[current] + '</option>');
				    }
				    break;

				    case 'নোয়াখালী':
					for(var current=0;current<noakhali_upazilla_count;current++)
				    {
					$("#upazilla_select").append('<option>' + noakhali_zilla[current] + '</option>');
				    }
				    break;

				    case 'ব্রাহ্মণবাড়িয়া':
					for(var current=0;current<brammhonbaria_upazilla_count;current++)
				    {
					$("#upazilla_select").append('<option>' + brammhonbaria_zilla[current] + '</option>');
				    }
				    break;

				    case 'চাঁদপুর':
					for(var current=0;current<chadpur_chittagong_upazilla_count;current++)
				    {
					$("#upazilla_select").append('<option>' + chadpur_chittagong_zilla[current] + '</option>');
				    }
				    break;

				    case 'লক্ষ্মীপুর':
					for(var current=0;current<lokkhipur_upazilla_count;current++)
				    {
					$("#upazilla_select").append('<option>' + lokkhipur_zilla[current] + '</option>');
				    }
				    break;

				    case 'ফেনী':
					for(var current=0;current<feni_upazilla_count;current++)
				    {
					$("#upazilla_select").append('<option>' + feni_zilla[current] + '</option>');
				    }
				    break;

				    case 'খাগড়াছড়ি':
					for(var current=0;current<khagrachori_upazilla_count;current++)
				    {
					$("#upazilla_select").append('<option>' + khagrachori_zilla[current] + '</option>');
				    }
				    break;

				    case 'রাঙ্গামাটি':
					for(var current=0;current<ranggamati_upazilla_count;current++)
				    {
					$("#upazilla_select").append('<option>' + ranggamati_zilla[current] + '</option>');
				    }
				    break;

				    case 'বান্দরবান':
					for(var current=0;current<bandorban_upazilla_count;current++)
				    {
					$("#upazilla_select").append('<option>' + bandorban_zilla[current] + '</option>');
				    }
				    break;
				}
			});
	    });
   $("#find_btn").click(function(){
   	$("#search_page").removeClass("fadeIn")
   	$("#search_page").addClass("fadeOut")
   	setTimeout(function(){
   		$("#search_page").addClass("hide")
   	},555);
   	setTimeout(function(){
   		$("#loading_page").removeClass("hide")
   		$("#loading_page").addClass("animated fadeIn")
   	},566);

   	setTimeout(function(){
   		var data_send = {
   			bloodgroup: $("#blood-group").val(),
   			zilla: $("#zilla_select").val(),
   			upazilla: $("#upazilla_select").val(),
   			bivag: $("#bivag_select").val(),
				from: from,
				to: to
   		}

   		$.ajax({
   			type: "POST",
   			url: "search.php",
   			data: data_send,

   			success: function(data){
   				$("#loading_page").removeClass("fadeIn");
   				$("#loading_page").addClass("fadeOut hide");
   				$("#result_page").addClass("animated FadeIn");
   				$("#result_page").removeClass("hide");
   				$("#result_here").html(data);
					if((to)>=$("#count").text()) $("#next_btn").addClass("disabled");
   			}
   		});

   	},600);
   });
   $("#bivag_select").val("চট্টগ্রাম");
   $("#zilla_select").val("চট্টগ্রাম সদর");
   $("#upazilla_select").val("মীরসরাই");

	 $("#next_btn").click(function(){
		 if(!$("#next_btn").hasClass("disabled")){
		 from+=10;
		 to+=10;

		 var data_send = {
			 bloodgroup: $("#blood-group").val(),
			 zilla: $("#zilla_select").val(),
			 upazilla: $("#upazilla_select").val(),
			 bivag: $("#bivag_select").val(),
		   from: from,
		   to: to
		 }

		 $.ajax({
			 type: "POST",
			 url: "search.php",
			 data: data_send,

			 success: function(data){
				 $("#result_here").html(data);
				 $("#previous_btn").removeClass("disabled");
				 if((to)>=$("#count").text()) $("#next_btn").addClass("disabled");
			 }
		 });
		 }
	 })

	 $("#previous_btn").click(function(){
		 if(!$("#previous_btn").hasClass("disabled")){
		 if(from<=0) $("#previous_btn").addClass("disabled");
		 from-=10;
		 to-=10;
		 var data_send = {
			 bloodgroup: $("#blood-group").val(),
			 zilla: $("#zilla_select").val(),
			 upazilla: $("#upazilla_select").val(),
			 bivag: $("#bivag_select").val(),
			 from: from,
			 to: to
		 }

		 $.ajax({
			 type: "POST",
			 url: "search.php",
			 data: data_send,

			 success: function(data){
				 $("#result_here").html(data);
				 if((to)>=$("#count").text()) $("#next_btn").addClass("disabled");
				 else $("#next_btn").removeClass("disabled");
			 }
		 });
		 if(from<=0) $("#previous_btn").addClass("disabled");
	 }})
});
