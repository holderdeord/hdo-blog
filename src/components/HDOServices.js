import React from 'react';

const serviceData = [
  {
    title: 'Har regjeringen holdt ord de siste fire årene?',
    img: 'https://files.holderdeord.no/images/sjekk.png',
    url: 'https://sjekk.holderdeord.no/',
    description: 'Vi sjekket.',
  },
  {
    title: 'Hva har partiene lovet?',
    img: 'https://files.holderdeord.no/images/loftebasen.png',
    url: 'https://løfter.holderdeord.no/',
    description: 'Søk i partiprogram og regjeringserklæringer',
  },
  {
    title: 'Sagt i salen',
    img: 'https://files.holderdeord.no/images/tale.png',
    url: 'https://tale.holderdeord.no/',
    description: 'Visualisering av språkbruk på Stortinget',
  },
  {
    title: 'Enighet',
    img: 'https://files.holderdeord.no/images/enighet.raw.png',
    url: 'https://enighet.holderdeord.no/',
    description: 'Hvem stemmer sammen på Stortinget?',
  },
  {
    title: 'Blogg',
    img: 'https://files.holderdeord.no/images/stortingssalen.jpg',
    url: 'https://blog.holderdeord.no/',
    description: 'Datadrevne analyser av norsk politikk',
  },
  {
    title: 'Partipisken',
    img: 'https://files.holderdeord.no/images/partipisken.jpg',
    url: 'https://twitter.com/partipisken',
    description: 'Følg med på folkevalgte rebeller',
  },
];

const serviceTitle = 'Blogg'; // FIXME: Static

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = { services: serviceData.filter(s => s.title !== serviceTitle) };
  }

  render() {
    const { services } = this.state;

    return (
      <div className="other-services">
        <div className="other-services__row">
          {services.map(service => (
            <div className="service hdo-card" key={service.title}>
              <a href={service.url}>
                <div className="service__img" style={{ backgroundImage: `url(${service.img})` }} />

                <div style={{ padding: '1rem' }}>
                  <h3>{service.title}</h3>

                  <p className="service__description">{service.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
