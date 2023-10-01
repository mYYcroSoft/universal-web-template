


$(document).ready(function() {
    $('#getDataButton').click(function() {
        var id = document.getElementById('id').value
        console.log(id)
      $.ajax({
        url: 'php/getDayData.php',  
        type: 'GET',
        data: {id:id},
        success: function(data) {
    
          var jsonData = JSON.parse(data);
  
         $('#result').text('Získaná data: ' + JSON.stringify(jsonData['data']) );

   
        },
        error: function(xhr, status, error) {
          console.error('Chyba při získávání dat: ' + error);
        }
      });
      });
      });
 