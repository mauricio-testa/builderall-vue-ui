import { ASPECT, ASPECTMID } from './aspect'

import BUILogo from './BUILogo'
import BUIFileTransfer from './BUIFileTransfer'
import BUIServer from './BUIServer'
import BUIServerSettings from './BUIServerSettings'

const BUIExit = '<svg ' + ASPECT + ' viewBox="0 0 22 22" ><g data-name="Grupo 3283"><path data-name="Caminho 399" d="M19.24 19.037V.997h-4.81v2.4h2.4v18.045h4.81v-2.4z" fill="#f08e99"/><path data-name="Caminho 487" d="M14.43 1.2V0H2.4v19.24H0v2.4h14.43V1.2z" fill="#fa4b57" opacity=".2"/><path data-name="Caminho 398" d="M14.43 1.2V0H2.4v19.24H0v2.4h14.43V1.2zm-2.4 18.037H4.81V2.4h7.215zm-3.607-9.62h2.4v2.4h-2.4z" fill="#fa4b57"/></g></svg>'
const BUILang = '<svg ' + ASPECT + ' viewBox="0 0 22 22"><path id="Caminho_394" data-name="Caminho 394" d="M12.87,15.07l-2.54-2.51.03-.03A17.519,17.519,0,0,0,14.07,6H17V4H10V2H8V4H1V5.99H12.17A15.713,15.713,0,0,1,9,11.35,15.645,15.645,0,0,1,6.69,8h-2a17.562,17.562,0,0,0,2.98,4.56L2.58,17.58,4,19l5-5,3.11,3.11.76-2.04Z" transform="translate(-1 -2)" fill="#779af9"/><path id="Caminho_400" data-name="Caminho 400" d="M18.5,10h-2L12,22h2l1.12-3h4.75L21,22h2Zm-2.62,7,1.62-4.33L19.12,17H15.88Z" transform="translate(-1 -2)" fill="#4a79f7"/></svg>'
const BUIPencil = '<svg ' + ASPECT + ' viewBox="0 0 22 22"><path id="Caminho_444" data-name="Caminho 444" d="M3,19.623V24H7.374l12.9-12.9L15.9,6.722ZM23.659,7.713a1.162,1.162,0,0,0,0-1.645l-2.73-2.73a1.162,1.162,0,0,0-1.645,0L17.15,5.473l4.374,4.374,2.135-2.135Z" transform="translate(-3 -2.998)" fill="#0080fc"/></svg>'
const BUITrash = '<svg ' + ASPECT + ' viewBox="0 0 14 17.5"><g transform="translate(-7.997 -4)"><path fill="#fa4b57" d="M12.847,20a.853.853,0,0,0-.847.859v7.907a3.183,3.183,0,0,0,3.159,3.205h5.481A3.183,3.183,0,0,0,23.8,28.766V20.859A.853.853,0,0,0,22.954,20Zm2.693,8.38a.59.59,0,1,1-1.18,0V22.993a.59.59,0,1,1,1.18,0Zm2.95,0a.59.59,0,1,1-1.18,0V22.993a.59.59,0,1,1,1.18,0Zm2.95,0a.59.59,0,1,1-1.18,0V22.993a.59.59,0,1,1,1.18,0Z" transform="translate(-2.805 -11.27)"/><path fill="#fa4b57" d="M22.192,6.652a.93.93,0,0,0-.946-.856H17.739a.28.28,0,0,1-.278-.281V5.2A1.19,1.19,0,0,0,16.278,4H13.912a1.19,1.19,0,0,0-1.183,1.2v.317a.28.28,0,0,1-.278.281H8.944A.93.93,0,0,0,8,6.652a.9.9,0,0,0,.245.662.882.882,0,0,0,.642.278h12.42a.882.882,0,0,0,.642-.278.9.9,0,0,0,.245-.662ZM16.278,5.5a.3.3,0,0,1-.3.3H14.208a.3.3,0,0,1,0-.6h1.774A.3.3,0,0,1,16.278,5.5Z" transform="translate(0)"/></g></svg>'
const BUIUpload = '<svg ' + ASPECT + ' viewBox="0 0 18 20"><g transform="translate(-3 -2)"><path fill="#0080fc" d="M15.707,5.293l-3-3a1,1,0,0,0-1.414,0l-3,3A1,1,0,1,0,9.707,6.707L11,5.414V17a1,1,0,0,0,2,0V5.414l1.293,1.293a1,1,0,1,0,1.414-1.414Z"/><path fill="#bad9f7" d="M18,9H13v8a1,1,0,0,1-2,0V9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12a3,3,0,0,0-3-3Z"/></g></svg>'
const BUIGear = '<svg ' + ASPECT + ' viewBox="0 0 22.034 21.434"><g id="Grupo_3281" data-name="Grupo 3281" transform="translate(-3658.61 -1910)"><path id="Caminho_486" data-name="Caminho 486" d="M228.351,196.129a1.631,1.631,0,0,0-1.651,1.607v1.755a1.631,1.631,0,0,0,1.651,1.607h.725a8.224,8.224,0,0,0,.725,1.708l-.515.5a1.578,1.578,0,0,0,0,2.273l1.272,1.238a1.685,1.685,0,0,0,2.336,0l.515-.5a8.715,8.715,0,0,0,1.756.705v.705a1.631,1.631,0,0,0,1.651,1.607h1.8a1.631,1.631,0,0,0,1.651-1.607v-.705a8.715,8.715,0,0,0,1.756-.705l.515.5a1.685,1.685,0,0,0,2.336,0l1.272-1.238a1.569,1.569,0,0,0,0-2.265l-.515-.5a8.224,8.224,0,0,0,.725-1.708h.725a1.631,1.631,0,0,0,1.651-1.607v-1.755a1.631,1.631,0,0,0-1.651-1.607h-.725a8.222,8.222,0,0,0-.725-1.708l.515-.5a1.578,1.578,0,0,0,0-2.273l-1.289-1.238a1.685,1.685,0,0,0-2.336,0l-.515.5a8.711,8.711,0,0,0-1.756-.705v-.705A1.631,1.631,0,0,0,238.6,187.9h-1.8a1.631,1.631,0,0,0-1.651,1.607v.705a8.711,8.711,0,0,0-1.756.705l-.515-.5a1.685,1.685,0,0,0-2.336,0l-1.272,1.238a1.578,1.578,0,0,0,0,2.273l.515.5a8.224,8.224,0,0,0-.725,1.708h-.709Z" transform="translate(3431.91 1722.1)" fill="#4a79f7" opacity="0.196"/><path id="Caminho_395" data-name="Caminho 395" d="M308.324,274.089a4.7,4.7,0,1,0-4.824-4.694A4.769,4.769,0,0,0,308.324,274.089Zm0-7.476a2.775,2.775,0,1,1-2.851,2.774A2.819,2.819,0,0,1,308.324,266.612Z" transform="translate(3361.295 1651.301)" fill="#779af9"/><path id="Caminho_396" data-name="Caminho 396" d="M228.351,196.129a1.631,1.631,0,0,0-1.651,1.607v1.755a1.631,1.631,0,0,0,1.651,1.607h.725a8.224,8.224,0,0,0,.725,1.708l-.515.5a1.578,1.578,0,0,0,0,2.273l1.272,1.238a1.685,1.685,0,0,0,2.336,0l.515-.5a8.715,8.715,0,0,0,1.756.705v.705a1.631,1.631,0,0,0,1.651,1.607h1.8a1.631,1.631,0,0,0,1.651-1.607v-.705a8.715,8.715,0,0,0,1.756-.705l.515.5a1.685,1.685,0,0,0,2.336,0l1.272-1.238a1.569,1.569,0,0,0,0-2.265l-.515-.5a8.224,8.224,0,0,0,.725-1.708h.725a1.631,1.631,0,0,0,1.651-1.607v-1.755a1.631,1.631,0,0,0-1.651-1.607h-.725a8.222,8.222,0,0,0-.725-1.708l.515-.5a1.578,1.578,0,0,0,0-2.273l-1.289-1.238a1.685,1.685,0,0,0-2.336,0l-.515.5a8.711,8.711,0,0,0-1.756-.705v-.705A1.631,1.631,0,0,0,238.6,187.9h-1.8a1.631,1.631,0,0,0-1.651,1.607v.705a8.711,8.711,0,0,0-1.756.705l-.515-.5a1.685,1.685,0,0,0-2.336,0l-1.272,1.238a1.578,1.578,0,0,0,0,2.273l.515.5a8.224,8.224,0,0,0-.725,1.708h-.709Zm1.5,1.92a.977.977,0,0,0,.966-.776,6.663,6.663,0,0,1,1.047-2.469.942.942,0,0,0-.121-1.215l-.83-.807.813-.792.829.807a1.008,1.008,0,0,0,1.248.118,7.056,7.056,0,0,1,2.537-1.019.971.971,0,0,0,.8-.94v-1.144h1.152v1.144a.957.957,0,0,0,.8.94,7.056,7.056,0,0,1,2.537,1.019,1.009,1.009,0,0,0,1.248-.118l.83-.807.813.792-.83.807a.941.941,0,0,0-.121,1.215,6.663,6.663,0,0,1,1.047,2.469.984.984,0,0,0,.966.776h1.176v1.121h-1.176a.977.977,0,0,0-.966.776,6.663,6.663,0,0,1-1.047,2.469.942.942,0,0,0,.121,1.215l.83.807-.813.791-.83-.807a1.008,1.008,0,0,0-1.248-.118,7.215,7.215,0,0,1-2.537,1.027.971.971,0,0,0-.8.94v1.144h-1.152v-1.144a.958.958,0,0,0-.8-.94A6.932,6.932,0,0,1,233.8,204.3a1.019,1.019,0,0,0-1.248.118l-.829.807-.813-.791.83-.807a.941.941,0,0,0,.121-1.215,6.663,6.663,0,0,1-1.047-2.469.984.984,0,0,0-.966-.776h-1.176v-1.121Z" transform="translate(3431.91 1722.1)" fill="#4a79f7"/></g></svg>'
const BUIPlus = '<svg ' + ASPECT + ' viewBox="0 0 17.405 17.405"><path id="Caminho_436" data-name="Caminho 436" d="M7.894,6.154,11.947,2.1A1.231,1.231,0,1,0,10.206.36L6.154,4.413,2.1.36A1.231,1.231,0,1,0,.36,2.1L4.413,6.154.36,10.206a1.231,1.231,0,1,0,1.74,1.74L6.154,7.894l4.053,4.053a1.231,1.231,0,1,0,1.74-1.74Z" transform="translate(8.702) rotate(45)" fill="#0080fc"/></svg>'
const BUIMenuBurger = '<svg ' + ASPECTMID + ' viewBox="0 0 29.399 17.676"> <path id="list" d="M1.291,17.676a1.692,1.692,0,0,1,0-3.383H26.909a1.692,1.692,0,0,1,0,3.383Zm.4-7.147a1.691,1.691,0,1,1,0-3.382H27.309a1.691,1.691,0,1,1,0,3.382Zm0-7.147A1.691,1.691,0,1,1,1.692,0H27.309a1.691,1.691,0,1,1,0,3.382Z" transform="translate(0.4)" fill="#2c6bfe"/></svg>'
const BUIMenuBurgerOpen = '<svg ' + ASPECTMID + ' viewBox="0 0 29 17.676"><path id="list" d="M13.291,17.676a1.692,1.692,0,0,1,0-3.383H27.309a1.692,1.692,0,0,1,0,3.383Zm-11.6-7.147a1.691,1.691,0,1,1,0-3.382H27.309a1.691,1.691,0,1,1,0,3.382Zm0-7.147A1.691,1.691,0,1,1,1.692,0H15.709a1.691,1.691,0,1,1,0,3.382Z" fill="#2c6bfe"/></svg>'
const BUIInfo = '<svg ' + ASPECT + ' viewBox="0 0 22 22"><circle id="Elipse_161" data-name="Elipse 161" cx="10.5" cy="10.5" r="10.5" transform="translate(0.5 0.5)" fill="rgba(222,222,222,0.13)" stroke="#707070" stroke-width="1" opacity="0.999"/><path id="Caminho_394" data-name="Caminho 394" d="M1,6A1,1,0,0,1,0,5V1A1,1,0,0,1,2,1V5A1,1,0,0,1,1,6Z" transform="translate(12 16) rotate(180)" fill="#707070"/><path id="Caminho_395" data-name="Caminho 395" d="M1,6A1,1,0,0,1,0,5H0A1,1,0,0,1,2,5H2A1,1,0,0,1,1,6Z" transform="translate(12 12) rotate(180)" fill="#707070"/></svg>'
const BUILink = '<svg ' + ASPECT + ' viewBox="0 0 26.221 31.364"><defs><style>.alink{fill:#41dd9f;}.blink{fill:#4ce2a7;opacity:0.72;}</style></defs><g transform="translate(26.221 7.026) rotate(120)"><path class="alink" d="M11.241,14.052H7.026A7.026,7.026,0,0,1,7.026,0h4.216a1.405,1.405,0,1,1,0,2.81H7.026a4.216,4.216,0,1,0,0,8.431h4.216a1.405,1.405,0,0,1,0,2.81Zm9.836,0H16.862a1.405,1.405,0,0,1,0-2.81h4.216a4.216,4.216,0,0,0,0-8.431H16.862a1.405,1.405,0,1,1,0-2.81h4.216a7.026,7.026,0,0,1,0,14.052Z" transform="translate(0 0)"/><path class="blink" d="M9.836,2.81H1.405a1.405,1.405,0,1,1,0-2.81H9.836a1.405,1.405,0,1,1,0,2.81Z" transform="translate(8.431 5.621)"/></g></svg>'
const BUIDashboard = '<svg ' + ASPECT + ' viewBox="0 0 23 23"><path id="Path" d="M60.864,175H53.677A1.679,1.679,0,0,0,52,176.677v4.312a1.679,1.679,0,0,0,1.677,1.677h7.188a1.679,1.679,0,0,0,1.677-1.677v-4.312A1.679,1.679,0,0,0,60.864,175Z" transform="translate(-52 -175)" fill="#0f7bff"/><g id="Path-2" data-name="Path" transform="translate(-52 -176.25)" fill="none" opacity="0.596"><path d="M60.864,185.833H53.677A1.679,1.679,0,0,0,52,187.51v10.063a1.679,1.679,0,0,0,1.677,1.677h7.188a1.679,1.679,0,0,0,1.677-1.677V187.51A1.679,1.679,0,0,0,60.864,185.833Z" stroke="none"/><path d="M 53.99990081787109 187.8332061767578 L 53.99990081787109 197.2499084472656 L 60.54160308837891 197.2499084472656 L 60.54160308837891 187.8332061767578 L 53.99990081787109 187.8332061767578 M 53.67695236206055 185.8332061767578 L 60.86445236206055 185.8332061767578 C 61.78941345214844 185.8332061767578 62.54160308837891 186.5854797363281 62.54160308837891 187.5104370117188 L 62.54160308837891 197.5729522705078 C 62.54160308837891 198.4977111816406 61.78941345214844 199.2499084472656 60.86445236206055 199.2499084472656 L 53.67695236206055 199.2499084472656 C 52.75218200683594 199.2499084472656 51.99990081787109 198.4977111816406 51.99990081787109 197.5729522705078 L 51.99990081787109 187.5104370117188 C 51.99990081787109 186.5854797363281 52.75218200683594 185.8332061767578 53.67695236206055 185.8332061767578 Z" stroke="none" fill="#0f7bff"/></g><path id="Path-3" data-name="Path" d="M74.948,192.333H67.76a1.679,1.679,0,0,0-1.677,1.677v4.313A1.679,1.679,0,0,0,67.76,200h7.187a1.679,1.679,0,0,0,1.677-1.677V194.01a1.679,1.679,0,0,0-1.677-1.677Z" transform="translate(-53.625 -177)" fill="#0f7bff"/><g id="Path-4" data-name="Path" transform="translate(-53.625 -175)" fill="none" opacity="0.596"><path d="M74.948,175H67.76a1.679,1.679,0,0,0-1.677,1.677v10.062a1.679,1.679,0,0,0,1.677,1.677h7.187a1.679,1.679,0,0,0,1.677-1.677V176.677A1.679,1.679,0,0,0,74.948,175Z" stroke="none"/><path d="M 68.08319854736328 176.9998931884766 L 68.08319854736328 186.4166870117188 L 74.62499237060547 186.4166870117188 L 74.62499237060547 176.9998931884766 L 68.08319854736328 176.9998931884766 M 67.76043701171875 174.9998931884766 L 74.94784545898438 174.9998931884766 C 75.87261199951172 174.9998931884766 76.62499237060547 175.7522735595703 76.62499237060547 176.6770324707031 L 76.62499237060547 186.7394561767578 C 76.62499237060547 187.6644134521484 75.87261199951172 188.4166870117188 74.94784545898438 188.4166870117188 L 67.76043701171875 188.4166870117188 C 66.83547210693359 188.4166870117188 66.08319854736328 187.6644134521484 66.08319854736328 186.7394561767578 L 66.08319854736328 176.6770324707031 C 66.08319854736328 175.7522735595703 66.83547210693359 174.9998931884766 67.76043701171875 174.9998931884766 Z" stroke="none" fill="#0f7bff"/></g></svg>'
const BUIClock = '<svg ' + ASPECT + '  viewBox="0 0 22.168 22.17"><g id="clock-seven" transform="translate(-1.949 -2)"><path id="Caminho_507" data-name="Caminho 507" d="M13,2A11,11,0,1,0,24,13,11,11,0,0,0,13,2Z" transform="translate(0 0)" fill="#d5e9fd" opacity="0.323"/><path id="Caminho_509" data-name="Caminho 509" d="M13.073,2a11.084,11.084,0,1,0,11.1,11.084A11.079,11.079,0,0,0,13.073,2Zm.011,19.951a8.867,8.867,0,1,1,8.867-8.867A8.865,8.865,0,0,1,13.084,21.951ZM12.84,7.542h-.067a.8.8,0,0,0-.8.8v5.232a1.1,1.1,0,0,0,.543.953l4.6,2.76a.793.793,0,1,0,.809-1.363l-4.29-2.549V8.34a.8.8,0,0,0-.8-.8Z" transform="translate(-0.051 0.002)" fill="#0080fc" opacity="0.998"/></g></svg>'
const BUIMail = '<svg ' + ASPECT + ' viewBox="0 0 15.762 13.176"><path id="Caminho_274" data-name="Caminho 274" d="M16.186,4H3.576A1.617,1.617,0,0,0,2,5.647v9.882a1.617,1.617,0,0,0,1.576,1.647H16.186a1.617,1.617,0,0,0,1.576-1.647V5.647A1.617,1.617,0,0,0,16.186,4ZM15.87,7.5l-5.154,3.368a1.5,1.5,0,0,1-1.671,0L3.891,7.5a.712.712,0,0,1-.315-.593A.669.669,0,0,1,4.6,6.314l5.28,3.45,5.28-3.45a.669.669,0,0,1,1.025.593A.712.712,0,0,1,15.87,7.5Z" transform="translate(-2 -4)" fill="#a5b9d5"/></svg>'
const BUIClose = '<svg ' + ASPECT + ' viewBox="0 0 18 18"><path id="Caminho_432" data-name="Caminho 432" d="M17.364,4.636a9,9,0,1,0,0,12.728,9,9,0,0,0,0-12.728Zm-2.127,9.328a.9.9,0,1,1-1.273,1.273L11,12.273,8.037,15.237a.9.9,0,1,1-1.273-1.273L9.728,11,6.764,8.037A.9.9,0,1,1,8.037,6.764L11,9.728l2.964-2.964a.9.9,0,1,1,1.273,1.273L12.273,11Z" transform="translate(-2 -2)" fill="#0080fc" opacity="0.846"/></svg>'
const BUIEye = '<svg ' + ASPECT + ' viewBox="0 0 22 15"><path id="Caminho_527" data-name="Caminho 527" d="M12,4.5A11.827,11.827,0,0,0,1,12a11.817,11.817,0,0,0,22,0A11.827,11.827,0,0,0,12,4.5ZM12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z" transform="translate(-1 -4.5)" fill="#a4bede"/></svg>'
const BUICopy = '<svg ' + ASPECT + ' viewBox="0 0 16.259 16.259"><path id="Caminho_474" data-name="Caminho 474" d="M16.633,2H6.878A1.631,1.631,0,0,0,5.252,3.626v9.755a1.631,1.631,0,0,0,1.626,1.626h9.755a1.631,1.631,0,0,0,1.626-1.626V3.626A1.631,1.631,0,0,0,16.633,2ZM2.813,5.252h0A.815.815,0,0,0,2,6.065V16.633a1.631,1.631,0,0,0,1.626,1.626H14.194a.815.815,0,0,0,.813-.813h0a.815.815,0,0,0-.813-.813H4.439a.815.815,0,0,1-.813-.813V6.065A.815.815,0,0,0,2.813,5.252Z" transform="translate(-2 -2)" fill="#0080fc"/></svg>'
const BUICode = '<svg ' + ASPECT + ' viewBox="0 0 31.34 28.729"><defs><style>.acode,.bcode{fill:#9d9d9d;}.bcode{opacity:0.137;}.ccode{fill:#555353;}</style></defs><g transform="translate(0 -1)"><path class="acode" d="M27.749,29.729H3.591A3.594,3.594,0,0,1,0,26.137V4.591A3.594,3.594,0,0,1,3.591,1H27.749A3.594,3.594,0,0,1,31.34,4.591V26.137A3.594,3.594,0,0,1,27.749,29.729ZM3.591,2.959A1.635,1.635,0,0,0,1.959,4.591V26.137A1.635,1.635,0,0,0,3.591,27.77H27.749a1.635,1.635,0,0,0,1.632-1.632V4.591a1.635,1.635,0,0,0-1.632-1.632Z"/><path class="bcode" d="M27.749,25.158H3.591A3.346,3.346,0,0,1,0,22.138V4.02A3.346,3.346,0,0,1,3.591,1H27.749A3.346,3.346,0,0,1,31.34,4.02C31.34,23.8,29.73,25.158,27.749,25.158Z" transform="translate(0 4.57)"/><path class="acode" d="M30.361,6.459H.979a.979.979,0,1,1,0-1.959H30.361a.979.979,0,1,1,0,1.959Z" transform="translate(0 1.07)"/><path class="ccode" d="M15.48,18.029a.98.98,0,0,1-.743-1.618l1.412-1.647-1.413-1.648a.98.98,0,1,1,1.487-1.276l1.959,2.285a.98.98,0,0,1,0,1.276l-1.959,2.285a.976.976,0,0,1-.743.342Z" transform="translate(4.434 3.211)"/><path class="ccode" d="M9.438,18.03a.98.98,0,0,1-.744-.342L6.735,15.4a.98.98,0,0,1,0-1.276l1.959-2.285a.98.98,0,1,1,1.487,1.276L8.77,14.765l1.413,1.648a.979.979,0,0,1-.744,1.617Z" transform="translate(1.988 3.211)"/><path class="ccode" d="M11.48,20.446a.979.979,0,0,1-.956-1.2l1.959-8.488a.979.979,0,0,1,1.909.439l-1.959,8.488a.977.977,0,0,1-.953.76Z" transform="translate(3.211 2.753)"/></g></svg>'
const BUIMove = '<svg ' + ASPECT + ' viewBox="0 0 8.272 23.6"><defs><style>.amove{fill:#0795ff;}</style></defs><g transform="translate(0 -0.001)"><path class="amove" d="M2.793,16.1H0V12.563a4.522,4.522,0,0,0,2.795-.089V16.1Zm0-12.086h0A4.522,4.522,0,0,0,0,3.922V0H2.793V4.009Z" transform="translate(2.74 3.758)"/><path class="amove" d="M8,38.166h8.272L12.136,34.03Z" transform="translate(-8 -34.029)"/><path class="amove" d="M16.272,47.97H8l4.136,4.122Z" transform="translate(-8 -28.491)"/><circle class="amove" cx="1.5" cy="1.5" r="1.5" transform="translate(2.5 10.5)"/></g></svg>'
const BUIUser = '<svg ' + ASPECT + ' viewBox="0 0 32 32"><path id="User" d="M20,36A16,16,0,1,0,4,20,16,16,0,0,0,20,36ZM19.971,8.617a5.714,5.714,0,1,1-5.714,5.714,5.714,5.714,0,0,1,5.714-5.714ZM12.543,25.04a11.389,11.389,0,0,1,14.96,0,2.354,2.354,0,0,1,0,3.549,11.389,11.389,0,0,1-14.96,0,2.354,2.354,0,0,1-.023-3.549Z" transform="translate(-4 -4)" fill="#0080fc"/></svg>'
const BUISave = '<svg ' + ASPECT + ' viewBox="0 0 19 19"><path id="Caminho_284" data-name="Caminho 284" d="M18.4,3.623A2.118,2.118,0,0,0,16.9,3H5.111A2.111,2.111,0,0,0,3,5.111V19.889A2.117,2.117,0,0,0,5.111,22H19.889A2.117,2.117,0,0,0,22,19.889V8.1a2.075,2.075,0,0,0-.623-1.488L18.4,3.623ZM12.5,19.889a3.167,3.167,0,1,1,3.167-3.167A3.162,3.162,0,0,1,12.5,19.889ZM13.556,9.333H7.222a2.111,2.111,0,1,1,0-4.222h6.333a2.111,2.111,0,1,1,0,4.222Z" transform="translate(-3 -3)" fill="#0080fc"/></svg>'
const BUIBell = '<svg ' + ASPECT + ' viewBox="0 0 15.43 19.834"><g id="Grupo_3335" data-name="Grupo 3335" transform="translate(-1794.9 -1551.832)"><path id="Caminho_582" data-name="Caminho 582" d="M13.657,27.118a2.04,2.04,0,0,0,2.034-2.034H11.623A2.034,2.034,0,0,0,13.657,27.118Z" transform="translate(1788.959 1544.548)" fill="#bed1ea"/><path id="Caminho_581" data-name="Caminho 581" d="M18.233,16.231V11.146c0-3.123-1.668-5.737-4.577-6.428V4.026a1.526,1.526,0,0,0-3.051,0v.692c-2.919.692-4.577,3.3-4.577,6.428v5.086L4.715,17.543a1.017,1.017,0,0,0,.712,1.739h13.4a1.02,1.02,0,0,0,.722-1.739Z" transform="translate(1790.486 1549.332)" fill="#a5b9d5"/></g></svg>'
const BUIPlay = '<svg ' + ASPECT + ' viewBox="0 0 18 18"><path id="circular" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Zm3.111,9.477-4.5,2.813a.563.563,0,0,1-.861-.477V6.187a.563.563,0,0,1,.861-.477l4.5,2.812a.563.563,0,0,1,0,.954Z" fill="#0080fc"/></svg>'
const BUIShare = '<svg ' + ASPECT + ' viewBox="0 0 11.361 17.663"><path id="Caminho_2951" data-name="Caminho 2951" d="M19.81,10.233a.631.631,0,0,1-.6.158,2.522,2.522,0,1,0,0,4.874.63.63,0,0,1,.608.154l2.39,2.39a.813.813,0,0,1,.2.763A2.522,2.522,0,1,0,24.3,16.68a.813.813,0,0,1-.763-.2l-2.4-2.393a.631.631,0,0,1-.154-.608,2.522,2.522,0,0,0,0-1.3.631.631,0,0,1,.154-.618l2.39-2.39a.813.813,0,0,1,.763-.2,2.516,2.516,0,1,0-1.9-1.892.813.813,0,0,1-.2.763Z" transform="translate(-16.039 -3.996)" fill="#0080fc"/></svg>'
const BUISubmitMail = '<svg ' + ASPECT + ' viewBox="0 0 20.79 19"><g id="forward_to_inbox-24px_1_" data-name="forward_to_inbox-24px (1)" transform="translate(-2 -4)">    <path id="Caminho_560" data-name="Caminho 560" d="M13,18H4V8l8,5,8-5v5H18a5,5,0,0,0-5,5Zm-1-7L4,6H20Z" fill="#bad9f7" opacity="0.3"/><path id="Caminho_561" data-name="Caminho 561" d="M20,4H4A2.006,2.006,0,0,0,2,6V18a2.006,2.006,0,0,0,2,2h9V18H4V8l8,5,8-5v5h2V6A2.006,2.006,0,0,0,20,4Zm-8,7L4,6H20Z" fill="#a4bede"/><path id="Caminho_562" data-name="Caminho 562" d="M19,16.307c0-.537.54-.8.85-.417l2.79,3.327a.672.672,0,0,1,0,.847L19.85,23.39c-.31.37-.85.107-.85-.429V20.826H15c-.55,0-.55-2.385,0-2.385h4Z" transform="translate(0 -0.562)" fill="#a4bede"/></g></svg>'
const BUIWhatsapp = '<svg ' + ASPECT + ' viewBox="0 0 22.17 22.17"><path id="Caminho_1670" data-name="Caminho 1670" d="M5.152,21.478l-.51,2.034a1.58,1.58,0,0,0,1.912,1.912l2.026-.506a3.061,3.061,0,0,1,1.995.186,11.084,11.084,0,1,0-5.609-5.621,3.05,3.05,0,0,1,.186,1.995Zm5.7-11.3a1.272,1.272,0,0,1,.727-.336c.182,0,.909-.067,1.134.474s.79,1.868.837,2a.49.49,0,0,1,.024.474,1.805,1.805,0,0,1-.273.45c-.134.158-.284.352-.4.474s-.277.28-.119.549a8.09,8.09,0,0,0,1.485,1.857,7.438,7.438,0,0,0,2.188,1.339c.273.134.431.111.589-.067s.679-.79.861-1.055.363-.225.612-.134,1.58.743,1.861.877.45.2.521.312a2.24,2.24,0,0,1-.158,1.28,2.5,2.5,0,0,1-1.276,1.375c-.525.178-1.106.273-3.686-.766a12.392,12.392,0,0,1-4.772-4.069,5.239,5.239,0,0,1-1.11-2.785,2.884,2.884,0,0,1,.948-2.252Z" transform="translate(-4.011 -3.899)" fill="#00de72"/></svg>'
const BUIPeoples = '<svg ' + ASPECT + ' viewBox="0 0 29.777 19"><g id="subscribers_-_hover" data-name="subscribers - hover" transform="translate(-11.342 -15.592)"><path id="Caminho_526" data-name="Caminho 526" d="M10.5,13.143A4.071,4.071,0,1,0,6.429,9.071,4.054,4.054,0,0,0,10.5,13.143Zm0,2.714c-3.162,0-9.5,1.588-9.5,4.75V24H20V20.607C20,17.445,13.662,15.857,10.5,15.857Z" transform="translate(10.342 10.592)" fill="#0f7bff"/><path id="Caminho_2723" data-name="Caminho 2723" d="M21.357,13.143a4.071,4.071,0,1,0-4.071-4.071A4.054,4.054,0,0,0,21.357,13.143Zm0,2.714c-.394,0-.841.027-1.316.068a5.727,5.727,0,0,1,2.674,4.682V24h8.143V20.607C30.857,17.445,24.519,15.857,21.357,15.857Z" transform="translate(10.262 10.592)" fill="#6daefd"/></g></svg>'
const BUIHistory = '<svg ' + ASPECT + ' viewBox="0 0 22.168 22.168"><defs><style>.ahistory{fill:#0180fc;}.bhistory{fill:#d5e9fd;opacity:0.323;}</style></defs><g transform="translate(-2 -2)"><path class="ahistory" d="M12.976,2A11.1,11.1,0,0,0,5.217,5.189V3.108A1.108,1.108,0,1,0,3,3.108V8.1A1.108,1.108,0,0,0,4.108,9.2H9.1a1.108,1.108,0,0,0,0-2.217H6.567a8.858,8.858,0,1,1,6.408,14.963,1.108,1.108,0,1,0,0,2.217A11.084,11.084,0,0,0,12.976,2Z" transform="translate(0.108)"/><path class="ahistory" d="M14.325,13.542H12.108A1.108,1.108,0,0,1,11,12.434V9.108a1.108,1.108,0,1,1,2.217,0v2.217h1.108a1.108,1.108,0,0,1,0,2.217Z" transform="translate(0.976 0.65)"/><path class="bhistory" d="M13.084,4A8.876,8.876,0,0,0,6.676,6.771H9.2a1.108,1.108,0,1,1,0,2.217H4.217a1.1,1.1,0,0,1-1.082-.976,11.058,11.058,0,0,0,9.949,15.939,1.108,1.108,0,1,1,0-2.217A8.867,8.867,0,0,0,13.084,4ZM15.3,13.976H13.084a1.108,1.108,0,0,1-1.108-1.108V9.542a1.108,1.108,0,0,1,2.217,0v2.217H15.3a1.108,1.108,0,0,1,0,2.217Z" transform="translate(0 0.217)"/></g></svg>'
const BUIArrowRight = '<svg ' + ASPECT + ' viewBox="0 0 7.494 12.588"><path fill="#0080fc" d="M1.2,7.494a1.2,1.2,0,0,0,.849-.352L6.294,2.9l4.245,4.244a1.2,1.2,0,1,0,1.7-1.7L7.143.352a1.2,1.2,0,0,0-1.7,0L.352,5.445A1.2,1.2,0,0,0,1.2,7.494Z" transform="translate(7.494) rotate(90)"/></svg>'
const BUIThreeDotsVertical = '<svg ' + ASPECTMID + ' viewBox="0 0 4.005 13.795"><path id="ellipsis-v-solid" d="M54.26,22.314a2,2,0,1,1-2,2A2,2,0,0,1,54.26,22.314Zm-2-2.892a2,2,0,1,0,2-2A2,2,0,0,0,52.258,19.422Zm0,9.79a2,2,0,1,0,2-2A2,2,0,0,0,52.258,29.212Z" transform="translate(-52.258 -17.419)" fill="#0f7bff"/></svg>'
const BUINext = '<svg ' + ASPECTMID + ' viewBox="0 0 19.554 13.79">  <path id="icon" d="M1021.494,866.19a.67.67,0,0,0-.935,0,.627.627,0,0,0,0,.9l4.741,4.6h-15.646a.642.642,0,0,0-.655.635.649.649,0,0,0,.655.644H1025.3l-4.741,4.589a.637.637,0,0,0,0,.907.67.67,0,0,0,.935,0l5.864-5.686a.611.611,0,0,0,0-.9Z" transform="translate(-1008.5 -865.43)" fill="#0080fc" stroke="#0080fc" stroke-width="1"/></svg>'
const BUIBackup = '<svg ' + ASPECT + ' viewBox="0 0 25.186 18.394"><g id="server-settings" transform="translate(-5.998 -33.25)"><path id="Subtração_31" data-name="Subtração 31" d="M10.024,18.394H6.215A6.285,6.285,0,0,1,.446,14.336,6.488,6.488,0,0,1,1.927,7.354c.088-.089.18-.175.283-.261l.158-.138c.084-.069.176-.139.293-.22L2.849,6.6c.058-.039.118-.074.177-.109l.1-.057.238-.142.2-.1A6.628,6.628,0,0,0,6.618,3.249c.011-.023.019-.038.023-.045A7.2,7.2,0,0,1,12.61,0a7.109,7.109,0,0,1,1.95.273,7.225,7.225,0,0,1,5.134,5.883,1.622,1.622,0,0,0,1.223,1.354,5.435,5.435,0,0,1,3.061,1.926,5.621,5.621,0,0,1,1.208,3.454,5.458,5.458,0,0,1-5.4,5.5H15.333v-5.6a.532.532,0,0,1,.531-.531H16.7a.53.53,0,0,0,.4-.885L13.033,7.35a.53.53,0,0,0-.752,0L8.255,11.376a.531.531,0,0,0,.4.885h.843a.532.532,0,0,1,.531.531v5.6Z" transform="translate(5.998 33.25)" fill="#0080fc"/></g></svg>'
const BUICart = '<svg ' + ASPECT + ' viewBox="0 0 18.512 18.497"><path id="Caminho_1554" data-name="Caminho 1554" d="M26.315,9.422a1.283,1.283,0,0,1,1.258,1.031l.281,1.422a.508.508,0,0,0,.5.391h.587a.355.355,0,0,0,.355-.441l-.622-3.114A.882.882,0,0,0,27.915,8H26.272a.711.711,0,0,0-.711.832A.743.743,0,0,0,26.315,9.422Z" transform="translate(-19.301 -7.992)" fill="#0080fc"/><path id="Caminho_1555" data-name="Caminho 1555" d="M13.346,13.052l-.9-4.493a.711.711,0,0,0-.8-.572.711.711,0,0,0-.107,0h-2.8a.743.743,0,0,0-.754.59.711.711,0,0,0,.711.832h1.422a1.283,1.283,0,0,1,1.258,1.031l1.657,8.276a.786.786,0,0,1-.473.875,2.844,2.844,0,0,0-1.731,2.9,2.912,2.912,0,0,0,2.944,2.563h1.322a1.422,1.422,0,1,0,1.422-1.422,1.4,1.4,0,0,0-.164,0,.711.711,0,0,0-.149,0H13.733a1.465,1.465,0,0,1-1.486-1.28,1.422,1.422,0,0,1,1.422-1.564h9.492a2.51,2.51,0,0,0,2.46-2.019l.846-4.138a.8.8,0,0,0-.8-.953H14.1a.771.771,0,0,1-.757-.622Z" transform="translate(-7.971 -7.978)" fill="#0080fc"/><path id="Caminho_1556" data-name="Caminho 1556" d="M45.63,53.755A1.422,1.422,0,0,0,44.247,52H40.731a.736.736,0,0,0-.75.59.711.711,0,0,0,.711.832h2.133a1.422,1.422,0,0,0,2.8.334Z" transform="translate(-28.595 -36.349)" fill="#0080fc"/></svg>'
const BUICircleComplete = '<svg ' + ASPECT + ' viewBox="0 0 20 20"><g id="Grupo_4650" data-name="Grupo 4650" transform="translate(-107 -868)">  <path id="Caminho_549" data-name="Caminho 549" d="M10.313,16.094a1,1,0,0,1-.707-.293L6.793,12.988a1,1,0,1,1,1.414-1.414l2.105,2.105L15.793,8.2a1,1,0,1,1,1.414,1.414L11.02,15.8A1,1,0,0,1,10.313,16.094Z" transform="translate(105 866)" fill="#00c38e" opacity="0.99"/>  <path id="Caminho_550" data-name="Caminho 550" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.207,7.613L11.02,15.8a1,1,0,0,1-1.414,0L6.793,12.988a1,1,0,1,1,1.414-1.414l2.105,2.105L15.793,8.2a1,1,0,1,1,1.414,1.414Z" transform="translate(105 866)" fill="#e5fde2"/></g></svg>'
const BUICircleIncomplete = '<svg ' + ASPECT + ' viewBox="0 0 18 18"><g id="Grupo_4653" data-name="Grupo 4653" transform="translate(-105 -821)"><g id="Grupo_4652" data-name="Grupo 4652"><g id="Grupo_4651" data-name="Grupo 4651"><circle id="Oval" cx="9" cy="9" r="9" transform="translate(123 839) rotate(180)" fill="#ffb244" opacity="0.403"/></g></g><circle id="Elipse_181" data-name="Elipse 181" cx="0.838" cy="0.838" r="0.838" transform="translate(113.445 832.973)" fill="#ef4411" opacity="0.651"/><path id="Caminho_548" data-name="Caminho 548" d="M11.838,13.028A.838.838,0,0,1,11,12.19V8.838a.838.838,0,0,1,1.676,0V12.19A.838.838,0,0,1,11.838,13.028Z" transform="translate(102.445 818.268)" fill="#ef4411" opacity="0.651"/></g></svg>'
const BUICloud = '<svg ' + ASPECT + ' viewBox="0 0 30.8 22"><g id="Layer_2" data-name="Layer 2"><path id="Caminho_1568" data-name="Caminho 1568" d="M34.824,31.312A6.626,6.626,0,0,0,29.6,24.877a1.966,1.966,0,0,1-1.5-1.618,8.693,8.693,0,0,0-6.278-7.038,8.867,8.867,0,0,0-9.684,3.505.406.406,0,0,0,.3.614A9.876,9.876,0,0,1,18.2,22.732a1.047,1.047,0,0,1-.33,1.909,1.1,1.1,0,0,1-1.1-.23A7.722,7.722,0,0,0,8.38,23.3l-.248.121-.292.17c-.11.066-.226.126-.336.2l-.231.159c-.121.082-.242.17-.358.263l-.193.165q-.182.148-.347.313a7.676,7.676,0,0,0,5.244,13.2h16.6A6.593,6.593,0,0,0,34.824,31.312Z" transform="translate(-4.024 -15.894)" fill="#0080fc"/></g></svg>'
const BUIDatabase = '<svg ' + ASPECT + ' viewBox="0 0 21.781 19.358"><path id="Caminho_3453" data-name="Caminho 3453" d="M2.862,40.048H18.919a2.9,2.9,0,0,0,0-5.8H2.862a2.9,2.9,0,0,0,0,5.8Zm14.794-3.86a.96.96,0,1,1-.948.96A.955.955,0,0,1,17.656,36.188Zm-14.2.207h2.6a.753.753,0,0,1,0,1.506h-2.6a.753.753,0,0,1,0-1.506Z" transform="translate(0 -34.249)" fill="#0080fc"/><path id="Caminho_3454" data-name="Caminho 3454" d="M2.862,40.048H18.9a2.9,2.9,0,0,0,0-5.8H2.862a2.9,2.9,0,0,0,0,5.8Zm14.777-3.86a.96.96,0,1,1-.948.96A.955.955,0,0,1,17.639,36.188ZM3.457,36.4h2.6a.753.753,0,0,1,0,1.506h-2.6a.753.753,0,0,1,0-1.506Z" transform="translate(0 -27.47)" fill="#66a8f9"/><path id="Caminho_3455" data-name="Caminho 3455" d="M2.862,40.048H18.919a2.9,2.9,0,0,0,0-5.8H2.862a2.9,2.9,0,0,0,0,5.8Zm14.794-3.86a.96.96,0,1,1-.948.96A.955.955,0,0,1,17.656,36.188Zm-14.2.207h2.6a.753.753,0,0,1,0,1.506h-2.6a.753.753,0,0,1,0-1.506Z" transform="translate(0 -20.691)" fill="#66a8f9"/></svg>'
const BUIGlobeGear = '<svg ' + ASPECT + 'viewBox="0 0 24 22"><g id="Layer_2" data-name="Layer 2" transform="translate(8.699 6.529)"><path id="Subtração_25" data-name="Subtração 25" d="M10.145,20.31h0a10.4,10.4,0,0,1-7.179-3.043A10,10,0,0,1,0,10.156,10.272,10.272,0,0,1,10.363,0,10.3,10.3,0,0,1,20.556,8.317a7.427,7.427,0,0,0-1.018-.458V7.276A1.234,1.234,0,0,0,18.3,6.046H16.537a7.479,7.479,0,0,0-2.5-2.238,19.305,19.305,0,0,1,.684,2.817,1.222,1.222,0,0,0-.188.651v.582A7.37,7.37,0,0,0,12.221,9.21l-.512-.286a1.237,1.237,0,0,0-1.681.472l-1.221,2.17H8.66c.005.084.011.172.02.286a1.221,1.221,0,0,0-.005.684,1.245,1.245,0,0,0,.1.245,13.7,13.7,0,0,0,.784,3.311l-.3.166a1.228,1.228,0,0,0-.472,1.676l1.242,2.207a1.226,1.226,0,0,0,.115.169Zm-7.12-8.745A7.351,7.351,0,0,0,6.664,16.5a19.4,19.4,0,0,1-.881-4.938Zm3.64-7.757a7.349,7.349,0,0,0-3.64,4.958H5.783A19.464,19.464,0,0,1,6.664,3.808Zm3.7-.952c-.565.432-1.5,2.6-1.7,5.891h3.406C11.843,5.1,10.822,3.2,10.363,2.856Z" transform="translate(-8.699 -6.529)" fill="#6fb0ff"/><path id="Caminho_1632" data-name="Caminho 1632" d="M198.652,143.956l-.415-.233a6.045,6.045,0,0,0,0-1.967l.415-.233a1,1,0,0,0,.384-1.367l-1.01-1.8a1,1,0,0,0-1.367-.384l-.416.233a6.013,6.013,0,0,0-1.88-1.1v-.475a1,1,0,0,0-1-1H191.3a1,1,0,0,0-1,1v.475a6.013,6.013,0,0,0-1.88,1.1l-.416-.234a1,1,0,0,0-1.367.384l-1.009,1.8a1,1,0,0,0,.383,1.368l.415.233a6.046,6.046,0,0,0,0,1.967l-.415.233a1,1,0,0,0-.384,1.367l1.01,1.8a1,1,0,0,0,1.367.383l.416-.233a6.01,6.01,0,0,0,1.88,1.1v.475a1,1,0,0,0,1,1h2.064a1,1,0,0,0,1-1v-.475a6.01,6.01,0,0,0,1.88-1.1l.416.234a1.007,1.007,0,0,0,.491.128h0a1.007,1.007,0,0,0,.876-.513l1.009-1.8a1,1,0,0,0-.383-1.368Zm-6.324,1.7a2.914,2.914,0,1,1,2.914-2.914A2.914,2.914,0,0,1,192.327,145.654Z" transform="translate(-183.864 -134.383)" fill="#0080fc"/></g></svg>'
const BUIGlobeWww = '<svg ' + ASPECT + ' viewBox="0 0 28.342 31.56"><path id="Exclusão_1" data-name="Exclusão 1" d="M26.554,31.56a.962.962,0,0,1-.17-.015H25.055c-.608,0-.96-.12-1.078-.753-.133.633-.482.753-1.078.753H21.54a1.012,1.012,0,0,1-.173.015.978.978,0,0,1-.92-.651l-.62-1.078a1.265,1.265,0,0,1-.236-.9V26.922c-.341.137-.689.261-1.034.369V24.574a.886.886,0,0,0-1.772,0v3.148a13.918,13.918,0,0,0,1.772-.429v1.639a1.218,1.218,0,0,1-.251.9l-.62,1.078a.96.96,0,0,1-1.078.635H15.249c-.6,0-.945-.12-1.078-.753-.132.633-.481.753-1.078.753H11.765a.959.959,0,0,1-1.078-.635l-.62-1.078a1.218,1.218,0,0,1-.251-.9V27.166c-.364-.126-.721-.267-1.063-.417V24.574c0-.612-.273-.885-.886-.885a.769.769,0,0,0-.886.885v1.235a13.97,13.97,0,0,0,1.773.94v2.182a1.267,1.267,0,0,1-.237.9l-.62,1.078a.975.975,0,0,1-.919.651,1.012,1.012,0,0,1-.173-.015H5.444c-.6,0-.945-.12-1.078-.753-.118.633-.47.753-1.078.753H1.959a.959.959,0,0,1-1.078-.635L.26,29.831a1.218,1.218,0,0,1-.251-.9V24.574a.886.886,0,0,1,1.772,0v4.357l.473.856h.767l.473-.856V27.779c0-.647.331-1.034.885-1.034s.886.386.886,1.034v1.152l.487.856h.753l.472-.856V25.809A13.954,13.954,0,0,1,.415,13.964,13.963,13.963,0,0,1,24.252,4.09a13.971,13.971,0,0,1,2.165,16.953,14.044,14.044,0,0,1-5.054,5.015V24.574a.766.766,0,0,0-.885-.885.766.766,0,0,0-.886.885v2.349a13.952,13.952,0,0,0,1.772-.864v2.872l.473.856h.752l.488-.856V27.779c0-.647.331-1.034.885-1.034s.886.386.886,1.034v1.152l.472.856h.768l.472-.856V24.574a.886.886,0,0,1,1.772,0v4.357a1.214,1.214,0,0,1-.251.9l-.62,1.078A.958.958,0,0,1,26.554,31.56ZM15.072,27.911v1.019l.473.856h.767l.473-.856V27.721a14.054,14.054,0,0,1-1.712.19h0v-.131c0-.647-.331-1.034-.885-1.034s-.886.386-.886,1.034v.108c.352.027.714.041,1.078.041C14.607,27.928,14.841,27.922,15.072,27.911Zm-5.256-.746a13.9,13.9,0,0,0,1.772.484v1.281l.472.856h.768l.472-.856V27.887a14.02,14.02,0,0,1-1.712-.238V24.574a.886.886,0,0,0-1.772,0ZM12.083,15.9c.308,5.009,1.679,7.62,2.294,8.1.614-.472,1.994-3.073,2.331-8.1Zm8.439-.026a26.775,26.775,0,0,1-1.2,6.817,10.08,10.08,0,0,0,4.914-6.817ZM4.49,15.9a10.093,10.093,0,0,0,4.9,6.79A27.219,27.219,0,0,1,8.208,15.9Zm4.9-10.665h0a10.092,10.092,0,0,0-4.9,6.817H8.208A27.29,27.29,0,0,1,9.395,5.236Zm9.932,0a26.838,26.838,0,0,1,1.23,6.79h3.718A10.085,10.085,0,0,0,19.327,5.236ZM14.378,3.927h0c-.76.594-2.016,3.579-2.294,8.1h4.59c-.3-5.014-1.676-7.622-2.3-8.1Z" fill="#a5b9d5"/></svg>'
const BUISite = '<svg ' + ASPECT + ' viewBox="0 0 23.766 23.766"><g id="Layer_2" data-name="Layer 2" transform="translate(-4 -4)"><path id="Caminho_2735" data-name="Caminho 2735" d="M23.946,4H7.819A3.845,3.845,0,0,0,4,7.819V23.946a3.845,3.845,0,0,0,3.819,3.819H23.946a3.845,3.845,0,0,0,3.819-3.819V7.819A3.845,3.845,0,0,0,23.946,4Zm2.122,19.946a2.143,2.143,0,0,1-2.122,2.122H7.819A2.143,2.143,0,0,1,5.7,23.946V7.819A2.143,2.143,0,0,1,7.819,5.7H23.946a2.143,2.143,0,0,1,2.122,2.122Z" fill="#0f7bff"/> <rect id="Retângulo_846" data-name="Retângulo 846" width="16" height="4" rx="1" transform="translate(7.766 8)" fill="#0f7bff"/><rect id="Retângulo_847" data-name="Retângulo 847" width="6" height="10" rx="1" transform="translate(7.766 14)" fill="#0f7bff"/><rect id="Retângulo_848" data-name="Retângulo 848" width="9" height="10" rx="1" transform="translate(14.766 14)" fill="#6fb0ff"/></g></svg>'
const BUIStore = '<svg ' + ASPECT + ' viewBox="0 0 24.002 22.476"><g id="store" transform="translate(-21.999 -209)"><g id="Grupo_4196" data-name="Grupo 4196" transform="translate(16.695 199)"><path id="Caminho_2738" data-name="Caminho 2738" d="M40.176,23.192h2.567c.45,0,.71-.742.517-1.375l-1.281-4.2c-.3-.993-.921-1.618-1.6-1.618h-.553a.562.562,0,0,0-.553.647c.049.315.072.607.09.832l.337,4.2a6.886,6.886,0,0,1,0,1.025.45.45,0,0,0,.476.49Z" transform="translate(-18.695 -3.303)" fill="#6fb0ff"/><path id="Caminho_2739" data-name="Caminho 2739" d="M19.67,17.474a5.938,5.938,0,0,1,.09-.832A.562.562,0,0,0,19.2,16h-.557c-.679,0-1.295.629-1.6,1.618l-1.281,4.2c-.189.634.072,1.375.521,1.375h2.567a.45.45,0,0,0,.45-.494,6.882,6.882,0,0,1,0-1.025Z" transform="translate(-5.723 -3.303)" fill="#6fb0ff"/><path id="Caminho_2740" data-name="Caminho 2740" d="M7.5,17.771l-2.1,4.2a.948.948,0,0,0,.85,1.375H7.73a.49.49,0,0,0,.476-.557,3.259,3.259,0,0,1,.117-1.349L9.6,17.24q.063-.2.135-.387a.418.418,0,0,0-.526-.553A2.922,2.922,0,0,0,7.5,17.771Z" transform="translate(0 -3.455)" fill="#6fb0ff"/><path id="Caminho_2741" data-name="Caminho 2741" d="M53.126,21.969l-2.1-4.2a2.922,2.922,0,0,0-1.708-1.47.418.418,0,0,0-.521.562q.072.189.135.387l1.286,4.2a3.259,3.259,0,0,1,.117,1.349.49.49,0,0,0,.467.548h1.474a.948.948,0,0,0,.85-1.375Z" transform="translate(-23.922 -3.455)" fill="#6fb0ff"/><path id="Caminho_2742" data-name="Caminho 2742" d="M31.017,16.629a.836.836,0,0,0-.8-.629h-1.02a.823.823,0,0,0-.8.62h0a13.067,13.067,0,0,0-.351,2.126l-.18,2.248a9.1,9.1,0,0,0,0,1.623.625.625,0,0,0,.638.575h2.4a.625.625,0,0,0,.625-.566h0a9.1,9.1,0,0,0,0-1.623l-.189-2.36a11.853,11.853,0,0,0-.324-2.014Z" transform="translate(-12.398 -3.303)" fill="#6fb0ff"/></g><path id="Caminho_2743" data-name="Caminho 2743" d="M29.576,45.57V36.607A.607.607,0,0,0,28.969,36H8.607A.607.607,0,0,0,8,36.607v9.282a.9.9,0,0,0,1.8,0V40.643a2.773,2.773,0,0,1,2.616-2.809,2.7,2.7,0,0,1,2.778,2.7v5.156a1.1,1.1,0,0,0,1.1,1.1H28.358a1.218,1.218,0,0,0,1.218-1.218ZM25.98,40.5a2.7,2.7,0,0,1-2.7,2.7h-1.8a2.7,2.7,0,0,1-2.7-2.7h0a2.7,2.7,0,0,1,2.7-2.7h1.8A2.7,2.7,0,0,1,25.98,40.5Z" transform="translate(15.211 184.688)" fill="#0f7bff"/><path id="Caminho_2744" data-name="Caminho 2744" d="M29.98,10.9a.9.9,0,0,0-.9-.9H12.9a.9.9,0,1,0,0,1.8H29.081A.9.9,0,0,0,29.98,10.9Z" transform="translate(13.01 199)" fill="#0f7bff"/></g></svg>'
const BUISiteMobile = '<svg ' + ASPECT + ' viewBox="0 0 22 21"><g id="Layer_2" data-name="Layer 2" transform="translate(-4 -8.17)"><path id="Caminho_4429" data-name="Caminho 4429" d="M8.6,29.17H22.924A3.125,3.125,0,0,0,26,26V10.411A2.207,2.207,0,0,0,23.827,8.17H12.458a2.207,2.207,0,0,0-2.172,2.241v13.9a1.653,1.653,0,0,1-1.418,1.681,1.541,1.541,0,0,1-1.212-.415,1.644,1.644,0,0,1-.513-1.206V14.645a1.653,1.653,0,0,0-1.418-1.681,1.541,1.541,0,0,0-1.212.415A1.644,1.644,0,0,0,4,14.584v9.846A4.67,4.67,0,0,0,8.6,29.17ZM22.071,23.5h-.786a.811.811,0,0,1,0-1.621h.786a.811.811,0,0,1,0,1.621Zm-8.643-10.94a1.2,1.2,0,0,1,.325-.858,1.13,1.13,0,0,1,.822-.358H21.71a1.13,1.13,0,0,1,.822.358,1.2,1.2,0,0,1,.325.858v3.286a1.165,1.165,0,0,1-1.147,1.171H14.576a1.166,1.166,0,0,1-1.147-1.183Zm.786,6.078h7.857a.811.811,0,0,1,0,1.621H14.214a.811.811,0,0,1,0-1.621Zm0,3.241h3.929a.811.811,0,0,1,0,1.621H14.214a.811.811,0,0,1,0-1.621Z" transform="translate(0)" fill="#0080fc"/></g></svg>'
const BUIOpenBlank = '<svg ' + ASPECT + ' viewBox="0 0 14.24 14.24"><path id="Caminho_1599" data-name="Caminho 1599" d="M133.681,0h-4.9a.878.878,0,0,0,0,1.755h2.777l-4.633,4.633A.878.878,0,1,0,128.17,7.63L132.8,3V5.774a.878.878,0,0,0,1.755,0V.878A.879.879,0,0,0,133.681,0Z" transform="translate(-120.319)" fill="#0080fc"/><path id="Caminho_1600" data-name="Caminho 1600" d="M10.088,62.873H1.5V54.29H7.96l1.5-1.5H.752A.752.752,0,0,0,0,53.537V63.625a.752.752,0,0,0,.752.752H10.84a.752.752,0,0,0,.752-.752V54.913l-1.5,1.5Z" transform="translate(0 -50.138)" fill="#0080fc"/></svg>'
const BUIOkFill = '<svg ' + ASPECT + ' viewBox="0 0 18.602 18.602"><path id="Caminho_407" data-name="Caminho 407" d="M13.3,4a9.3,9.3,0,1,0,9.3,9.3A9.3,9.3,0,0,0,13.3,4Zm4.611,8.454-4.9,4.9a1.329,1.329,0,0,1-1.88,0L8.687,14.909A1.329,1.329,0,0,1,8.9,12.853a1.352,1.352,0,0,1,1.687.2l.492.492a.734.734,0,0,1,0,1.04h0a.332.332,0,0,0,0,.468h0a.332.332,0,0,0,.468,0l.525-.525h0l3.933-3.93a1.352,1.352,0,0,1,1.687-.2,1.329,1.329,0,0,1,.216,2.056Z" transform="translate(-4 -4)" fill="#0080fc"/></svg>'

export default {
  BUIBackup,
  BUICart,
  BUICircleComplete,
  BUICircleIncomplete,
  BUICloud,
  BUIDatabase,
  BUIGlobeGear,
  BUIGlobeWww,
  BUISite,
  BUIStore,
  BUIExit,
  BUILang,
  BUIPencil,
  BUITrash,
  BUIUpload,
  BUIGear,
  BUIPlus,
  BUIMenuBurger,
  BUIMenuBurgerOpen,
  BUIInfo,
  BUILink,
  BUIDashboard,
  BUIClock,
  BUIMail,
  BUIClose,
  BUIEye,
  BUICopy,
  BUICode,
  BUILogo,
  BUIMove,
  BUIUser,
  BUISave,
  BUIBell,
  BUIPlay,
  BUIShare,
  BUISubmitMail,
  BUIWhatsapp,
  BUIPeoples,
  BUIHistory,
  BUIArrowRight,
  BUIThreeDotsVertical,
  BUINext,
  BUIFileTransfer,
  BUIServer,
  BUIServerSettings,
  BUIOpenBlank,
  BUISiteMobile,
  BUIOkFill
}
