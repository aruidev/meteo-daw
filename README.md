# MeteoDAW

App web on consultar informació meteorològica bàsica, mostrant el temps actual d’una ciutat i una previsió de pocs dies.

## Tecnologies

- Angular 21.0.0
- Tailwind CSS v4
- OpenWeatherMap API (gratuïta) per obtenir el temps.

## Estructura del projecte

```
src/
├── index.html
├── main.ts
├── styles.css
├── app/
│   ├── app.config.ts
│   ├── app.css
│   ├── app.html
│   ├── app.routes.ts
│   ├── app.spec.ts
│   ├── app.ts
│   ├── components/
│   │   ├── footer/
│   │   │   ├── footer.css
│   │   │   ├── footer.html
│   │   │   └── footer.ts
│   │   ├── header/
│   │   │   ├── header.css
│   │   │   ├── header.html
│   │   │   └── header.ts
│   │   └── weather-card/
│   │       ├── weather-card.css
│   │       ├── weather-card.html
│   │       └── weather-card.ts
│   ├── pages/
│   │   ├── about/
│   │   │   ├── about.css
│   │   │   ├── about.html
│   │   │   └── about.ts
│   │   ├── ciutats/
│   │   │   ├── ciutats.css
│   │   │   ├── ciutats.html
│   │   │   └── ciutats.ts
│   │   ├── contacte/
│   │   │   ├── contacte.css
│   │   │   ├── contacte.html
│   │   │   └── contacte.ts
│   │   ├── faq/
│   │   │   ├── faq.css
│   │   │   ├── faq.html
│   │   │   └── faq.ts
│   │   ├── home/
│   │   │   ├── home.css
│   │   │   ├── home.html
│   │   │   └── home.ts
│   │   ├── previsio/
│   │   │   ├── previsio.css
│   │   │   ├── previsio.html
│   │   │   └── previsio.ts
│   │   └── temps/
│   │       ├── temps.css
│   │       ├── temps.html
│   │       └── temps.ts
│   └── services/
│       └── weather.service.ts
```


## Paraules clau

- temps avui
- previsió meteorològica
- clima local
- quant fa de temperatura
- mapa del temps


## Públic objectiu

- Estudiants i professors (perquè és didàctica i clara).
- Usuari general que només vol veure el temps ràpidament.
- Persones que volen consultar la previsió d’una ciutat concreta.


## Justificació

- El tema del clima és senzill, té API gratuïta i permet fer una demo ràpidament.
- Angular/Tailwind permeten desenvolupar ràpid amb poc codi i bon aspecte visual.
- L’estructura amb varies pàgines es pot fer amb rutes senzilles amb Angular.
- La web demostra ús d’API, disseny, navegació, SEO i organització.
