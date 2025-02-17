import { RefreshTokenIdsStorage } from './refresh-token-ids.storage.ts.js';

describe('RefereshTokenIdsStorage', () => {
  it('should be defined', () => {
    expect(new RefreshTokenIdsStorage()).toBeDefined();
  });
});
