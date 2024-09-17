document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('crypto-table-body');

    // Function to fetch data from the server
    async function fetchData() {
        try {
            const response = await fetch('/api/getTop10');
            const data = await response.json();
            updateTable(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Function to update the table with fetched data
    function updateTable(data) {
        tableBody.innerHTML = ''; // Clear existing data
        data.forEach(price => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${price.name.toUpperCase()}</td>
                <td>${price.last}</td>
                <td>${price.buy}</td>
                <td>${price.sell}</td>
                <td>${price.volume}</td>
                <td>${price.base_unit}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Call fetchData on page load
    fetchData();

    // Refresh data every 30 seconds
    setInterval(fetchData, 30000);

    // Handle theme toggle
    const toggleSwitch = document.getElementById('theme-toggle');

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        }
    });
});
