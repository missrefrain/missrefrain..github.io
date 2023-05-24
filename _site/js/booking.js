$(document).ready(function(){

    document.getElementById('Total').value = "";

    function uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }
      
      console.log(uuidv4());

    const form = document.getElementById("booking");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        result.innerHTML = "Please wait...";
      
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        })
          .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
              result.innerHTML = json.message;
              result.classList.remove("text-gray-500");
              result.classList.add("text-green-500");
            } else {
              console.log(response);
              result.innerHTML = json.message;
              result.classList.remove("text-gray-500");
              result.classList.add("text-red-500");
            }
          })
          .catch((error) => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
          })
          .then(function () {
            form.reset();
            setTimeout(() => {
              result.style.display = "none";
            }, 5000);
          });
      });

    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        removeItemButton: true,
        maxItemCount:20,
        searchResultLimit:20,
        renderChoiceLimit:20
    });


 



    function calculate() {
        var selectElement = document.getElementById('choices-multiple-remove-button');
        let totalInput = document.getElementById('Total');
        totalInput.value = "£0.00";

        $(".services-input").on('change', function() {

            console.log("xxxxxxxxxxxxxxxxxxxxxxxx " + selectElement.childElementCount);
            let childArr = _.range(selectElement.childElementCount);

            const select = document.querySelector('#choices-multiple-remove-button'); 

            for (let i = 0; i < 1; i++) {
                const selected = childArr[i];
                var removeOption = _.remove(selectElement[0])
                console.log(selectElement[0])
            }
            
     
        
           
            let totalArray = []
            for (let j = 0; j < childArr.length; j++) {

                const element = childArr[j];
                
                console.log("zzzzzzzzzzzzzzzzzzzzzzzz " + element + selectElement[element].value);
                console.log(parseInt(selectElement[element].value));
                let priceInterger = parseInt(selectElement[element].value)
                totalArray.push(priceInterger);
            }
            console.log(totalArray);
            console.log("£"+_.sum(totalArray)+".00");
            
            totalInput.value = "£"+_.sum(totalArray)+".00";

 
                
    let element = document.getElementById("encrypt-button");
    let invalidCheck = document.getElementById("invalidCheck");

            if (totalInput.value == "£0.00") {
                $(invalidCheck).prop("checked", false);
                element.classList.add("disabled");
            } else {
                invalidCheck.addEventListener('change', () => {
                    if (invalidCheck.checked && totalInput.value !== "£0.00") {
                        element.classList.remove("disabled");
                        
                    }
                });
            }

            

        });
    }

    // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

    function booking() {
        const element = (
    
            <div>
                <div id="booking-form"></div>
            </div>
    
        );
        ReactDOM.render(
            element,
            document.getElementById('booking_component')
        );
    }
    
    booking();
    calculate();

    

});
   


