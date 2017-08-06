import { RouteCrudTmpPage } from './app.po';

describe('route-crud-tmp App', () => {
  let page: RouteCrudTmpPage;

  beforeEach(() => {
    page = new RouteCrudTmpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
