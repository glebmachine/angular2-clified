import { Angular2ClifiedPage } from './app.po';

describe('angular2-clified App', function() {
  let page: Angular2ClifiedPage;

  beforeEach(() => {
    page = new Angular2ClifiedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
