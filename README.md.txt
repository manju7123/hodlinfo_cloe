Here's a `README.md` tailored specifically for your HodlInfo Clone project:

### `README.md`

```markdown
# HodlInfo Clone

## Description

This project is a clone of the HodlInfo website. It is built using HTML, CSS, and Node.js, with data fetched from the WazirX API and stored in a PostgreSQL database. The webpage displays real-time cryptocurrency data and allows users to toggle between dark and light modes.

## Features

- Fetches top 10 cryptocurrency data from the WazirX API.
- Stores and retrieves data using PostgreSQL.
- Responsive design with dark mode and light mode toggle.
- Real-time data updates with automatic page refresh.

## Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/manju7123/hodlinfo_cloe
   cd hodlinfo_clone
   ```

2. **Install Dependencies**

   Ensure you have Node.js and npm installed. Then, install the required packages:

   ```sh
   npm install
   ```

3. **Set Up SQLITE Database**

   - Create a SQLITE database.
   - Update the database connection settings in `app.js` or `.env` file.

4. **Run the Application**

   - Start the server:

     ```sh
     npm app.js
     ```

   - Open your browser and navigate to `http://localhost:3005`.


## Usage

- **Toggle Dark/Light Mode:** Click the switch in the top-right corner of the header to toggle between dark and light modes.
- **Automatic Data Refresh:** The page will automatically refresh to show updated data at regular intervals.

## File Structure

- `app.js` - Main server file with Express setup and API routes.
- `public/` - Contains static files (CSS, JavaScript, images).
- `views/` - Contains EJS templates for rendering HTML.
- `scripts.js` - JavaScript file for frontend functionality.
- `styles.css` - Stylesheet for page styling.

## Media Queries

- **Laptop View:** Adjustments for larger screens with a horizontal layout.
- **Tablet View:** Adjustments for medium screens, ensuring content is still readable.
- **Mobile View:** Adjustments for smaller screens with a stacked layout.

## Contributing

Feel free to fork the repository and make improvements. Submit pull requests for any changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact [your-email@example.com](mailto:your-email@example.com).
```

### Notes

- Replace `https://github.com/manju7123/hodlinfo_cloe` with your actual GitHub repository URL.
- Update the contact email with your own.
- Ensure you have a `LICENSE` file if you mention a license.

