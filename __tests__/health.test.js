import healthStatus from '../src/health.js';

test('should return healthy', () => {
  expect(healthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('should return wounded', () => {
  expect(healthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
});

test('should return critical', () => {
  expect(healthStatus({ name: 'Маг', health: 10 })).toBe('critical');
});
