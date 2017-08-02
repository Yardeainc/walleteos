import { ConfigAdminPage } from './app.po';

describe('config-admin App', function() {
  let page: ConfigAdminPage;

  beforeEach(() => {
    page = new ConfigAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
