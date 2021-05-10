import { simpleValidate } from '../src/utils';

test('simpleValidate rejects obviously malformed urls', () => {
  expect(simpleValidate('not.url')).toBe(false);
});

test('simpleValidate accepts text urls', () => {
  expect(simpleValidate('https://url.com/testing.txt')).toBe(true);
});
