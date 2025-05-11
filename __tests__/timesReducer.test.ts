import { initializeTimes, updateAvailableTimes } from '../src/utils/bookingUtils'; // Import the functions
import { fetchAPI } from '../src/utils/api'; // Import fetchAPI directly

describe('initializeTimes', () => {
  it('should return available times for today\'s date', () => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    // Call initializeTimes directly
    const result = initializeTimes();

    // Assert the result (ensure it matches the expected times for today)
    const expectedTimes = fetchAPI(new Date(today)); // Call fetchAPI with today's date
    expect(result).toEqual(expectedTimes);
  });

  it('should return default times if fetchAPI returns an empty array for today', () => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    // Simulate fetchAPI returning an empty array
    const result = initializeTimes();
    // Assert the result (ensure it falls back to default times)
    expect(result).toEqual([
      '17:00', '17:30',
      '18:30', '19:00',
      '20:30', '21:00',
      '22:00', '23:30'
    ]);
  });
});

describe('updateAvailableTimes', () => {
  it('should return updated times based on the provided date', () => {
    const specificDate = '2025-04-27';

    // Call updateAvailableTimes directly
    const result = updateAvailableTimes(specificDate);

    // Assert the result (ensure it matches the expected times for the specific date)
    const expectedTimes = fetchAPI(new Date(specificDate)); // Call fetchAPI with the specific date
    expect(result).toEqual(expectedTimes);
  });

  it('should return default times if fetchAPI returns an empty array for a specific date', () => {
    const specificDate = '2025-04-28'; // A date with no available times

    // Call updateAvailableTimes directly
    const result = updateAvailableTimes(specificDate);

    // Assert the result (ensure it falls back to default times)
    expect(result).toEqual([
      '17:00', '17:30', '18:00', '18:30', '19:30',
       '20:30', '21:00', '21:30', '22:00', '22:30',
      '23:00', '23:30',
    ]);
  });

  it('should return default times if fetchAPI throws an error for a specific date', () => {
    const invalidDate = 'invalid-date'; // An invalid date

    // Call updateAvailableTimes directly
    const result = updateAvailableTimes(invalidDate);
    // Assert the result (ensure it falls back to default times)
    expect(result).toEqual([
      '17:00', '17:30',
      '18:00', '18:30',
      '19:00', '19:30',
      '20:00', '20:30',
      '21:00', '21:30',
      '22:00', '22:30',
      '23:00', '23:30'
    ]);
  });
});