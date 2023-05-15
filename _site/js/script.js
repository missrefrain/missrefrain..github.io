$(document).ready(function(){

    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        removeItemButton: true,
        maxItemCount:20,
        searchResultLimit:20,
        renderChoiceLimit:20
    });


    $('#choices-multiple-remove-button').on('change', function() {
        let services = document.getElementById("choices-multiple-remove-button");
        let totalinput = document.getElementById("servicesTotal");
        totalinput.value = ""
        
        let y = this.value;
console.log(y);
        let z = totalinput.value
console.log(z);
        totalinput.value += eval(y+z)
        
    });


    
});
   