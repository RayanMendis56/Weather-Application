# 🌤️ Weather App

A simple and responsive weather application built with **HTML, CSS, and JavaScript** that allows users to search for a city and view its current weather information using the **OpenWeather API**.

## 📌 Features

* 🔍 Search weather by city name
* 🌡️ Display current temperature in Celsius
* 💧 Display humidity
* 💨 Display wind speed
* 🌤️ Dynamic weather icons based on current weather conditions
* ⌨️ Search using the **Enter** key
* ⚠️ Validation for empty search input
* ❌ Handling for invalid/non-existent cities
* 🛡️ Error handling for API request failures
* 📱 Responsive user interface

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive layout
* **JavaScript (ES6+)** – Application logic and API integration
* **OpenWeather API** – Weather data
* **Git & GitHub** – Version control and project management

## 📂 Project Structure

```text
Weather-app/
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── images/
│   │   ├── clear-sky.png
│   │   ├── clouds.png
│   │   ├── heavy-rain.png
│   │   ├── mist.png
│   │   ├── rainy-day.png
│   │   └── thunderstorm.png
│   │
│   └── js/
│       ├── app.js
│       └── config.js
│
├── .gitignore
├── index.html
└── README.md
```

> **Note:** `config.js` contains the API configuration and should not be committed to the repository.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/Weather-app.git
```

### 2. Navigate to the project directory

```bash
cd Weather-app
```

### 3. Configure the OpenWeather API

Create the following file:

```text
assets/js/config.js
```

Add your OpenWeather API key:

```javascript
const apiKey = "YOUR_API_KEY";
```

Make sure `config.js` is included in `.gitignore` so that your API key is not committed to GitHub.

### 4. Open the application

Open `index.html` in your browser.

For the best development experience, you can use **VS Code Live Server** or another local development server.

## 🔑 API

This project uses the **OpenWeather Current Weather Data API** to retrieve weather information.

The application requests weather data based on the city entered by the user and displays:

* City name
* Temperature
* Humidity
* Wind speed
* Current weather condition

The API endpoint uses metric units:

```text
https://api.openweathermap.org/data/2.5/weather?units=metric&q=
```

## 💻 How It Works

1. The user enters a city name.
2. The application validates the input.
3. JavaScript sends a request to the OpenWeather API.
4. The API returns the current weather data.
5. The application extracts the required information.
6. Temperature, humidity, wind speed, and city name are displayed.
7. The weather icon is updated according to the weather condition.
8. Errors such as invalid cities or failed requests are handled appropriately.

## 🌦️ Supported Weather Conditions

The application dynamically changes the weather icon for conditions including:

* Clear
* Clouds
* Rain
* Drizzle
* Mist
* Thunderstorm

## 🔐 Security Note

The OpenWeather API key is intentionally excluded from the Git repository using `.gitignore`.

However, because this is a client-side application, an API key used directly by browser JavaScript cannot be considered completely secret. For a production application, API requests should preferably be handled through a backend service, with appropriate API-key restrictions and usage limits.

## 🌱 Future Improvements

Possible improvements for future versions include:

* 📍 Detect weather using the user's current location
* 📅 Add multi-day weather forecasts
* 🌧️ Display additional weather information such as pressure and visibility
* 🌅 Display sunrise and sunset times
* 🔄 Add a loading indicator while fetching data
* 🌙 Add dark/light mode
* 🌍 Add support for different temperature units
* 🕒 Display local time for the selected city
* 📊 Add more detailed weather information

## 🌐 Browser Compatibility

The application is designed for modern browsers that support:

* JavaScript ES6+
* Fetch API
* Async/Await
* Modern CSS features

## 📄 License

This project is created for educational and portfolio purposes.

## 👨‍💻 Author

**Rayan Mendis**

Bachelor of Information Technology Student

---

⭐ If you find this project useful, feel free to star the repository!
