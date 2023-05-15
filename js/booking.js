$(document).ready(function(){

    


    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        removeItemButton: true,
        maxItemCount:20,
        searchResultLimit:20,
        renderChoiceLimit:20
    });

    function calculate() {
        var selectElement = document.getElementById('choices-multiple-remove-button');
        document.getElementById('Total').value = "£0.00";

        $(".services-input").on('change', function() {
            document.getElementById('Total').value = "£0.00";

            let services = document.getElementsByClassName("services-input");
            let totalinput = document.getElementsByClassName("total-input");
            let y = Number(this.value);
       
            var arr = document.getElementsByClassName('choices__item--selectable');
            var tot=0;
            for(var i=0;i<arr.length;i++){
                switch (arr) {
                    case null:
                        break;
                    default:
                        console.log(parseFloat(arr[i].attributes[3].textContent));
                        if(parseFloat(arr[i].value) !== NaN)
                        
                            tot = arr[i].attributes[3].textContent;
                            const toStr = tot
                            const UrlFormat = toStr.replaceAll('NaN', " ");
                            const url = _.toArray(UrlFormat); 

                            if (url.length == 0) {
                            } else {
                                url.forEach(element => {
                                    const str = element;
                                    const result = str.replaceAll("0", "0.00 ");
                                    document.getElementById('servicesTotal').value += result; 
                                }); 
                                const myArray = totalinput[0].value;
                                const newArray = _.castArray([myArray]);
                                let araToStr = _.toString(newArray)
                                const endArray = araToStr.split(" ");
                                let word = endArray;
                                console.log(word);
                                
                                var nums = word.map(function(str) {
                                    return parseInt(str); 
                                });
                                console.log(nums)
                                let newArr = nums.slice(0, -1);
                                console.log(_.sum(newArr))

                                console.log(selectElement.childElementCount);
                                if ( selectElement == _.isEmpty() ) {
                                    document.getElementById('Total').value = "£";
                                } else {
                                    document.getElementById('Total').value = "£"+_.sum(newArr)+".00";
                                }
                            } 
                    break;
                }
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
   


