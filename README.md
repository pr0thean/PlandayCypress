Before test run, run command to install package.json:
npm install

To run cypress test run command:
./node_modules/.bin/cypress open
from the the window choose browser and proper test to run

Structure of the files in main cypress/ folder:
fixtures/ -> here are located user accounts
integration/PlanDay/ -> here is the file with main test new-shif.spec
support/ -> here is the file commands.js with custom commands used in test

cypres.json -> here are basic settings such as URL to website and timeouts
