var data = {
    timeline: {
        headline: "Forslag om tiggeforbud fra FrP og H i opposisjon",
        type: "default",
        text: "",

        date: [
            {
                "startDate": "2010,11,23",
                "endDate": "2010,11,23",
                "headline": "Åpne for bortvisning av personer som driver aggressiv eller sjenerende tigging",
                "text": "<p>FrP og Høyre <a href='https://www.holderdeord.no/votes/1290537010ne'>foreslo<a/> at det skulle åpnes for at kommunene i politivedtektene kan innføre skjerpede regler om bortvisning av personer som driver aggressiv eller sjenerende tigging og salg. De fikk da støtte av KrF og Venstre.</p>"
            },

            {
                "startDate": "2010,11,23",
                "endDate": "2010,11,23",
                "headline": "Utarbeide en nasjonal strategi for bekjempelse av organisert tigging",
                "text": "<p>FrP og Høyre <a href='https://www.holderdeord.no/votes/1290537037ne'>foreslo</a> også at det skulle utarbeides en nasjonal strategi for bekjempelse av organisert tigging. De fikk støtte av KrF.</p>"
            },

            {
                "startDate": "2010,11,23",
                "endDate": "2010,11,23",
                "headline": "Åpne for registreringsplikt for salgs- eller innsamlingsvirksomhet",
                "text": "<p>Frp og Høyre <a href='https://www.holderdeord.no/votes/1290536978ne'>foreslo</a> å åpne for at kommunene i politivedtektene kan innføre regler om registreringsplikt for salg- eller innsamlingsvirksomhet.</p>"
            },

            {
                "startDate": "2012,06,11",
                "endDate": "2012,06,11",
                "headline": "Forby tigging",
                "text": "<p>Høyre og FrP <a href='https://www.holderdeord.no/votes/1339454994ne'>forslo<a/> at regjeringen skulle fremme forslag til lovbestemmelse som kriminaliserer tigging på offentlig sted. Strafferammer ble ikke foreslått.</p>"
            },

            {
                "startDate": "2013,06,10",
                "endDate": "2013,06,10",
                "headline": "Forby tigging på offentlig sted",
                "text": "<p>Høyre og FrP <a href='https://www.holderdeord.no/votes/1370905370ne'>ber regjeringen</a> fremme forslag til lovbestemmelse som kriminaliserer tigging på offentlig sted.</p>"
            },

            {
                "startDate": "2013,06,10",
                "endDate": "2013,06,10",
                "headline": "Gjøre tigging straffbart",
                "text": "<p>Høyre og FrP <a href='https://www.holderdeord.no/votes/1370905404ne'>foreslår</a> å endre straffeloven slik at personer som ber tilfeldige personer om penger på offentlig sted eller for samme formål oppsøker dem i deres bolig kan straffes med fengsel inntil to måneder.</p>"
            }
        ]
    }
};

createStoryJS({
    type:       'timeline',
    height:     '500',
    source:     data,
    lang:       'no',
    font:       'NewsCycle-Merriweather',
    start_zoom_adjust: -1,
    embed_id:   'u-rlig-om-tiggeforbud-timeline'
});
