import {vi, describe, it, expect} from 'vitest';

describe('teste básico', () => {
     it('deve passar', () => {
          const mockFn = vi.fn();
          expect(mockFn).toBeDefined();
     });
});
