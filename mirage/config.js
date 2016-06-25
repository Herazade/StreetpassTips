export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/islands', function(){
    return {
      islands: [
      {
        id: 'Pre',
        name: 'Prelude Island',
        spots : [
        {id: 'BeBa', name: 'Beginniner\'s Bay', type:'C'},
        {id: 'SyRi', name: 'Sylvana River', type:'R'},
        {id: 'CyLa', name: 'Cypress Lake', type:'L'},
        {id: 'PDSC', name: 'Prelude Deep-Sea Cruise', type:'D'}
        ],
        ticket: null
      },
      {
        id: 'Gio',
        name: 'Giovanna Island',
        spots : [
        {id: 'ArBe', name: 'Ariana Beach', type:'C'},
        {id: 'FePo', name: 'Fernhollow Pond', type:'L'},
        {id: 'ShLa', name: 'Shangri Lake', type:'L'},
        {id: 'CoPi', name: 'Coleville Pier', type:'C'},
        {id: 'EmRi', name: 'Emberwood River', type:'R'}
        ],
        ticket : 'silver'
      },
      {
        id: 'Mer',
        name: 'Mermaid Island',
        spots : [
        {id: 'SaRe', name: 'Sanzaneeta Reef', type:'C'},
        {id: 'StRo', name: 'Steelsbay Rock', type:'C'},
        {id: 'PaLa', name: 'Parker Lake', type:'L'},
        {id: 'MaPo', name: 'Marshview Pond', type:'L'},
        {id: 'MaRi', name: 'Maple River', type:'R'},
        {id: 'HiLa', name: 'Highland Lake', type:'L'}
        ],
        ticket : 'gold'
      },
      {
        id: 'Atl',
        name: 'Atlantis Island',
        spots : [
        {id: 'SaRe', name: 'Dayton Point', type:'C'},
        {id: 'StRo', name: 'Beauford Pond', type:'C'},
        {id: 'PaLa', name: 'Mistfall River', type:'C'},
        {id: 'MaPo', name: 'Kohu Lake', type:'C'},
        {id: 'MaRi', name: 'Graydale Lake', type:'C'},
        {id: 'HiLa', name: 'Kastamoor Pond', type:'C'}
        ],
        ticket : 'gold'
      },
      {
        id: 'Pos',
        name: 'Poseidon Island',
        spots : [
        {id: 'SePi', name: 'Seraphia Pier', type:'C'},
        {id: 'ClLa', name: 'Clearwater Lake', type:'L'},
        {id: 'ArRo', name: 'Aruna Rock', type:'C'},
        {id: 'EuRi', name: 'Eureka River', type:'R'},
        {id: 'PoDS', name: 'Psoeidon Deep-Sea Cruise', type:'D'},
        {id: 'WyLa', name: 'Wyverdun Lake', type:'L'}
        ],
        ticket : 'gold'
      },
      {
        id: 'Myt',
        name: 'Mythroll Island',
        spots : [
        {id: 'MDS1', name: 'Mythroll Deep-Sea Cruise 1', type:'D'},
        {id: 'CuCa', name: 'Cutty\'s Cave', type:'C'},
        {id: 'BaRi', name: 'Bangaban River', type:'R'},
        {id: 'AbJu', name: 'Abunda Jungle', type:'C'},
        {id: 'MDS2', name: 'Mythroll Deep-Sea Cruise 2', type:'C'}
        ],
        ticket : 'gold'
      },
      {
        id: 'Oce',
        name: 'Oceanora Island',
        spots : [
        {id: 'YuRe', name: 'Yunali Reef', type:'C'},
        {id: 'FoLa', name: 'Foxmere Lake', type:'L'},
        {id: 'BrBe', name: 'Bridgecliff Beach', type:'C'},
        {id: 'ODS1', name: 'Oceanora Deep-Sea Cruise 1', type:'D'},
        {id: 'ArBe', name: 'Arcana Beach', type:'C'},
        {id: 'HaRi', name: 'Hazeldown River', type:'R'},
        {id: 'ODS2', name: 'Oceanora Deep-Sea Cruise 2', type:'D'},
        ],
        ticket : 'gold'
      },
      {
        id: 'Mys',
        name: 'Mysteria Island',
        spots : [
        {id: 'MyDS', name: 'Mysteria Deep-Sea Cruise', type:'D'},
        {id: 'SeRi', name: 'Sellbrook River', type:'R'},
        {id: 'MaJu', name: 'Mahtori Jungle', type:'R'},
        {id: 'SuRi', name: 'Sulani River', type:'R'},
        {id: 'EnCa', name: 'Enigma Cave', type:'C'}
        ],
        ticket : 'gold'
      },
      ]
    };
  });

}
