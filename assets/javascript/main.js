// main.js  -- javascript tip calculator

var billAmount;
var service;
var numberPeople;


// calculate tip function to execute after CALCULATE button has been clicked
function calculateTip() {

        // use jQuery selector to empty tip dispaly area
        $('#tip').empty();

        // jQuery method to obtain user inputted value of billAmount service levle and number of people
        billAmount = $('#billAmount').val();
        service = $('#service').val();
        numberPeople = $('#numberPeople').val();

        // Validate bill amount is not 0 or empty 
        if (billAmount === '' || service === 0 || billAmount <1) {
            $('#totalTip').hide();
            // load error dialog text and display
            $('.modal-content').html('<span class="close">&times;</span><p><h3>Bill Amount Cannot Be Empty And Must Be a Positive number...</h3></p>');
            $('.modal').show();
            // process button click to close dialog display
            $('.close').click( () => {              
                $('.modal').toggle();
            })
            return;
        } else 
        {
            dectxt = parseFloat(billAmount).toFixed(2);
        } 

        // Check to see if number of people is empty
        if (numberPeople === '' || numberPeople <= 1){
            numberPeople = 1;
            $('#each').hide();
        } else {
            $('#each').show();
        }

        // calculate amount of tip
        var tip = (dectxt * service) / numberPeople;

        // round to two decimal places and display amount of tip
        tip = Math.round(tip * 100) / 100;
        tip = tip.toFixed(2);
        $('#tip').append(tip);
        $('#totalTip').show();

        // reset variables when done with calcutaion and display of tip
        billAmount = 0;
        dectxt = 0;
        service = 0;
        numberPeople = 0;
}
//  do not run until page is completely loaded
$(document).ready(function(){

    // hide tip display area until needed
    $('#totalTip').hide();

    // process calculate button event
    $('#calculate').click(function () {
        calculateTip();;
    });

});