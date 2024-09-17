const express = require('express');
const path = require('path');
const WebSocket = require('ws');
const db = require('./db');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3005;

// WebSocket server setup
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    console.log('New WebSocket connection');
    ws.on('message', message => {
        console.log(`Received message => ${message}`);
    });
});

// Notify all WebSocket clients
function notifyClients() {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send('update');
        }
    });
}

// Fetch data initially and then periodically
function fetchAndStoreData() {
    axios.get('https://api.wazirx.com/api/v2/tickers')
        .then(response => {
            const tickers = response.data;
            
            if (!tickers || Object.keys(tickers).length === 0) {
                console.error('No tickers data found in API response');
                return;
            }

            const top10 = Object.values(tickers).slice(0, 10);
            console.log('Top 10 Tickers:', top10);

            db.serialize(() => {
                db.run('DELETE FROM crypto_data', err => {
                    if (err) {
                        console.error('Error deleting old data:', err.message);
                    }
                });

                const stmt = db.prepare(`
                    INSERT INTO crypto_data (name, last, buy, sell, volume, base_unit)
                    VALUES (?, ?, ?, ?, ?, ?)
                `);

                top10.forEach(ticker => {
                    stmt.run(ticker.name, ticker.last, ticker.buy, ticker.sell, ticker.volume, ticker.base_unit, err => {
                        if (err) {
                            console.error('Error inserting data:', err.message);
                        }
                    });
                });

                stmt.finalize();
                console.log('Data inserted successfully');
                notifyClients();
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error.message);
        });
}

fetchAndStoreData();
setInterval(fetchAndStoreData, 10000); // Update every minute

// Express setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
    res.render('index');
});
