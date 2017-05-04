import { YoucraftPage } from './app.po';

describe('youcraft App', () => {
  let page: YoucraftPage;

  beforeEach(() => {
    page = new YoucraftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
