import { describe, expect, it } from 'vitest';
import { isNearBottom } from './chat-reasoning';

function fakeEl(scrollHeight: number, scrollTop: number, clientHeight: number) {
  return { scrollHeight, scrollTop, clientHeight } as HTMLElement;
}

describe('isNearBottom', () => {
  it('returns true when the viewport sits at the bottom', () => {
    expect(isNearBottom(fakeEl(1000, 980, 30))).toBe(true);
  });

  it('returns true within the default 30px threshold', () => {
    expect(isNearBottom(fakeEl(1000, 975, 25))).toBe(true);
  });

  it('returns false when the user scrolled away to read earlier text', () => {
    expect(isNearBottom(fakeEl(1000, 400, 30))).toBe(false);
  });

  it('honours a custom threshold', () => {
    expect(isNearBottom(fakeEl(1000, 500, 30), 600)).toBe(true);
    expect(isNearBottom(fakeEl(1000, 300, 30), 600)).toBe(false);
  });
});
