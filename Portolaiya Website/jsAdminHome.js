// scripts.js

// Data for the Number of Transactions per Resort chart
window.onload = function() {
    // Chart for Number of Transactions per Resort
    var ctx1 = document.getElementById('barChart1').getContext('2d');
    var barChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Resort A', 'Resort B', 'Resort C', 'Resort D', 'Resort E', 'Resort F', 'Resort G', 'Resort H', 'Resort I', 'Resort J'], // Resort names
            datasets: [{
                label: 'Number of Transactions', // Label for the bar graph
                data: [120, 150, 90, 180, 110, 130, 95, 160, 175, 140], // Number of customers
                backgroundColor: 'rgba(54, 162, 235, 0.6)', // Color of the bars
                borderColor: 'rgba(54, 162, 235, 1)', // Border color of bars
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Ensure the y-axis starts at 0
                }
            }
        }
    });

    // Chart for Overall Number of Guests per Month
    var ctx2 = document.getElementById('barChart2').getContext('2d');
    var barChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], // Month names
            datasets: [{
                label: 'Number of Guests', // Label for the bar graph
                data: [500, 600, 700, 550, 650, 800, 700, 750, 600, 650, 700, 750], // Number of guests each month
                backgroundColor: 'rgba(255, 99, 132, 0.6)', // Color of the bars
                borderColor: 'rgba(255, 99, 132, 1)', // Border color of bars
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Ensure the y-axis starts at 0
                }
            }
        }
    });
};
