


$(document).ready(function() {
    $('#getDataButton').click(function() {
        var id = document.getElementById('identifier').value
        console.log(id)
      $.ajax({
        url: 'php/getDayData.php',  
        type: 'GET',
        data: {id:id},
        success: function(data) {
          document.getElementById('search-container').style.display = 'none';
          document.getElementById('days-container').innerHTML = '';
          console.log(data)
          var jsonData = JSON.parse(data);
          jsonData.forEach(element => {
            
            var status = "Aktivní"
            var backgroundClr = 'rgba(34, 34, 46, 0.403)';
            var opacity = 1
            var toDayDate = getCurrentDate()
            if(element['work'] == false) {
              console.log("KOKOT")
              status = "Zrušeno"
              backgroundClr = 'rgba(245, 9, 9, 0.0)';
              opacity = 0.2
            }

            console.log(element['date'] , ' ' , toDayDate)
            if (element['date'] == toDayDate){
              backgroundClr = '#0a8e71';
              opacity = 0.5
            }

            $('#days-container').append(
              `
      

            <div class="day_box" style="background-color: ${backgroundClr}; opacity: ${opacity}" data-atatus="${element['work']}" data-info="${element['text_data']}" onmouseenter="openInfo()" onmouseleave="closeInfo()">
              <div class="date">${element['date']}</div><br>
              <div class="status">${status}</div>
              <div class="index">${element['index']}</div><br>
            </div>
              `
            )
          });
        // $('#result').text('Získaná data: ' + JSON.stringify(jsonData['data']) );
   
        },
        error: function(xhr, status, error) {
          console.error('Chyba při získávání dat: ' + error);
        }
      });
      });
      });
 
      function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');  // Přidání nuly pro jednociferné měsíce
        const day = String(today.getDate()).padStart(2, '0');  // Přidání nuly pro jednociferné dny
      
        return `${year}-${month}-${day}`;
      }
      