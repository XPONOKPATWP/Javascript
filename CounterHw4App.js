$(document).ready(function () {
    let count = 0;

    $('#increaseButton').click(function () {
        count++;
        $('#counter').text(count);
    });

    $('#decreaseButton').click(function () {
        count--;
        $('#counter').text(count);
    });
});
