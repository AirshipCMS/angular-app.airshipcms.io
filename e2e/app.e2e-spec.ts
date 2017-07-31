import { AngularApp.Airshipcms.IoPage } from './app.po';

describe('angular-app.airshipcms.io App', () => {
  let page: AngularApp.Airshipcms.IoPage;

  beforeEach(() => {
    page = new AngularApp.Airshipcms.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
