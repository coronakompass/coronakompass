# COVID19 Companion

```sh
yarn
yarn dev
```

## Deployment

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
