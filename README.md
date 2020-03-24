# Corona Kompass

This project started as contribution to the [WirVsVirus Hackathon](https://wirvsvirushackathon.org) against COVID-19.

With the advent of curfews the question of controlling these arose. A paperless solution is not only easy and non-bureaucratic, but also contact-free and minimizes therefore the risk of infection.

Corona Kompass aims to be an app to resolve this.

## Development Setup

```sh
yarn
yarn dev
```

## Deployment

### Configure Google Cloud

```
./bin/setup-gcloud YOU@gmail.com
```

### Deploy a new Version

```
yarn deploy
```

### Setup Domain

This only hast to be done once:

```
gcloud beta domains verify --project covidcompanion coronakompass-app.de
gcloud beta run domain-mappings create --project covidcompanion --service web --domain coronakompass-app.de
gcloud beta run domain-mappings create --project covidcompanion --service web --domain www.coronakompass-app.de
```

## License

Corona Kompass is available under the MIT license. See the LICENSE file for more info.
