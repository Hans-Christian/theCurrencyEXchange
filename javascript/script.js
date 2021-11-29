/* Elements */
const form = document.querySelector('.app form');
const fromAmount = document.querySelector('#fromAmount');
const fromCurrency = document.querySelector('#fromCurrency');
const toCurrency = document.querySelector('#toCurrency');
const toAmount = document.querySelector('.toAmount span');
const resetBttn = document.querySelector('.reset button');
const errorMessage = document.querySelector('.errorMessage');
const closeBttn = document.querySelector('.errorMessage button');


/* API related: */
const apiKey = '3a2044405fa9d318ea3f2f42';

const endpoint = `https://v6.exchangerate-api.com/v6/${apiKey}/latest`;


/* Make a list of currencies in an Object: */
const currencies = {
    CAD: 'Canadian Dollar',
    USD: 'United States Dollar',
    EUR: 'Euro',
    AFN: 'Afghan Afghani',
    ALL: 'Albanian Lek',
    DZD: 'Algerian Dinar',
    AOA: 'Angolan Kwanza',
    ARS: 'Argentine Peso',
    AMD: 'Armenian Dram',
    AWG: 'Aruban Florin',
    AUD: 'Australian Dollar',
    AZN: 'Azerbaijani Manat',
    BSD: 'Bahamian Dollar',
    BHD: 'Bahraini Dinar',
    BDT: 'Bangladeshi Taka',
    BBD: 'Barbados Dollar',
    BYN: 'Belarusian Ruble',
    BZD: 'Belize Dollar',
    BMD: 'Bermudian Dollar',
    BTN: 'Bhutanese Ngultrum',
    BOB: 'Bolivian Boliviano',
    BAM: 'Bosnia and Herzegovina Mark',
    BWP: 'Botswana Pula',
    BRL: 'Brazilian Real',
    BND: 'Brunei Dollar',
    BGN: 'Bulgarian Lev',
    MMK: 'Burmese Kyat',
    BIF: 'Burundian Franc',
    KHR: 'Cambodian Riel',
    CVE: 'Cape Verdean Escudo',
    KYD: 'Cayman Islands Dollar',
    XAF: 'Central African CFA Franc',
    XPF: 'CFP Franc',
    CLP: 'Chilean Peso',
    CNY: 'Chinese Renminbi',
    COP: 'Colombian Peso',
    KMF: 'Comorian Franc',
    CDF: 'Congolese Franc',
    CRC: 'Costa Rican Colon',
    HRK: 'Croatian Kuna',
    CUC: 'Cuban Convertible Peso',
    CUP: 'Cuban Peso',
    CZK: 'Czech Koruna',
    DKK: 'Danish Krone',
    DJF: 'Djiboutian Franc',
    DOP: 'Dominican Peso',
    XCD: 'East Caribbean Dollar',
    EGP: 'Egyptian Pound',
    ERN: 'Eritrean Nakfa',
    SZL: 'Eswatini Lilangeni',
    ETB: 'Ethiopian Birr',
    FKP: 'Falkland Islands Pound',
    FOK: 'Faroese Króna',
    FJD: 'Fiji Dollar',
    GMD: 'Gambian Dalasi',
    GEL: 'Georgian Lari',
    GHS: 'Ghanaian Cedi',
    GIP: 'Gibraltar Pound',
    GTQ: 'Guatemalan Quetzal',
    GGP: 'Guernsey Pound',
    GNF: 'Guinean Franc',
    GYD: 'Guyanese Dollar',
    HTG: 'Haitian Gourde',
    HNL: 'Honduran Lempira',
    HKD: 'Hong Kong Dollar',
    HUF: 'Hungarian Forint',
    ISK: 'Icelandic Króna',
    INR: 'Indian Rupee',
    IDR: 'Indonesian Rupiah',
    IRR: 'Iranian Rial',
    IQD: 'Iraqi Dinar',
    ILS: 'Israeli New Shekel',
    JMD: 'Jamaican Dollar',
    JPY: 'Japanese Yen',
    JOD: 'Jordanian Dinar',
    KZT: 'Kazakhstani Tenge',
    KES: 'Kenyan Shilling',
    KID: 'Kiribati Dollar',
    KWD: 'Kuwaiti Dinar',
    KGS: 'Kyrgyzstani Som',
    LAK: 'Lao Kip',
    LBP: 'Lebanese Pound',
    LSL: 'Lesotho Loti',
    LRD: 'Liberian Dollar',
    LYD: 'Libyan Dinar',
    MOP: 'Macanese Pataca',
    MKD: 'Macedonian Denar',
    MGA: 'Malagasy Ariary',
    MWK: 'Malawian Kwacha',
    MYR: 'Malaysian Ringgit',
    MVR: 'Maldivian Rufiyaa',
    IMP: 'Manx Pound',
    MRU: 'Mauritanian Ouguiya',
    MUR: 'Mauritian Rupee',
    MXN: 'Mexican Peso',
    MDL: 'Moldovan Leu',
    MNT: 'Mongolian Tögrög',
    MAD: 'Moroccan Dirham',
    MZN: 'Mozambican Metical',
    NAD: 'Namibian Dollar',
    NPR: 'Nepalese Rupee',
    ANG: 'Netherlands Antillian Guilder',
    TWD: 'New Taiwan Dollar',
    NZD: 'New Zealand Dollar',
    NIO: 'Nicaraguan Córdoba',
    NGN: 'Nigerian Naira',
    NOK: 'Norwegian Krone',
    OMR: 'Omani Rial',
    PKR: 'Pakistani Rupee',
    PAB: 'Panamanian Balboa',
    PGK: 'Papua New Guinean Kina',
    PYG: 'Paraguayan Guaraní',
    PEN: 'Peruvian Sol',
    PHP: 'Philippine Peso',
    PLN: 'Polish Złoty',
    GBP: 'Pound Sterling',
    QAR: 'Qatari Riyal',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    RWF: 'Rwandan Franc',
    SHP: 'Saint Helena Pound',
    WST: 'Samoan Tālā',
    SAR: 'Saudi Riyal',
    STN: 'São Tomé and Príncipe Dobra',
    RSD: 'Serbian Dinar',
    SCR: 'Seychellois Rupee',
    SLL: 'Sierra Leonean Leone',
    SGD: 'Singapore Dollar',
    SBD: 'Solomon Islands Dollar',
    SOS: 'Somali Shilling',
    ZAR: 'South African Rand',
    KRW: 'South Korean Won',
    SSP: 'South Sudanese Pound',
    XDR: 'Special Drawing Rights',
    LKR: 'Sri Lanka Rupee',
    SDG: 'Sudanese Pound',
    SRD: 'Surinamese Dollar',
    SEK: 'Swedish Krona',
    CHF: 'Swiss Franc',
    SYP: 'Syrian Pound',
    TJS: 'Tajikistani Somoni',
    TZS: 'Tanzanian Shilling',
    THB: 'Thai Baht',
    TOP: 'Tongan Paʻanga',
    TTD: 'Trinidad and Tobago Dollar',
    TND: 'Tunisian Dinar',
    TRY: 'Turkish Lira',
    TMT: 'Turkmenistan Manat',
    TVD: 'Tuvaluan Dollar',
    AED: 'UAE Dirham',
    UGX: 'Ugandan Shilling',
    UAH: 'Ukrainian Hryvnia',
    UYU: 'Uruguayan Peso',
    UZS: `Uzbekistani So'm`,
    VUV: 'Vanuatu Vatu',
    VES: 'Venezuelan Bolívar Soberano',
    VND: 'Vietnamese Đồng',
    XOF: 'West African CFA franc',
    YER: 'Yemeni Rial',
    ZMW: 'Zambian Kwacha',
}


/* Turn the currencies Object into a string via a function */
function listOfCurrencies(options){
    return Object.entries(options).map(([currencyCode, currencyName]) =>{
        return `<option value="${currencyCode}">${currencyName}</option>`
    }).join('')
}


/* Store the listOfCurrencies function in a variable */
const optionsHTML = listOfCurrencies(currencies);


/* On page load, make the fromCurrency and toCurrency inputs have the listOfCurrencies */ 
fromCurrency.innerHTML = optionsHTML;
toCurrency.innerHTML = optionsHTML;


/* Fetch the data */ 
async function fetchData(base = 'CAD'){
    const response = await fetch(`${endpoint}/${base}`);
    const rates = await response.json();
    return rates;
}


/* Store the rates that were returned for future use so that the user doesn't have to keep fetching the data fromt the API */ 
const ratesByBase = {

}


/* Create a function that will convert the currencies */
async function convert(amount, from, to){
    // If the ratesByBase Object doesn't have the property that's passed in, fetch the rates from the API and store it in the ratesByBase Object:
    if(!ratesByBase[from]){
        
        const rates = await fetchData(from);
        
        ratesByBase[from] = rates;
    }
    
    // Convert the amount the user passed in:
    const rate = ratesByBase[from]['conversion_rates'][to];
    const convertedAmount = amount * rate;
    return convertedAmount;
}


/* Listen for events on the form */
form.addEventListener('input', handleInputs);

async function handleInputs(e){
    if (fromAmount.value < 0){
        errorMessage.classList.remove('hiddenErrorMessage');
    } else{
        const rawAmount = await convert(fromAmount.value, fromCurrency.value, toCurrency.value);
        toAmount.textContent = formatCurrency(rawAmount, toCurrency.value);
    }
}


// Format the currency that was returned from handleInput function:
function formatCurrency(amount, currency){
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount);
}


/* Listen for when the user clicks anywhere on the error message */
errorMessage.addEventListener('click', errorMessageClickEvents);

// All the events that will happen when the user clicks anywhere in the error message:
function errorMessageClickEvents(){
    // Error message will become hidden again:
    errorMessage.classList.add('hiddenErrorMessage');

    // The fromAmount value will reset to blank:
    fromAmount.value = '';

    // The toAmount value will reset to 0;
    toAmount.textContent = 0;
}