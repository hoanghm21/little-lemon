import { fetchAPI } from './api';

export const updateAvailableTimes = (date: string) => {
  try {
    const [year, month, day] = date.split('-').map(Number);
    const utcDate = new Date(Date.UTC(year, month - 1, day)); // Convert to UTC Date object
    const available = fetchAPI(utcDate);

    if (available.length === 0) {
      return [
        '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
        '20:00', '20:30', '21:00', '21:30', '22:00', '22:30',
        '23:00', '23:30',
      ];
    }
    return available;
  } catch (error) {
    return [
      '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
      '20:00', '20:30', '21:00', '21:30', '22:00', '22:30',
      '23:00', '23:30',
    ];
  }
};

export const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  return updateAvailableTimes(today); // Call updateAvailableTimes with today's date
};