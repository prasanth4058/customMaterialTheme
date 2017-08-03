import { MyThemePage } from './app.po';

describe('my-theme App', () => {
  let page: MyThemePage;

  beforeEach(() => {
    page = new MyThemePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
