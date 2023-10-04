


$(document).ready(function() {
    $('#getDataButton').click(function() {
        var id = document.getElementById('identifier').value
        console.log(id)
        loading(true)
      $.ajax({
        url: 'php/getDayData.php',  
        type: 'GET',
        data: {id:id},
        success: function(data) {
        
          document.getElementById('search-container').style.display = 'none';
          document.getElementById('days-container').innerHTML = '';
          console.log(data)
          var jsonData = JSON.parse(data);
          loading(false)
          jsonData.forEach(element => {
            
            var status = "Aktivní"
            var backgroundClr = 'rgba(34, 34, 46, 0.403)';
            var toDayDate = getCurrentDate()
            var opatcity = 1
            if(element['work'] == false) {
              console.log("KOKOT")
              status = "Zrušeno"
              opatcity = 0.2;
              backgroundClr = 'rgba(132, 43, 43, 0)';
            }

            console.log(element['date'] , ' ' , toDayDate)
            if (element['date'] == toDayDate){
              backgroundClr = '#0a8e71';
              opatcity = 0.5;
            }

            $('#days-container').append(
              `
            <div class="day_box" style="background-color: ${backgroundClr}; opacity: ${opatcity}" data-atatus="${element['work']}" data-info="${element['text_data']}" onmouseenter="openInfo(this)" onmouseleave="closeInfo()">
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
      



      function loading(stat){
        const pageLoad = document.getElementById('pageLoad')



        if(stat == true ){
          pageLoad.style.display = 'block'
        }
        

        if(stat == false ){
            
                  
        setTimeout(function () {
          pageLoad.style.opacity = 0;
          setTimeout(function () {
            pageLoad.style.opacity = 0;
            pageLoad.style.display = 'none'
            pageLoad.style.zIndex = '0'
          }, 700);
        }, 300); 
                }
       
       
 

      }