function setReminder() {
    // Get user inputs
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var activity = document.getElementById('activity').value;

    // Combine date and time strings and convert to Date object
    var reminderDateTime = new Date(date + 'T' + time);

    // Get current date and time
    var now = new Date();

    // Calculate the time difference in milliseconds
    var timeDifference = reminderDateTime - now;

    // Set timeout to trigger the reminder
    setTimeout(function () {
        // Beep sound
        var audio = new Audio('mixkit-repeating-arcade-beep-1084.wav'); // Provide the path to your beep sound file
        audio.play();

        // Show reminder message
        alert('It is Time To: ' + activity);
    }, timeDifference);
}