const chai = require('chai');
const chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
const expect = chai.expect;
const testName = 'webdriver';
const animalName = 'animal-test';

describe('look-look login', function() {
  beforeEach(function () {
    browser.url('http://localhost:8080');
    browser.setViewportSize({
      width: 2000,
      height: 1200
    });
  });

  it('renders app without crashing', async function() {
    expect('.App').to.be.visible();
  });

  it('can make a card!', async function() {
    browser.waitForVisible('.input-author', 2000);
    browser.click('.input-author');
    browser.keys(testName);
    browser.submitForm('.landing-page');
    // browser.pause(3000);
    browser.waitForVisible('.name-slide', 3000);
    expect(browser.getText('.card-author')).to.equal(testName);
    browser.click('.ant-input');
    browser.keys(animalName);
    browser.click('#container > div > div.welcome-box > div > div > div:nth-child(1) > div > div.question-slide > div > form > div:nth-child(2) > div > div > button');
    browser.waitForText('.card-name', 1000)
    expect(browser.getText('.card-name')).to.equal(animalName);
    browser.click('.next-button');
    browser.pause(3000);
  });

  it('sees multiple cards in the gallery view', async function() {
    browser.click('.link-to-gallery');
    browser.waitForVisible('.gallery-box', 3000);
    expect(browser.elements('.card-view').value).to.have.length.of.at.least(5);
  });
});