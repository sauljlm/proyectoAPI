// Crea el request.
const request = new XMLHttpRequest();

function load(event) {
  // Obtiene la respuesta.
  const response = event.target.response;
  console.log(response);
  const boxR = document.getElementById('rick');

  // RICK

  // agregar foto
  const imgR = document.createElement('img');
  imgR.setAttribute('src', response.results['0'].image);
  boxR.appendChild(imgR);
  // agregar nombre
  const NR = document.createElement('p');
  const SNR = document.createElement('span');
  SNR.innerHTML = 'Name';
  NR.innerHTML = response.results['0'].name;
  NR.appendChild(SNR);
  boxR.appendChild(NR);
  // agregar status
  const SR = document.createElement('p');
  const SSR = document.createElement('span');
  SSR.innerHTML = 'Status';
  SR.innerHTML = response.results['0'].status;
  SR.appendChild(SSR);
  boxR.appendChild(SR);
  // agregar Species
  const SPR = document.createElement('p');
  const SPSR = document.createElement('span');
  SPSR.innerHTML = 'Species';
  SPR.innerHTML = response.results['0'].species;
  SPR.appendChild(SPSR);
  boxR.appendChild(SPR);
  // agregar genero
  const GR = document.createElement('p');
  const GSR = document.createElement('span');
  GSR.innerHTML = 'Gener';
  GR.innerHTML = response.results['0'].gender;
  GR.appendChild(GSR);
  boxR.appendChild(GR);
  // agregar origin
  const OR = document.createElement('p');
  const OSR = document.createElement('span');
  OSR.innerHTML = 'Origin';
  OR.innerHTML = response.results['0'].origin.name;
  OR.appendChild(OSR);
  boxR.appendChild(OR);

  // morty
  const boxM = document.getElementById('morty');
  // agregar foto
  const imgM = document.createElement('img');
  imgM.setAttribute('src', response.results['1'].image);
  boxM.appendChild(imgM);
  // agregar nombre
  const NM = document.createElement('p');
  const SNM = document.createElement('span');
  SNM.innerHTML = 'Name';
  NM.innerHTML = response.results['1'].name;
  NM.appendChild(SNM);
  boxM.appendChild(NM);
  // agregar status
  const SM = document.createElement('p');
  const SSM = document.createElement('span');
  SSM.innerHTML = 'Status';
  SM.innerHTML = response.results['1'].status;
  SM.appendChild(SSM);
  boxM.appendChild(SM);
  // agregar Species
  const SPM = document.createElement('p');
  const SPSM = document.createElement('span');
  SPSM.innerHTML = 'Species';
  SPM.innerHTML = response.results['1'].species;
  SPM.appendChild(SPSM);
  boxM.appendChild(SPM);
  // agregar genero
  const GM = document.createElement('p');
  const GSM = document.createElement('span');
  GSM.innerHTML = 'Gener';
  GM.innerHTML = response.results['1'].gender;
  GM.appendChild(GSM);
  boxM.appendChild(GM);
  // agregar origin
  const OM = document.createElement('p');
  const OSM = document.createElement('span');
  OSM.innerHTML = 'Origin';
  OM.innerHTML = response.results['1'].origin.name;
  OM.appendChild(OSM);
  boxM.appendChild(OM);

  // summer
  const boxS = document.getElementById('summer');
  // agregar foto
  const imgS = document.createElement('img');
  imgS.setAttribute('src', response.results['2'].image);
  boxS.appendChild(imgS);
  // agregar nombre
  const NS = document.createElement('p');
  const SNS = document.createElement('span');
  SNS.innerHTML = 'Name';
  NS.innerHTML = response.results['2'].name;
  NS.appendChild(SNS);
  boxS.appendChild(NS);
  // agregar status
  const SS = document.createElement('p');
  const SSS = document.createElement('span');
  SSS.innerHTML = 'Status';
  SS.innerHTML = response.results['2'].status;
  SS.appendChild(SSS);
  boxS.appendChild(SS);
  // agregar Species
  const SPS = document.createElement('p');
  const SPSS = document.createElement('span');
  SPSS.innerHTML = 'Species';
  SPS.innerHTML = response.results['2'].species;
  SPS.appendChild(SPSS);
  boxS.appendChild(SPS);
  // agregar genero
  const GS = document.createElement('p');
  const GSS = document.createElement('span');
  GSS.innerHTML = 'Gener';
  GS.innerHTML = response.results['2'].gender;
  GS.appendChild(GSM);
  boxS.appendChild(GS);
  // agregar origin
  const OS = document.createElement('p');
  const OSS = document.createElement('span');
  OSS.innerHTML = 'Origin';
  OS.innerHTML = response.results['2'].origin.name;
  OS.appendChild(OSS);
  boxS.appendChild(OS);

  // betch
  const boxB = document.getElementById('beth');
  // agregar foto
  const imgB = document.createElement('img');
  imgB.setAttribute('src', response.results['3'].image);
  boxB.appendChild(imgB);
  // agregar nombre
  const NB = document.createElement('p');
  const SNB = document.createElement('span');
  SNB.innerHTML = 'Name';
  NB.innerHTML = response.results['3'].name;
  NB.appendChild(SNB);
  boxB.appendChild(NB);
  // agregar status
  const SB = document.createElement('p');
  const SSB = document.createElement('span');
  SSB.innerHTML = 'Status';
  SB.innerHTML = response.results['3'].status;
  SB.appendChild(SSB);
  boxB.appendChild(SB);
  // agregar Species
  const SPB = document.createElement('p');
  const SPSB = document.createElement('span');
  SPSB.innerHTML = 'Species';
  SPB.innerHTML = response.results['3'].species;
  SPB.appendChild(SPSB);
  boxB.appendChild(SPB);
  // agregar genero
  const GB = document.createElement('p');
  const GSB = document.createElement('span');
  GSB.innerHTML = 'Gener';
  GB.innerHTML = response.results['3'].gender;
  GB.appendChild(GSB);
  boxB.appendChild(GB);
  // agregar origin
  const OB = document.createElement('p');
  const OSB = document.createElement('span');
  OSB.innerHTML = 'Origin';
  OB.innerHTML = response.results['3'].origin.name;
  OB.appendChild(OSB);
  boxB.appendChild(OB);

  // jerry
  const boxJ = document.getElementById('jerry');
  // agregar foto
  const imgJ = document.createElement('img');
  imgJ.setAttribute('src', response.results['4'].image);
  boxJ.appendChild(imgJ);
  // agregar nombre
  const NJ = document.createElement('p');
  const SNJ = document.createElement('span');
  SNJ.innerHTML = 'Name';
  NJ.innerHTML = response.results['4'].name;
  NJ.appendChild(SNJ);
  boxJ.appendChild(NJ);
  // agregar status
  const SJ = document.createElement('p');
  const SSJ = document.createElement('span');
  SSJ.innerHTML = 'Status';
  SJ.innerHTML = response.results['4'].status;
  SJ.appendChild(SSJ);
  boxJ.appendChild(SJ);
  // agregar Species
  const SPJ = document.createElement('p');
  const SPSJ = document.createElement('span');
  SPSJ.innerHTML = 'Species';
  SPJ.innerHTML = response.results['4'].species;
  SPJ.appendChild(SPSJ);
  boxJ.appendChild(SPJ);
  // agregar genero
  const GJ = document.createElement('p');
  const GSJ = document.createElement('span');
  GSJ.innerHTML = 'Gener';
  GJ.innerHTML = response.results['4'].gender;
  GJ.appendChild(GSJ);
  boxJ.appendChild(GJ);
  // agregar origin
  const OJ = document.createElement('p');
  const OSJ = document.createElement('span');
  OSJ.innerHTML = 'Origin';
  OJ.innerHTML = response.results['4'].origin.name;
  OJ.appendChild(OSJ);
  boxJ.appendChild(OJ);
}

// Registra el manejador de eventos.
request.addEventListener('load', load);

// Define el tipo de respuesta.
request.responseType = 'json';


// Inicializa el request.
request.open('GET', 'https://rickandmortyapi.com/api/character/');

// Envía el request.
request.send();

/*
*
* search
*
*/

// Crea el request.
const request2 = new XMLHttpRequest();
const boxSeach = document.getElementById('boxSearch');
const btnSearch = document.getElementById('btn_input');
let clear = false;

// Registra el manejador de eventos.
request2.addEventListener('load', function (event) {
  // Obtiene la respuesta.
  const response = event.target.response.results;
  // console.log(response);
  // Itera sobre los resultados y los agrega a la lista.
  btnSearch.addEventListener('click',addCharacter);

  function addCharacter() {
    if (clear === false) {
      let name = document.getElementById('input').value;
      name = parseInt(name);
      // agregar foto
      const imgSesrch = document.createElement('img');
      imgSesrch.setAttribute('src', response[name].image);
      boxSeach.appendChild(imgSesrch);
      // agregar nombre
      const NSesrch = document.createElement('p');
      const SNSesrch = document.createElement('span');
      SNSesrch.innerHTML = 'Name';
      NSesrch.innerHTML = response[name].name;
      NSesrch.appendChild(SNSesrch);
      boxSeach.appendChild(NSesrch);
      // agregar status
      const SSesrch = document.createElement('p');
      const SSSesrch = document.createElement('span');
      SSSesrch.innerHTML = 'Status';
      SSesrch.innerHTML = response[name].status;
      SSesrch.appendChild(SSSesrch);
      boxSeach.appendChild(SSesrch);
      // agregar Species
      const SPSesrch = document.createElement('p');
      const SPSSesrch = document.createElement('span');
      SPSSesrch.innerHTML = 'Species';
      SPSesrch.innerHTML = response[name].species;
      SPSesrch.appendChild(SPSSesrch);
      boxSeach.appendChild(SPSesrch);
      // agregar genero
      const GSesrch = document.createElement('p');
      const GSSesrch = document.createElement('span');
      GSSesrch.innerHTML = 'Gener';
      GSesrch.innerHTML = response[name].gender;
      GSesrch.appendChild(GSSesrch);
      boxSeach.appendChild(GSesrch);
      // agregar origin
      const OSesrch = document.createElement('p');
      const OSSesrch = document.createElement('span');
      OSSesrch.innerHTML = 'Origin';
      OSesrch.innerHTML = response[name].origin.name;
      OSesrch.appendChild(OSSesrch);
      boxSeach.appendChild(OSesrch);

      clear = true;
    } else {
      boxSeach.innerHTML = '';
      clear = false;
    }
  }
});

// Define el tipo de respuesta.
request2.responseType = 'json';

// Inicializa el request2.
request2.open('GET', 'https://rickandmortyapi.com/api/character/');

// Envía el request2.
request2.send();
