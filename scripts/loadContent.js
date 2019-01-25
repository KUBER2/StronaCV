console.log("załadowałem skrypt");
$('#offer').click(function(){loadContent("offer")});
$('#logo').click(function(){loadContent("homePage")});
$('#contact').click(function(){loadContent("contact")});


var contentDiv = $('#contentDiv');
var contentHeader = $('#contentHeader');
var contentParagraph = $('#contentParagraph');

function loadContent(contentName){
			
  switch(contentName){
    case "homePage":
      contentHeader.text("Witaj na moje stronie");
      contentParagraph.text("Ta witryna powstała z myślą o reklamie mojej osoby. Znajdziejsz na niej informacje o mojej osobie, doświadczeniu zawodowym, materiałach pomocniczch wykanany jako nauczyciel oraz wiele innych.	Śmiało przegladaj zawarość, jeżeli masz jakieś pytania to pisz śmiało mejla! Miłej zabawy.");
      break;
    
    case "offer":
      contentHeader.text("Oferuję:");
      contentParagraph.text("Swoje umiejętności, logiczne myslenie, umiejętność adatacji i zedterminowanie. Oczekuje uczciwego i transparentego trakotowania. Więcej konkretów znajdziesz w zakładce Kim jestem");
      break;
    
    case "contact":
      contentHeader.text("Kontakt:");
      contentParagraph.text("jakub.rola@gmail.com");
      break;

    default:
      loadContent('homePage');
      break;
  }   
}


