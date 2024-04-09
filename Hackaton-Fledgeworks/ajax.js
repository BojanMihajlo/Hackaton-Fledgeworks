$.ajax( {
    url: "https://api.whatdoestrumpthink.com/api/v1/quotes/random",
    success:function(data) {
     $('#randomQuotes').append( '"' +data.message+ '"');
    }, 
    error: function(err) {
     console.log(err)
    }
   })

   $("#scrollBtn").click(function() {
    $(window).scrollTop(0)
   })
 
 // ...fetch with ajax and display random quotes and scroll to top button...

//  ... Zabelska -"Apito koe sto ni go dadovte vie ne mi funcionirase t.e mi trazese header a na drugi 
// apinja so istiot kod mi rabotese zatoa najdov drugo api za qvoti i gi zimam i prikazuvam na istiot nacin"...

    
      