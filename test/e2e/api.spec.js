const chai = require('chai');
const chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
const expect = chai.expect;

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
});