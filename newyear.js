(function($) {
        
$('.header').append(`<p class="fs-5 countdown">New Year Countdown</p>`)

        var end = new Date("2023-01-01T00:00:00.000+07:00");

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                $('.countdown').text('HAPPY NEW YEAR 2023!!!');

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            $('.countdown').text(`${days}D ${hours}Hrs ${minutes}Min ${seconds}Sec`)

            document.getElementById('countdown').innerHTML = days + 'days ';
            document.getElementById('countdown').innerHTML += hours + 'hrs ';
            document.getElementById('countdown').innerHTML += minutes + 'mins ';
            document.getElementById('countdown').innerHTML += seconds + 'secs';
        }

        timer = setInterval(showRemaining, 1000);

})(jQuery);
