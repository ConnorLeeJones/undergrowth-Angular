import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToPath(path:string) {
    return browser.get(browser.baseUrl+path) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h4')).getText() as Promise<string>;
  }

  getHeaderText(){
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }


}
