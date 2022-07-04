$(document).ready(function(){

    $("li").hover(function(){
      $(this).find(".sub-menu").show();
      }, function(){
      $(this).find(".sub-menu").fadeOut("fast");
    });

    $(".card").hover(function(){
      $(this).find(".card-img-overlay").show();
      }, function(){
      $(this).find(".card-img-overlay").fadeOut("fast");
    });

    $.getJSON("https://www.tridenia.com/maquetacio/list.php", function(result){

      $.each(result.items, function() {
        $(".jsontri").append(
          
          "<div class='col-sm-12 col-md my-4'>"+ 

          "<h3>"+ this.title +"</h3>"+
          "<i>"+ this.icon +"</i>"+
          "<p>"+ this.text +"</p>"+
          
          "</div>"

          );

        console.log(this.title);

      });
       

    });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 30) {
        $(".navbar").css("background" , "black");
      }
  
      else{
        $(".navbar").css("background" , "rgba(0, 0, 0, 0)");  	
      }
    })


  });