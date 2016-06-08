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
        {id: 'ArBe', name: 'Ariana Beach'},
        {id: 'FePo', name: 'Fernhollow Pond'},
        {id: 'ShLa', name: 'Shangri Lake'},
        {id: 'CoPi', name: 'Coleville Pier'},
        {id: 'EmRi', name: 'Emberwood River'}
        ],
        ticket : 'silver'
      },
      {
        id: 'Mer',
        name: 'Mermaid Island',
        spots : [
        {id: 'SaRe', name: 'Sanzaneeta Reef'},
        {id: 'StRo', name: 'Steelsbay Rock'},
        {id: 'PaLa', name: 'Parker Lake'},
        {id: 'MaPo', name: 'Marshview Pond'},
        {id: 'MaRi', name: 'Maple River'},
        {id: 'HiLa', name: 'Highland Lake'}
        ],
        ticket : 'gold'
      },
      {
        id: 'Atl',
        name: 'Atlantis Island',
        spots : [
        {id: 'SaRe', name: 'Dayton Point'},
        {id: 'StRo', name: 'Beauford Pond'},
        {id: 'PaLa', name: 'Mistfall River'},
        {id: 'MaPo', name: 'Kohu Lake'},
        {id: 'MaRi', name: 'Graydale Lake'},
        {id: 'HiLa', name: 'Kastamoor Pond'}
        ],
        ticket : 'gold'
      },
      {
        id: 'Mer',
        name: 'Mermaid Island',
        spots : [
        {id: 'SaRe', name: 'Sanzaneeta Reef'},
        {id: 'StRo', name: 'Steelsbay Rock'},
        {id: 'PaLa', name: 'Parker Lake'},
        {id: 'MaPo', name: 'Marshview Pond'},
        {id: 'MaRi', name: 'Maple River'},
        {id: 'HiLa', name: 'Highland Lake'}
        ],
        ticket : 'gold'
      },
      {
        id: 'Mer',
        name: 'Mermaid Island',
        spots : [
        {id: 'SaRe', name: 'Sanzaneeta Reef'},
        {id: 'StRo', name: 'Steelsbay Rock'},
        {id: 'PaLa', name: 'Parker Lake'},
        {id: 'MaPo', name: 'Marshview Pond'},
        {id: 'MaRi', name: 'Maple River'},
        {id: 'HiLa', name: 'Highland Lake'}
        ],
        ticket : 'gold'
      }
      ]
    }
  });

}
