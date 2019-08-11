import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('undergrowth');
  });

  it('should display login', () => {
    page.navigateToPath('/login');
    browser.sleep(5000);
    expect(page.getHeaderText()).toEqual('Login');
  });


  it('should display sign up', () => {
    page.navigateToPath('/signup');
    browser.sleep(5000);
    expect(page.getHeaderText()).toEqual('Sign up');
  });




  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
