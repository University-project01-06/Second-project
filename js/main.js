$(function(){
    $(document).ready(function(){
		$("#header").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
	});
	$(".up-angel").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 2500);
    });
    $(window).scroll(function() {
	    $('.block_first').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeftBig");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('.block_third').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRightBig");
	        }
        });
        $(window).scroll(function() {
            $('.personality__heading_first').each(function(){
                var imagePos = $(this).offset().top;
    
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInLeftBig");
                }
            });
        });
        $(window).scroll(function() {
            $('.personality__heading_second').each(function(){
                var imagePos = $(this).offset().top;
    
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInRightBig");
                }
            });
        });
        $(window).scroll(function() {
            $('.personality__heading_third').each(function(){
                var imagePos = $(this).offset().top;
    
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInLeftBig");
                }
            });
        });
    });
});

var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})

var br = document.createElement("br")
let  arrLang = {
    'en': {
      'about Magic': 'About Magic',
      'personality': 'Personality',
      'my works': 'My works',
      'contacts': 'Contacts',
      "illusionist":"Illusionist (magician) - an artist demonstrating tricks based on certain physical and psychological phenomena",
      "qualities" : "Personal qualities: - Power - Agility - Intelligence - Savvy but at the same time, the secret of the 'miracles' seen by the audience must certainly remain unsolved",
      "important" : "The most important task of the illusionist is to captivate the audience, and the focus to interest and give aesthetic pleasure",
        "art":"Magic is the art of getting people excited about effects that are actually not possible.  To make you feel like magic is real.  Each individual decides for himself what magic is exactly.  For some, it's a trick for others, the family ... what is magic to me?  I still don't know that today.",
        "book":"Book me for your event!",
        "book second": "Book now",
        "right":"2020 / All rights reserved ",
        "policy":"Privacy Policy",
        "produce":"This site was produced by"
    },
    'de': {
        'about Magic': 'Über Magie',
        'personality': 'Persönlichkeit',
        'my works': 'Meine Arbeiten',
        'contacts': 'Kontakte',
        "illusionist":"Illusionist (Zauberer) - ein Künstler, der Tricks demonstriert, die auf bestimmten physischen und psychischen Phänomenen basieren",
        "qualities" : "Persönliche Qualitäten: - Leistung - Beweglichkeit - Intelligenz - Kapieren Gleichzeitig muss das Geheimnis der 'Wunder', die das Publikum sieht, sicherlich ungelöst bleiben",
        "important" : "Die wichtigste Aufgabe des Illusionisten ist es, das Publikum zu fesseln und den Fokus auf Interesse und ästhetisches Vergnügen zu legen",
        "book":"Buchen Sie mich für Ihre Veranstaltung!",
        "art":"Zauberei ist eine Kunst, Menschen von Effekten zu begeistern, die eigentlich nicht möglich sind. Das Gefühl zu geben, das Magie echt ist. Was Magie genau ist, entscheidet jeder einzelne für sich. Für manche ist es ein Zubertrick für andere, die Familie... was Magie für mich ist? Das weiss ich bis heute noch nicht.",
        "book second": "Jetzt buchen",
        "message":"Nachricht",
        "right":"2020 / Alle Rechte vorbehalten ",
        "policy":"Datenschutz-Bestimmungen",
        "produce":"Diese Seite wurde erstellt von"
    }
  }
  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });
