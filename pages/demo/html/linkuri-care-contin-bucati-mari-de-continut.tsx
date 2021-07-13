import React from 'react';
import Head from 'next/head';

import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';
import { LessonTip } from '~/components/lessons';
import FormattedText from '~/components/FormattedText';

export default function LinksAroundBiggerChuncksOfContent() {
  const title = 'Două modalități prin care putem folosi bucăți mari de cod în interiorul unui link și implicațiile lor';

  return (
    <>
      <Head>
        <title>
          {title}
          {' '}
          | DEMO - FrontEnd.ro
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header demoPage />
        <Demo title={title}>
          <p>
            Primul exemplu are un div cu elemente și este plasat în interiorul
            unui link.
          </p>
          <p>
            Faptul că îl folosim așa, în interiorul link-ului, duce la
            implicații în ceea ce privește UX-ul. De exemplu, poate fi dificil
            să selectem textul din interior, iar întregul element are nevoie de
            reguli de stilizare destul de complexe pentru a crea starea de
            {' '}
            <i>focus</i>
            {' '}
            și
            <i>hover</i>
            .
          </p>
          <p>
            Totodată trebuie să avem în vedere și
            {' '}
            <i>accesibilitatea</i>
            , cum ar
            fi faptul că întregul conținut va fi citit de către screen readere
            înainte de a fi "anunțat" ca fiind un link.
          </p>
          <DemoPreview>
            <a href="#">
              <div
                style={{
                  border: '1px solid #eaeaea',
                  borderRadius: '15px',
                  boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
                  padding: '1em',
                  width: '500px',
                  backgroundColor: '#fff',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                <h2 style={{ fontSize: '30px' }}> Titlu </h2>
                <div>
                  <svg
                    id="a5349118-8809-40c5-ab34-fa23ee5ede74"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="761"
                    height="700.71023"
                    viewBox="0 0 761 700.71023"
                  >
                    <title>link</title>
                    <path
                      d="M261.134,348.56808c12.42842,23.049,38.806,32.94351,38.806,32.94351s6.22712-27.47543-6.2013-50.52448-38.806-32.94351-38.806-32.94351S248.70559,325.519,261.134,348.56808Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#2f2e41"
                    />
                    <path
                      d="M269.67653,340.98511c22.43841,13.49969,31.08016,40.3138,31.08016,40.3138s-27.73812,4.92678-50.17653-8.57291S219.5,332.4122,219.5,332.4122,247.23811,327.48541,269.67653,340.98511Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#6c63ff"
                    />
                    <path
                      d="M980.5,723.35511c0,24.30053-57.75527,77-129,77s-129-52.69947-129-77,57.75527-11,129-11S980.5,699.05458,980.5,723.35511Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#3f3d56"
                    />
                    <path
                      d="M980.5,723.35511c0,24.30053-57.75527,77-129,77s-129-52.69947-129-77,57.75527-11,129-11S980.5,699.05458,980.5,723.35511Z"
                      transform="translate(-219.5 -99.64489)"
                      opacity="0.1"
                    />
                    <ellipse
                      cx="632"
                      cy="623.71023"
                      rx="129"
                      ry="44"
                      fill="#3f3d56"
                    />
                    <rect
                      x="76"
                      y="301.71023"
                      width="410"
                      height="234"
                      fill="#f1f1f1"
                    />
                    <ellipse
                      cx="677.5"
                      cy="40.71023"
                      rx="39.5"
                      ry="37"
                      fill="#2f2e41"
                    />
                    <path
                      d="M782,370.85511l-10,14s-48,10-30,25,44-14,44-14l14-18Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#ffb8b8"
                    />
                    <path
                      d="M834,211.85511s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#6c63ff"
                    />
                    <path
                      d="M834,211.85511s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z"
                      transform="translate(-219.5 -99.64489)"
                      opacity="0.1"
                    />
                    <path
                      d="M874,160.85511s-1,39-13,41-8,15-8,15,39,23,65,0l5-12s-18-13-10-31Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#ffb8b8"
                    />
                    <path
                      d="M807,400.85511s-59,110-37,144,55,104,60,104,33-14,31-23-32-76-40-82-4-22-3-23,34-54,34-54-1,84,3,97-1,106,4,110,28,11,32,5,16-97,8-118l15-144Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#2f2e41"
                    />
                    <path
                      d="M861,667.85511l-25,46s-36,26-11,30,40-6,40-6l22-16v-46Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#2f2e41"
                    />
                    <path
                      d="M827,641.85511l13,31s5,13,0,16-19,21-10,23a29.29892,29.29892,0,0,0,5.49537.5463,55.56588,55.56588,0,0,0,40.39769-16.43935L884,687.85511s-27.77007-63.94827-27.385-63.47413S827,641.85511,827,641.85511Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#2f2e41"
                    />
                    <circle cx="679.5" cy="51.21023" r="34" fill="#ffb8b8" />
                    <path
                      d="M918.5,198.35511l-10.5,10.5s-32,12-47,0c0,0,5.5-11.5,5.5-10.5s-43.5,7.5-47.5,25.5,3,49,3,49-28,132-17,135,114,28,113,9,8-97,8-97l35-67s-5-22-17-29S918.5,198.35511,918.5,198.35511Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#6c63ff"
                    />
                    <path
                      d="M874,393.85511l-13,8s-50,34-24,40,41-24,41-24l10-12Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#ffb8b8"
                    />
                    <path
                      d="M948,246.85511l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942L916,261.85511Z"
                      transform="translate(-219.5 -99.64489)"
                      opacity="0.1"
                    />
                    <path
                      d="M952,243.85511l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942L920,258.85511Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#6c63ff"
                    />
                    <path
                      d="M884.93835,102.56024s-11.55751-4.20273-27.31774,4.72807l8.40545,2.10136s-12.60818,1.05069-14.18421,17.8616h5.77876s-3.67739,14.70955,0,18.91228l2.364-4.4654,6.82944,13.65887,1.576-6.82943,3.15205,1.05068,2.10136-11.03216s5.25341,7.88011,9.45614,8.40545v-6.82943s11.55751,13.13353,15.23489,12.60819l-5.25341-7.35478,7.35478,1.576-3.15205-5.25341,18.91228,5.25341-4.20273-5.25341,13.13353,4.20273,6.30409,2.62671s8.9308-20.48831-3.67738-34.67252S896.75852,96.51882,884.93835,102.56024Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#2f2e41"
                    />
                    <path
                      d="M554.59811,528.43759q-1.25967.794-2.60744,1.47382a30.87649,30.87649,0,0,1-41.42627-13.64933l-6.65209-13.19072,4.465-2.251,6.65209,13.19073a25.84163,25.84163,0,1,0,46.14646-23.27365l-27.93638-55.39357A25.84162,25.84162,0,1,0,487.093,458.61749l9.89088,19.612-4.465,2.251L482.628,460.86852a30.84193,30.84193,0,0,1,55.07639-27.7757l27.93637,55.39356a30.84665,30.84665,0,0,1-11.04267,39.95121Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#3f3d56"
                    />
                    <path
                      d="M557.3,596.80949q-1.24231.783-2.57748,1.45725a30.87615,30.87615,0,0,1-41.42627-13.64933l-27.93638-55.39356a30.84193,30.84193,0,0,1,55.07639-27.77571L547.77488,516l-4.465,2.251-7.33863-14.55188a25.84162,25.84162,0,1,0-46.14645,23.27365l27.93637,55.39356a25.84163,25.84163,0,1,0,46.14646-23.27365l-9.61614-19.0671,4.465-2.251,9.61614,19.0671A30.88584,30.88584,0,0,1,557.3,596.80949Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#3f3d56"
                    />
                    <path
                      d="M756.5,637.35511h-462v-257h462Zm-460-2h458v-253h-458Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#2f2e41"
                    />
                  </svg>
                </div>
                <p>
                  Tot ce este în interiorul acestui link devine la rîndul lui,
                  un link.
                </p>
              </div>
            </a>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="#">
  <div style="
  border: 1px solid #eaeaea;
  border-radius: 15px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 1em;
  width: 500px;
  margin: auto;
  text-align: center;
  ">
    <h2 style="font-size: 30px;">Primul exemplu are un div cu elemente în interior, plasat în interiorul unui link</h2>
    <div>
      <svg id="a5349118-8809-40c5-ab34-fa23ee5ede74" width="200" height="200" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="761" height="700.71023" viewBox="0 0 761 700.71023"><title>link</title><path d="M261.134,348.56808c12.42842,23.049,38.806,32.94351,38.806,32.94351s6.22712-27.47543-6.2013-50.52448-38.806-32.94351-38.806-32.94351S248.70559,325.519,261.134,348.56808Z" transform="translate(-219.5 -99.64489)" fill="#2f2e41"/><path d="M269.67653,340.98511c22.43841,13.49969,31.08016,40.3138,31.08016,40.3138s-27.73812,4.92678-50.17653-8.57291S219.5,332.4122,219.5,332.4122,247.23811,327.48541,269.67653,340.98511Z" transform="translate(-219.5 -99.64489)" fill="#6c63ff"/><path d="M980.5,723.35511c0,24.30053-57.75527,77-129,77s-129-52.69947-129-77,57.75527-11,129-11S980.5,699.05458,980.5,723.35511Z" transform="translate(-219.5 -99.64489)" fill="#3f3d56"/><path d="M980.5,723.35511c0,24.30053-57.75527,77-129,77s-129-52.69947-129-77,57.75527-11,129-11S980.5,699.05458,980.5,723.35511Z" transform="translate(-219.5 -99.64489)" opacity="0.1"/><ellipse cx="632" cy="623.71023" rx="129" ry="44" fill="#3f3d56"/><rect x="76" y="301.71023" width="410" height="234" fill="#f1f1f1"/><ellipse cx="677.5" cy="40.71023" rx="39.5" ry="37" fill="#2f2e41"/><path d="M782,370.85511l-10,14s-48,10-30,25,44-14,44-14l14-18Z" transform="translate(-219.5 -99.64489)" fill="#ffb8b8"/><path d="M834,211.85511s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z" transform="translate(-219.5 -99.64489)" fill="#6c63ff"/><path d="M834,211.85511s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z" transform="translate(-219.5 -99.64489)" opacity="0.1"/><path d="M874,160.85511s-1,39-13,41-8,15-8,15,39,23,65,0l5-12s-18-13-10-31Z" transform="translate(-219.5 -99.64489)" fill="#ffb8b8"/><path d="M807,400.85511s-59,110-37,144,55,104,60,104,33-14,31-23-32-76-40-82-4-22-3-23,34-54,34-54-1,84,3,97-1,106,4,110,28,11,32,5,16-97,8-118l15-144Z" transform="translate(-219.5 -99.64489)" fill="#2f2e41"/><path d="M861,667.85511l-25,46s-36,26-11,30,40-6,40-6l22-16v-46Z" transform="translate(-219.5 -99.64489)" fill="#2f2e41"/><path d="M827,641.85511l13,31s5,13,0,16-19,21-10,23a29.29892,29.29892,0,0,0,5.49537.5463,55.56588,55.56588,0,0,0,40.39769-16.43935L884,687.85511s-27.77007-63.94827-27.385-63.47413S827,641.85511,827,641.85511Z" transform="translate(-219.5 -99.64489)" fill="#2f2e41"/><circle cx="679.5" cy="51.21023" r="34" fill="#ffb8b8"/><path d="M918.5,198.35511l-10.5,10.5s-32,12-47,0c0,0,5.5-11.5,5.5-10.5s-43.5,7.5-47.5,25.5,3,49,3,49-28,132-17,135,114,28,113,9,8-97,8-97l35-67s-5-22-17-29S918.5,198.35511,918.5,198.35511Z" transform="translate(-219.5 -99.64489)" fill="#6c63ff"/><path d="M874,393.85511l-13,8s-50,34-24,40,41-24,41-24l10-12Z" transform="translate(-219.5 -99.64489)" fill="#ffb8b8"/><path d="M948,246.85511l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942L916,261.85511Z" transform="translate(-219.5 -99.64489)" opacity="0.1"/><path d="M952,243.85511l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942L920,258.85511Z" transform="translate(-219.5 -99.64489)" fill="#6c63ff"/><path d="M884.93835,102.56024s-11.55751-4.20273-27.31774,4.72807l8.40545,2.10136s-12.60818,1.05069-14.18421,17.8616h5.77876s-3.67739,14.70955,0,18.91228l2.364-4.4654,6.82944,13.65887,1.576-6.82943,3.15205,1.05068,2.10136-11.03216s5.25341,7.88011,9.45614,8.40545v-6.82943s11.55751,13.13353,15.23489,12.60819l-5.25341-7.35478,7.35478,1.576-3.15205-5.25341,18.91228,5.25341-4.20273-5.25341,13.13353,4.20273,6.30409,2.62671s8.9308-20.48831-3.67738-34.67252S896.75852,96.51882,884.93835,102.56024Z" transform="translate(-219.5 -99.64489)" fill="#2f2e41"/><path d="M554.59811,528.43759q-1.25967.794-2.60744,1.47382a30.87649,30.87649,0,0,1-41.42627-13.64933l-6.65209-13.19072,4.465-2.251,6.65209,13.19073a25.84163,25.84163,0,1,0,46.14646-23.27365l-27.93638-55.39357A25.84162,25.84162,0,1,0,487.093,458.61749l9.89088,19.612-4.465,2.251L482.628,460.86852a30.84193,30.84193,0,0,1,55.07639-27.7757l27.93637,55.39356a30.84665,30.84665,0,0,1-11.04267,39.95121Z" transform="translate(-219.5 -99.64489)" fill="#3f3d56"/><path d="M557.3,596.80949q-1.24231.783-2.57748,1.45725a30.87615,30.87615,0,0,1-41.42627-13.64933l-27.93638-55.39356a30.84193,30.84193,0,0,1,55.07639-27.77571L547.77488,516l-4.465,2.251-7.33863-14.55188a25.84162,25.84162,0,1,0-46.14645,23.27365l27.93637,55.39356a25.84163,25.84163,0,1,0,46.14646-23.27365l-9.61614-19.0671,4.465-2.251,9.61614,19.0671A30.88584,30.88584,0,0,1,557.3,596.80949Z" transform="translate(-219.5 -99.64489)" fill="#3f3d56"/><path d="M756.5,637.35511h-462v-257h462Zm-460-2h458v-253h-458Z" transform="translate(-219.5 -99.64489)" fill="#2f2e41"/></svg>
    </div>
    <p>Tot ce este în interiorul acestui link devine la rîndul lui, un link.</p>
  </div>
</a>
`}
          />
          <p>
            Al doilea exemplu are un link în titlu și link-ul are un
            <a href="/css/pseudo-elements"> pseudo-element</a>
            {' '}
            definit care
            "acoperă" întregul card.
          </p>
          <p>
            Această modalitate are de asemenea implicații. Și în acest caz e
            destul de greu să selectem textul din interior, dar generează un
            comportament mai intuitiv pentru tehnologiile assistive, lucru pe
            care e bine să-l avem în vedere când scriem cod pentru aplicațiile
            noastre.
          </p>
          <p>
            Exemplul acesta ne oferă și posibilitatea să includem link-uri
            multiple. Când vine vorba să includem link-uri în interiorul altor
            link-uri, lucrurile se complică puțin. Un articol mai detaliat pe
            această temă găsim aici:
            <a
              href="https://css-tricks.com/nested-links/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              nested links
            </a>
          </p>
          <DemoPreview>
            <a href="#" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  position: 'relative',
                  border: '1px solid #eaeaea',
                  borderRadius: '15px',
                  boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
                  padding: '1em',
                  width: '500px',
                  backgroundColor: '#fff',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                <h2 style={{ fontSize: '30px' }}>
                  <a href="#0">Titlu </a>
                </h2>
                <div>
                  <svg
                    id="a5349118-8809-40c5-ab34-fa23ee5ede74"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="761"
                    height="700.71023"
                    viewBox="0 0 761 700.71023"
                  >
                    <title>link</title>
                    <path
                      d="M261.134,348.56808c12.42842,23.049,38.806,32.94351,38.806,32.94351s6.22712-27.47543-6.2013-50.52448-38.806-32.94351-38.806-32.94351S248.70559,325.519,261.134,348.56808Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#2f2e41"
                    />
                    <path
                      d="M269.67653,340.98511c22.43841,13.49969,31.08016,40.3138,31.08016,40.3138s-27.73812,4.92678-50.17653-8.57291S219.5,332.4122,219.5,332.4122,247.23811,327.48541,269.67653,340.98511Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#6c63ff"
                    />
                    <path
                      d="M980.5,723.35511c0,24.30053-57.75527,77-129,77s-129-52.69947-129-77,57.75527-11,129-11S980.5,699.05458,980.5,723.35511Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#3f3d56"
                    />
                    <path
                      d="M980.5,723.35511c0,24.30053-57.75527,77-129,77s-129-52.69947-129-77,57.75527-11,129-11S980.5,699.05458,980.5,723.35511Z"
                      transform="translate(-219.5 -99.64489)"
                      opacity="0.1"
                    />
                    <ellipse
                      cx="632"
                      cy="623.71023"
                      rx="129"
                      ry="44"
                      fill="#3f3d56"
                    />
                    <rect
                      x="76"
                      y="301.71023"
                      width="410"
                      height="234"
                      fill="#f1f1f1"
                    />
                    <ellipse
                      cx="677.5"
                      cy="40.71023"
                      rx="39.5"
                      ry="37"
                      fill="#2f2e41"
                    />
                    <path
                      d="M782,370.85511l-10,14s-48,10-30,25,44-14,44-14l14-18Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#ffb8b8"
                    />
                    <path
                      d="M834,211.85511s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#6c63ff"
                    />
                    <path
                      d="M834,211.85511s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z"
                      transform="translate(-219.5 -99.64489)"
                      opacity="0.1"
                    />
                    <path
                      d="M874,160.85511s-1,39-13,41-8,15-8,15,39,23,65,0l5-12s-18-13-10-31Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#ffb8b8"
                    />
                    <path
                      d="M807,400.85511s-59,110-37,144,55,104,60,104,33-14,31-23-32-76-40-82-4-22-3-23,34-54,34-54-1,84,3,97-1,106,4,110,28,11,32,5,16-97,8-118l15-144Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#2f2e41"
                    />
                    <path
                      d="M861,667.85511l-25,46s-36,26-11,30,40-6,40-6l22-16v-46Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#2f2e41"
                    />
                    <path
                      d="M827,641.85511l13,31s5,13,0,16-19,21-10,23a29.29892,29.29892,0,0,0,5.49537.5463,55.56588,55.56588,0,0,0,40.39769-16.43935L884,687.85511s-27.77007-63.94827-27.385-63.47413S827,641.85511,827,641.85511Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#2f2e41"
                    />
                    <circle cx="679.5" cy="51.21023" r="34" fill="#ffb8b8" />
                    <path
                      d="M918.5,198.35511l-10.5,10.5s-32,12-47,0c0,0,5.5-11.5,5.5-10.5s-43.5,7.5-47.5,25.5,3,49,3,49-28,132-17,135,114,28,113,9,8-97,8-97l35-67s-5-22-17-29S918.5,198.35511,918.5,198.35511Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#6c63ff"
                    />
                    <path
                      d="M874,393.85511l-13,8s-50,34-24,40,41-24,41-24l10-12Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#ffb8b8"
                    />
                    <path
                      d="M948,246.85511l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942L916,261.85511Z"
                      transform="translate(-219.5 -99.64489)"
                      opacity="0.1"
                    />
                    <path
                      d="M952,243.85511l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942L920,258.85511Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#6c63ff"
                    />
                    <path
                      d="M884.93835,102.56024s-11.55751-4.20273-27.31774,4.72807l8.40545,2.10136s-12.60818,1.05069-14.18421,17.8616h5.77876s-3.67739,14.70955,0,18.91228l2.364-4.4654,6.82944,13.65887,1.576-6.82943,3.15205,1.05068,2.10136-11.03216s5.25341,7.88011,9.45614,8.40545v-6.82943s11.55751,13.13353,15.23489,12.60819l-5.25341-7.35478,7.35478,1.576-3.15205-5.25341,18.91228,5.25341-4.20273-5.25341,13.13353,4.20273,6.30409,2.62671s8.9308-20.48831-3.67738-34.67252S896.75852,96.51882,884.93835,102.56024Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#2f2e41"
                    />
                    <path
                      d="M554.59811,528.43759q-1.25967.794-2.60744,1.47382a30.87649,30.87649,0,0,1-41.42627-13.64933l-6.65209-13.19072,4.465-2.251,6.65209,13.19073a25.84163,25.84163,0,1,0,46.14646-23.27365l-27.93638-55.39357A25.84162,25.84162,0,1,0,487.093,458.61749l9.89088,19.612-4.465,2.251L482.628,460.86852a30.84193,30.84193,0,0,1,55.07639-27.7757l27.93637,55.39356a30.84665,30.84665,0,0,1-11.04267,39.95121Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#3f3d56"
                    />
                    <path
                      d="M557.3,596.80949q-1.24231.783-2.57748,1.45725a30.87615,30.87615,0,0,1-41.42627-13.64933l-27.93638-55.39356a30.84193,30.84193,0,0,1,55.07639-27.77571L547.77488,516l-4.465,2.251-7.33863-14.55188a25.84162,25.84162,0,1,0-46.14645,23.27365l27.93637,55.39356a25.84163,25.84163,0,1,0,46.14646-23.27365l-9.61614-19.0671,4.465-2.251,9.61614,19.0671A30.88584,30.88584,0,0,1,557.3,596.80949Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#3f3d56"
                    />
                    <path
                      d="M756.5,637.35511h-462v-257h462Zm-460-2h458v-253h-458Z"
                      transform="translate(-219.5 -99.64489)"
                      fill="#2f2e41"
                    />
                  </svg>
                </div>
                <p>
                  Tot ce este în interiorul acestui link devine la rândul lui un
                  link.
                </p>
              </div>
            </a>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<style>
  h2 a::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
<div style="
  position: relative;
  border: 1px solid #eaeaea;
  border-radius: 15px; 
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 1px; 
  width: 500px; 
  background-color: #fff;
  margin: auto;
  text-align: center;">
  <h2 style="font-size: 30px;">
    <a href="#0">Al doilea exemplu are un link în titlu și link-ul are un pseudo-element definit care "acoperă" întregul card.</a>
  </h2>
  <div>
    <svg id="a5349118-8809-40c5-ab34-fa23ee5ede74" width="200" height="200" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="761" height="700.71023" viewBox="0 0 761 700.71023"><title>link</title><path d="M261.134,348.56808c12.42842,23.049,38.806,32.94351,38.806,32.94351s6.22712-27.47543-6.2013-50.52448-38.806-32.94351-38.806-32.94351S248.70559,325.519,261.134,348.56808Z" transform="translate(-219.5 -99.64489)" fill="#2f2e41"/><path d="M269.67653,340.98511c22.43841,13.49969,31.08016,40.3138,31.08016,40.3138s-27.73812,4.92678-50.17653-8.57291S219.5,332.4122,219.5,332.4122,247.23811,327.48541,269.67653,340.98511Z" transform="translate(-219.5 -99.64489)" fill="#6c63ff"/><path d="M980.5,723.35511c0,24.30053-57.75527,77-129,77s-129-52.69947-129-77,57.75527-11,129-11S980.5,699.05458,980.5,723.35511Z" transform="translate(-219.5 -99.64489)" fill="#3f3d56"/><path d="M980.5,723.35511c0,24.30053-57.75527,77-129,77s-129-52.69947-129-77,57.75527-11,129-11S980.5,699.05458,980.5,723.35511Z" transform="translate(-219.5 -99.64489)" opacity="0.1"/><ellipse cx="632" cy="623.71023" rx="129" ry="44" fill="#3f3d56"/><rect x="76" y="301.71023" width="410" height="234" fill="#f1f1f1"/><ellipse cx="677.5" cy="40.71023" rx="39.5" ry="37" fill="#2f2e41"/><path d="M782,370.85511l-10,14s-48,10-30,25,44-14,44-14l14-18Z" transform="translate(-219.5 -99.64489)" fill="#ffb8b8"/><path d="M834,211.85511s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z" transform="translate(-219.5 -99.64489)" fill="#6c63ff"/><path d="M834,211.85511s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z" transform="translate(-219.5 -99.64489)" opacity="0.1"/><path d="M874,160.85511s-1,39-13,41-8,15-8,15,39,23,65,0l5-12s-18-13-10-31Z" transform="translate(-219.5 -99.64489)" fill="#ffb8b8"/><path d="M807,400.85511s-59,110-37,144,55,104,60,104,33-14,31-23-32-76-40-82-4-22-3-23,34-54,34-54-1,84,3,97-1,106,4,110,28,11,32,5,16-97,8-118l15-144Z" transform="translate(-219.5 -99.64489)" fill="#2f2e41"/><path d="M861,667.85511l-25,46s-36,26-11,30,40-6,40-6l22-16v-46Z" transform="translate(-219.5 -99.64489)" fill="#2f2e41"/><path d="M827,641.85511l13,31s5,13,0,16-19,21-10,23a29.29892,29.29892,0,0,0,5.49537.5463,55.56588,55.56588,0,0,0,40.39769-16.43935L884,687.85511s-27.77007-63.94827-27.385-63.47413S827,641.85511,827,641.85511Z" transform="translate(-219.5 -99.64489)" fill="#2f2e41"/><circle cx="679.5" cy="51.21023" r="34" fill="#ffb8b8"/><path d="M918.5,198.35511l-10.5,10.5s-32,12-47,0c0,0,5.5-11.5,5.5-10.5s-43.5,7.5-47.5,25.5,3,49,3,49-28,132-17,135,114,28,113,9,8-97,8-97l35-67s-5-22-17-29S918.5,198.35511,918.5,198.35511Z" transform="translate(-219.5 -99.64489)" fill="#6c63ff"/><path d="M874,393.85511l-13,8s-50,34-24,40,41-24,41-24l10-12Z" transform="translate(-219.5 -99.64489)" fill="#ffb8b8"/><path d="M948,246.85511l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942L916,261.85511Z" transform="translate(-219.5 -99.64489)" opacity="0.1"/><path d="M952,243.85511l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942L920,258.85511Z" transform="translate(-219.5 -99.64489)" fill="#6c63ff"/><path d="M884.93835,102.56024s-11.55751-4.20273-27.31774,4.72807l8.40545,2.10136s-12.60818,1.05069-14.18421,17.8616h5.77876s-3.67739,14.70955,0,18.91228l2.364-4.4654,6.82944,13.65887,1.576-6.82943,3.15205,1.05068,2.10136-11.03216s5.25341,7.88011,9.45614,8.40545v-6.82943s11.55751,13.13353,15.23489,12.60819l-5.25341-7.35478,7.35478,1.576-3.15205-5.25341,18.91228,5.25341-4.20273-5.25341,13.13353,4.20273,6.30409,2.62671s8.9308-20.48831-3.67738-34.67252S896.75852,96.51882,884.93835,102.56024Z" transform="translate(-219.5 -99.64489)" fill="#2f2e41"/><path d="M554.59811,528.43759q-1.25967.794-2.60744,1.47382a30.87649,30.87649,0,0,1-41.42627-13.64933l-6.65209-13.19072,4.465-2.251,6.65209,13.19073a25.84163,25.84163,0,1,0,46.14646-23.27365l-27.93638-55.39357A25.84162,25.84162,0,1,0,487.093,458.61749l9.89088,19.612-4.465,2.251L482.628,460.86852a30.84193,30.84193,0,0,1,55.07639-27.7757l27.93637,55.39356a30.84665,30.84665,0,0,1-11.04267,39.95121Z" transform="translate(-219.5 -99.64489)" fill="#3f3d56"/><path d="M557.3,596.80949q-1.24231.783-2.57748,1.45725a30.87615,30.87615,0,0,1-41.42627-13.64933l-27.93638-55.39356a30.84193,30.84193,0,0,1,55.07639-27.77571L547.77488,516l-4.465,2.251-7.33863-14.55188a25.84162,25.84162,0,1,0-46.14645,23.27365l27.93637,55.39356a25.84163,25.84163,0,1,0,46.14646-23.27365l-9.61614-19.0671,4.465-2.251,9.61614,19.0671A30.88584,30.88584,0,0,1,557.3,596.80949Z" transform="translate(-219.5 -99.64489)" fill="#3f3d56"/><path d="M756.5,637.35511h-462v-257h462Zm-460-2h458v-253h-458Z" transform="translate(-219.5 -99.64489)" fill="#2f2e41"/></svg>
  </div>
  <p>Tot ce este în interiorul acestui link devine la rîndul lui un link.</p>
</div>
`}
          />
          <LessonTip icon={faQuestionCircle}>
            Atributul
            {' '}
            <FormattedText as="strong">style</FormattedText>
            {' '}
            este
            folosit pentru a adăuga reguli CSS elementelor. Incă nu am ajuns la
            acel capitol deci e absolut normal să nu știi ce face.
            <br />
            {' '}
            <br />
            Totuși, te rugăm să-l pui acolo pentru a obține același rezultat ca
            cel de mai sus.
          </LessonTip>
        </Demo>
        <Footer />
      </>
    </>
  );
}
