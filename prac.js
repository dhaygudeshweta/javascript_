var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }

  function addSpeaker(speakerName){
     nestedObject.speakers.push({
         name:speakerName,
     })
  }



  function addLanguage(langauage,helloInlangauge){
      nestedObject.data.languages[langauage]={
          hello:helloInlangauge
      }

  }
  function addCountry(){
    nestedObject.data.continents.europe.countries[name] = {
        capital: capital,
        population: population
  }
}

