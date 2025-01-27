export const fetchLondonTime = async () => {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true&timezone=Europe/London"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.current_weather.time; // Extract time from the API response
  };