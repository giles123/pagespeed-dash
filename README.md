# Page Speed Dash
> A node.js API backend for a page speed dashboard

## The Task

* Provide an API endpoint serving JSON that:
    * Gets Google Pagespeed results using their API
https://developers.google.com/speed/docs/insights/v5/get-started
    * For these websites initially:
        * https://www.hotel-internet-marketing.com/
        * https://www.bbc.co.uk/
        * https://www.google.co.uk/
    * Provide enough data for a frontend to eventually show side-by-side
comparisons
    * Don’t return too much information. At this point we only need:
        * Title
        * Response code
        * Speed score out of 100
        * URL of the site under test
    * Our frontenders don’t like camelCase - please ensure all key names your
endpoint provides are snake_case
* Provide an example to show this endpoint works
* Develop tests - can be unit 	or  functional 	or  e2e (don’t feel the need to do all 3) in any
JS-based testing framework
* The API should not expose any API credential details. These must remain private


## Setup

Once the project has been cloned, the modules have been installed and the containers started with ```docker-compose up```, the end-to-end tests can be run from inside the app container.

The `docs` directory in the root of the project contains postman exports to test the endpoints. The `Get Sites` endpoint will return a list of the sites we have in the DB. You can then use the ID to profile each site individually or profile them all at once with the other 2 available endpoints.

## Areas for Improvement

* The API keys are currently setup as environment variables and committed to the repository. This is a security concern; ideally they should be kept in a secret store,
* The API authentication is very basic with a static API key. It could be improved using oAuth or similar,
* The tests are currently run against the development database. Ideally we would use a test DB which we would ensure is in a consistent state each time the test suite is run,
* The error handling in the base controller currently checks if the error is a string and if not assumes it is an instance of `SiteNotFoundError` as this is the only custom error currently defined. It would be preferable for every domain level error to extend a base class which implements specific methods (`getMessage` and `getCode` for example), we can then check for instances of this base class in error handling logic,
* The Site entity and repository classes are coupled to mongo DB. The database type is an infrastructural concern and a domain model should not be polluted with that,
* The site repository is being used to retrieve sites inside the profile controller. This should be moved into the service/command handler,
* The database is not secure. A user and password should be created and these should also be kept in a secret store,
* The database container does not have a data volume mounted. `docker-compose down` would delete all DB data


Giles Lloyd – giles@cableandcode.co.uk
