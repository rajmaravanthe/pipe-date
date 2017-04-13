import { PipeDatePage } from './app.po';

describe('pipe-date App', function() {
  let page: PipeDatePage;

  beforeEach(() => {
    page = new PipeDatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
