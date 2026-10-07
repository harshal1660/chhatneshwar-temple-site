const slides = [...document.querySelectorAll(".slide")];
const slider = document.querySelector(".slider");
const autoplayButton = document.querySelector(".slider-toggle");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentSlide = 0;
let autoplayPaused = prefersReducedMotion.matches;
let autoplayTimer;
let currentLanguage = "en";

const translations = {
    en: {
        "language.label": "Language",
        "language.switchEnglish": "Switch to English",
        "language.switchHindi": "Switch to Hindi",
        "nav.label": "Main navigation",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.temple": "Temple",
        "nav.gallery": "Gallery",
        "nav.contact": "Contact",
        "footer.text": "Chhatneshwar Durga Mandir | Samastipur, Bihar",
        "carousel.label": "Chhatneshwar photographs",
        "carousel.slideOf": "{index} of {count}",
        "carousel.prev": "Previous photograph",
        "carousel.next": "Next photograph",
        "carousel.pause": "Pause automatic carousel",
        "carousel.play": "Play automatic carousel",
        "carousel.alt": "A view of Chhatneshwar village",
        "home.meta": "Discover Chhatneshwar village and its historic Durga Mandir in Samastipur, Bihar.",
        "home.title": "Chhatneshwar Durga Mandir | Samastipur, Bihar",
        "home.welcome": "Welcome to Chhatneshwar Village",
        "home.intro": "A cultural, spiritual and historic village in Samastipur, Bihar.",
        "home.explore": "Explore More",
        "home.culture.title": "Rich Culture",
        "home.culture.text": "Festival traditions, devotional music, and village life come together throughout the year.",
        "home.culture.link": "Read the village story",
        "home.temple.title": "Durga Mandir",
        "home.temple.text": "Worship at the mandir began in 1845 and continues through generations, with special gatherings during Navratri.",
        "home.temple.link": "Explore the temple history",
        "home.gallery.title": "Gallery",
        "home.gallery.text": "Browse photographs of the mandir, village life, and community celebrations.",
        "home.gallery.link": "Explore the gallery",
        "home.cards.label": "Explore Chhatneshwar",
        "map.title": "Visit Us",
        "map.place": "Chhatneshwar Durga Mandir",
        "map.frame": "Interactive map to Chhatneshwar Durga Mandir",
        "map.directions": "Get directions",
        "qr.label": "Temple donation QR code",
        "qr.hide": "Hide QR",
        "qr.show": "Show QR",
        "qr.alt": "UPI payment QR code for Chhatneshwar Durga Mandir",
        "qr.caption": "Scan to support the temple",
        "about.meta": "Learn about Chhatneshwar village, its history, education and Durga Mandir in Samastipur, Bihar.",
        "about.title": "About Chhatneshwar | Samastipur, Bihar",
        "about.heading": "About the Village",
        "about.temple.heading": "About the Temple",
        "about.temple.text": "The Chhatneshwar Durga Mandir is a historic and spiritual center located in Samastipur, Bihar. The temple, believed to have been established in the 20th century, holds deep religious significance for the local community and devotees who gather every year during Durga Puja.",
        "about.village.text": "Chhatneshwar is one of the biggest villages in Samastipur, Bihar, India. The village is situated 4 km away from Kishanpur and 8 km from Samastipur Junction. The village has produced many scholars who are well settled in different cities of India like Mumbai, Delhi, Noida, Korba, Raipur, Kolkata and Bangalore. People educated in the village serve the country in fields including computer science, medicine, accounting, business, civil and electrical engineering, and law.",
        "about.education.heading": "Education and Community",
        "about.education.text": "Chhatneshwar has opportunities for primary education, including a middle school. A high school for education up to class 12 is situated 4 km from the main village. The schools are equipped with experienced teachers. The village also has a 1,600-square-meter playground.",
        "about.history.text": "The village has historical importance as well. The temple of Goddess Durga was established in the 20th century. Villagers have strong faith in the temple and organize a large celebration every year on the eve of Dussehra.",
        "temple.meta": "Visit Chhatneshwar Durga Mandir, a historic spiritual center in Samastipur, Bihar.",
        "temple.title": "Chhatneshwar Durga Mandir | Samastipur, Bihar",
        "temple.heading": "Chhatneshwar Durga Mandir",
        "temple.imageAlt": "Chhatneshwar Durga Mandir",
        "story.title": "Chhatneshwar Durga Mandir: Faith, Tradition and History",
        "story.intro": "The Durga shrine in Chhatneshwar village is among Bihar's renowned sacred sites dedicated to the Goddess. Located about 12 kilometres from the district headquarters, this holy temple has long been a center of faith and devotion.",
        "story.dream.heading": "Worship of Maa Durga Began with a Dream",
        "story.dream.one": "According to temple attendant Satyadev Prasad Karn, his great-grandfather, the late Ramnath Das, served as a diwan in the court of the Darbhanga Maharaja.",
        "story.dream.two": "Several years after marriage, he had not been blessed with a child and remained worried and sad. One night, Maa Durga appeared to him in a dream. She blessed him with a son and instructed him to build a temple.",
        "story.dream.three": "With the Mother's blessings, Ramnath Das was blessed with a son in 1845, named Lakshmi Datt Lal Das.",
        "story.dream.four": "To express his devotion and gratitude to the Mother, Ramnath Das began construction of the temple in that same year.",
        "story.worship.heading": "Temple Construction and the Beginning of Worship",
        "story.worship.one": "The Darbhanga Maharaja's artisans made the temple's idol, and accomplished priests from Darbhanga began worshipping Maa Durga.",
        "story.worship.two": "Since then, worship of Maa Durga has continued according to the traditions established by the ancestors.",
        "story.worship.three": "Today, Ratendra Kishore, Vishnukant Karn, Sachindra Karn and head priest Satyadev Prasad Karn carry this tradition forward through worship and religious observances.",
        "story.sixth.heading": "A Special Tradition from Shashthi to Saptami",
        "story.sixth.one": "The worship at Chhatneshwar Durga Mandir is considered distinctive because of its special traditions.",
        "story.sixth.two": "Here, worship is offered directly to the Goddess, rather than only to the ceremonial kalash.",
        "story.sixth.three": "On Shashthi, the Goddess is formally invited beneath the sacred bel tree located some distance from the temple. On Saptami, she is brought to the temple, where the kalash is installed and worship is performed according to ritual.",
        "story.sixth.four": "This tradition has continued across generations and is still observed with the same devotion and faith.",
        "story.ashtami.heading": "Special Observances on Ashtami and Navami",
        "story.ashtami.one": "Maha Ashtami and Maha Navami are especially significant at Chhatneshwar Durga Mandir. Large numbers of devotees travel from near and far to offer prayers and seek the Goddess's darshan on these days.",
        "story.ashtami.two": "According to tradition, thousands of goats are sacrificed here on these days. This observance is considered an important part of the temple's ancient worship practices and local religious tradition.",
        "story.faith.heading": "A Faith Observed for 180 Years",
        "story.faith.one": "The worship of Maa Durga, which began in 1845, continues today, many generations later.",
        "story.faith.two": "This siddhpeeth in Chhatneshwar is more than a temple: it is a shared heritage of faith, tradition, family and community. The devotion of generations has given this sacred place a special standing among the region's prominent sites dedicated to the Goddess.",
        "story.faith.three": "Because of unwavering faith in Maa Durga and the traditions established by the ancestors, Chhatneshwar comes alive each year during Sharadiya Navratri with devotion, reverence and religious celebration.",
        "story.blessing": "Jai Mata Di",
        "story.signature": "Siddhpeeth Durga Mandir, Chhatneshwar — Bihar",
        "gallery.meta": "Photographs of Chhatneshwar village, its temple and community celebrations in Samastipur, Bihar.",
        "gallery.title": "Village Gallery | Chhatneshwar Durga Mandir",
        "gallery.heading": "Village Gallery",
        "gallery.templeAlt": "Chhatneshwar Durga Mandir",
        "gallery.photoAlt": "A photograph from Chhatneshwar village",
        "gallery.viewTemple": "View temple photograph",
        "gallery.viewPhoto": "View village photograph",
        "gallery.viewer": "Photo viewer",
        "gallery.close": "Close photo",
        "contact.meta": "Contact Chhatneshwar Durga Mandir in Samastipur, Bihar.",
        "contact.title": "Contact Chhatneshwar Durga Mandir",
        "contact.heading": "Contact",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "contact.follow": "Follow Us",
        "contact.options": "Contact and social links",
        "contact.youtube": "YouTube channel",
        "contact.facebook": "Facebook page",
        "contact.youtubeAction": "Watch on YouTube",
        "contact.facebookAction": "Visit Facebook"
    },
    hi: {
        "language.label": "भाषा",
        "language.switchEnglish": "अंग्रेज़ी में बदलें",
        "language.switchHindi": "हिंदी में बदलें",
        "nav.label": "मुख्य नेविगेशन",
        "nav.home": "होम",
        "nav.about": "परिचय",
        "nav.temple": "मंदिर",
        "nav.gallery": "गैलरी",
        "nav.contact": "संपर्क",
        "footer.text": "छतनेश्वर दुर्गा मंदिर | समस्तीपुर, बिहार",
        "carousel.label": "छतनेश्वर के दृश्य",
        "carousel.slideOf": "{count} में से {index}",
        "carousel.prev": "पिछली तस्वीर",
        "carousel.next": "अगली तस्वीर",
        "carousel.pause": "स्वचालित स्लाइड बंद करें",
        "carousel.play": "स्वचालित स्लाइड चलाएं",
        "carousel.alt": "छतनेश्वर गांव का दृश्य",
        "home.meta": "समस्तीपुर, बिहार के छतनेश्वर गांव और ऐतिहासिक दुर्गा मंदिर के बारे में जानें।",
        "home.title": "छतनेश्वर दुर्गा मंदिर | समस्तीपुर, बिहार",
        "home.welcome": "छतनेश्वर गांव में आपका स्वागत है",
        "home.intro": "समस्तीपुर, बिहार का सांस्कृतिक, आध्यात्मिक और ऐतिहासिक गांव।",
        "home.explore": "और जानें",
        "home.culture.title": "समृद्ध संस्कृति",
        "home.culture.text": "त्योहारों की परंपराएं, भक्ति संगीत और गांव का जीवन पूरे वर्ष साथ आते हैं।",
        "home.culture.link": "गांव की कहानी पढ़ें",
        "home.temple.title": "दुर्गा मंदिर",
        "home.temple.text": "मंदिर में पूजा 1845 में शुरू हुई और पीढ़ियों से जारी है। नवरात्रि में यहां विशेष आयोजन होते हैं।",
        "home.temple.link": "मंदिर का इतिहास जानें",
        "home.gallery.title": "गैलरी",
        "home.gallery.text": "मंदिर, गांव के जीवन और सामुदायिक उत्सवों की तस्वीरें देखें।",
        "home.gallery.link": "गैलरी देखें",
        "home.cards.label": "छतनेश्वर के बारे में जानें",
        "map.title": "यहां आएं",
        "map.place": "छतनेश्वर दुर्गा मंदिर",
        "map.frame": "छतनेश्वर दुर्गा मंदिर का इंटरैक्टिव नक्शा",
        "map.directions": "रास्ता देखें",
        "qr.label": "मंदिर के लिए दान QR कोड",
        "qr.hide": "QR छिपाएं",
        "qr.show": "QR दिखाएं",
        "qr.alt": "छतनेश्वर दुर्गा मंदिर के लिए UPI भुगतान QR कोड",
        "qr.caption": "मंदिर के सहयोग के लिए स्कैन करें",
        "about.meta": "छतनेश्वर गांव, उसके इतिहास, शिक्षा और समस्तीपुर, बिहार के दुर्गा मंदिर के बारे में जानें।",
        "about.title": "छतनेश्वर का परिचय | समस्तीपुर, बिहार",
        "about.heading": "गांव का परिचय",
        "about.temple.heading": "मंदिर के बारे में",
        "about.temple.text": "छतनेश्वर दुर्गा मंदिर समस्तीपुर, बिहार में स्थित एक ऐतिहासिक और आध्यात्मिक केंद्र है। माना जाता है कि मंदिर की स्थापना 20वीं शताब्दी में हुई थी। दुर्गा पूजा के अवसर पर हर वर्ष यहां जुटने वाले श्रद्धालुओं के लिए इसका गहरा धार्मिक महत्व है।",
        "about.village.text": "छतनेश्वर समस्तीपुर, बिहार के बड़े गांवों में से एक है। यह किशनपुर से 4 किलोमीटर और समस्तीपुर जंक्शन से 8 किलोमीटर दूर स्थित है। गांव से निकले अनेक विद्वान मुंबई, दिल्ली, नोएडा, कोरबा, रायपुर, कोलकाता और बेंगलुरु जैसे शहरों में बसे हैं। गांव में पढ़े लोग कंप्यूटर विज्ञान, चिकित्सा, लेखा, व्यवसाय, सिविल और इलेक्ट्रिकल इंजीनियरिंग तथा कानून सहित कई क्षेत्रों में देश की सेवा कर रहे हैं।",
        "about.education.heading": "शिक्षा और समुदाय",
        "about.education.text": "छतनेश्वर में प्राथमिक शिक्षा की सुविधा है और यहां एक मध्य विद्यालय है। कक्षा 12 तक की पढ़ाई के लिए उच्च विद्यालय मुख्य गांव से 4 किलोमीटर दूर है। विद्यालयों में अनुभवी शिक्षक हैं। गांव में 1,600 वर्ग मीटर का खेल मैदान भी है।",
        "about.history.text": "गांव का ऐतिहासिक महत्व भी है। मां दुर्गा का मंदिर 20वीं शताब्दी में स्थापित हुआ था। ग्रामीणों की मंदिर में गहरी आस्था है और वे हर वर्ष दशहरा की पूर्व संध्या पर बड़ा उत्सव आयोजित करते हैं।",
        "temple.meta": "समस्तीपुर, बिहार के ऐतिहासिक आध्यात्मिक केंद्र छतनेश्वर दुर्गा मंदिर के दर्शन करें।",
        "temple.title": "छतनेश्वर दुर्गा मंदिर | समस्तीपुर, बिहार",
        "temple.heading": "छतनेश्वर दुर्गा मंदिर",
        "temple.imageAlt": "छतनेश्वर दुर्गा मंदिर",
        "story.title": "🌺 छतनेश्वर दुर्गा मंदिर — आस्था, परंपरा और इतिहास 🌺",
        "story.intro": "छतनेश्वर गांव स्थित दुर्गा स्थान बिहार के प्रसिद्ध भगवती स्थानों में से एक है। जिला मुख्यालय से लगभग 12 किलोमीटर की दूरी पर स्थित यह पवित्र मंदिर वर्षों से श्रद्धालुओं की आस्था और विश्वास का केंद्र रहा है।",
        "story.dream.heading": "🙏 स्वप्न से शुरू हुई मां दुर्गा की आराधना",
        "story.dream.one": "मंदिर के सेवक सत्यदेव प्रसाद कर्ण के अनुसार, उनके परदादा स्वर्गीय रामनाथ दास दरभंगा महाराज के यहां दीवान के पद पर कार्यरत थे।",
        "story.dream.two": "विवाह के कई वर्षों बाद भी उन्हें संतान की प्राप्ति नहीं हुई थी। इस कारण वे सदैव चिंतित और उदास रहते थे। इसी दौरान एक रात्रि उन्हें स्वप्न में मां दुर्गा के दर्शन हुए। मां ने उन्हें पुत्र प्राप्ति का आशीर्वाद देते हुए मंदिर निर्माण कराने का निर्देश दिया।",
        "story.dream.three": "मां के आशीर्वाद से वर्ष 1845 में रामनाथ दास को पुत्र रत्न की प्राप्ति हुई, जिनका नाम लक्ष्मी दत्त लाल दास रखा गया।",
        "story.dream.four": "मां के प्रति अपनी श्रद्धा और कृतज्ञता प्रकट करते हुए उसी वर्ष रामनाथ दास ने मंदिर निर्माण का कार्य प्रारंभ कराया।",
        "story.worship.heading": "🛕 मंदिर निर्माण और पूजा की शुरुआत",
        "story.worship.one": "मंदिर की प्रतिमा का निर्माण दरभंगा महाराज के शिल्पकारों द्वारा कराया गया तथा वहीं के सिद्ध पुरोहितों ने मां दुर्गा की पूजा-अर्चना प्रारंभ की।",
        "story.worship.two": "तब से लेकर आज तक मां दुर्गा की पूजा पूर्वजों द्वारा स्थापित परंपराओं के अनुरूप निरंतर चली आ रही है।",
        "story.worship.three": "वर्तमान में रतेन्द्र किशोर, विष्णुकांत कर्ण, सचीन्द्र कर्ण एवं मुख्य पुजारी सत्यदेव प्रसाद कर्ण पूर्वजों की इसी परंपरा को आगे बढ़ाते हुए मां की पूजा-अर्चना एवं धार्मिक अनुष्ठान संपन्न कराते हैं।",
        "story.sixth.heading": "🌿 छठी से सप्तमी तक विशेष परंपरा",
        "story.sixth.one": "छतनेश्वर दुर्गा मंदिर की पूजा-पद्धति अपनी विशेष परंपराओं के कारण अन्य स्थानों से अलग मानी जाती है।",
        "story.sixth.two": "यहां सामान्य रूप से केवल कलश की पूजा नहीं, बल्कि प्रत्यक्ष रूप से देवी मां की पूजा की जाती है।",
        "story.sixth.three": "मंदिर से कुछ दूरी पर स्थित पवित्र बेल वृक्ष के नीचे षष्ठी के दिन मां को विधिवत निमंत्रण दिया जाता है। इसके बाद सप्तमी के दिन मां को मंदिर में लाकर विधि-विधान के साथ कलश स्थापना एवं पूजा-अर्चना की जाती है।",
        "story.sixth.four": "यह परंपरा पीढ़ियों से चली आ रही है और आज भी उसी श्रद्धा एवं आस्था के साथ निभाई जाती है।",
        "story.ashtami.heading": "🔱 अष्टमी और नवमी का विशेष अनुष्ठान",
        "story.ashtami.one": "छतनेश्वर दुर्गा मंदिर में महाष्टमी एवं महानवमी का विशेष महत्व है। इन दोनों दिनों में दूर-दूर से बड़ी संख्या में श्रद्धालु मां के दर्शन और पूजा-अर्चना के लिए पहुंचते हैं।",
        "story.ashtami.two": "परंपरा के अनुसार इन दिनों यहां हजारों की संख्या में छागड़ की बलि दी जाती है। यह अनुष्ठान मंदिर की प्राचीन पूजा-पद्धति और स्थानीय धार्मिक परंपरा का महत्वपूर्ण हिस्सा माना जाता है।",
        "story.faith.heading": "🌺 180 वर्षों से चली आ रही आस्था",
        "story.faith.one": "वर्ष 1845 से प्रारंभ हुई मां दुर्गा की यह आराधना आज कई पीढ़ियों के बाद भी निरंतर जारी है।",
        "story.faith.two": "छतनेश्वर का यह सिद्धपीठ केवल एक मंदिर नहीं, बल्कि आस्था, परंपरा, परिवार और समाज की साझा विरासत है। पीढ़ी-दर-पीढ़ी श्रद्धालुओं की आस्था ने इस स्थान को क्षेत्र के प्रमुख भगवती स्थलों में विशेष पहचान प्रदान की है।",
        "story.faith.three": "मां दुर्गा के प्रति अटूट विश्वास और पूर्वजों द्वारा स्थापित परंपराओं के कारण आज भी प्रत्येक वर्ष शारदीय नवरात्रि के अवसर पर छतनेश्वर में भक्ति, श्रद्धा और धार्मिक उत्सव का अद्भुत वातावरण देखने को मिलता है।",
        "story.blessing": "🌸 जय माता दी 🌸",
        "story.signature": "सिद्धपीठ दुर्गा मंदिर, छतनेश्वर — बिहार",
        "gallery.meta": "समस्तीपुर, बिहार के छतनेश्वर गांव, मंदिर और सामुदायिक उत्सवों की तस्वीरें।",
        "gallery.title": "गांव की गैलरी | छतनेश्वर दुर्गा मंदिर",
        "gallery.heading": "गांव की गैलरी",
        "gallery.templeAlt": "छतनेश्वर दुर्गा मंदिर",
        "gallery.photoAlt": "छतनेश्वर गांव की एक तस्वीर",
        "gallery.viewTemple": "मंदिर की तस्वीर देखें",
        "gallery.viewPhoto": "गांव की तस्वीर देखें",
        "gallery.viewer": "तस्वीर देखें",
        "gallery.close": "तस्वीर बंद करें",
        "contact.meta": "समस्तीपुर, बिहार के छतनेश्वर दुर्गा मंदिर से संपर्क करें।",
        "contact.title": "छतनेश्वर दुर्गा मंदिर से संपर्क",
        "contact.heading": "संपर्क",
        "contact.phone": "फोन",
        "contact.email": "ईमेल",
        "contact.follow": "हमसे जुड़ें",
        "contact.options": "संपर्क और सोशल मीडिया लिंक",
        "contact.youtube": "YouTube चैनल",
        "contact.facebook": "Facebook पेज",
        "contact.youtubeAction": "YouTube पर देखें",
        "contact.facebookAction": "Facebook पर जाएं"
    }
};

function translate(key, values = {}) {
    const message = translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
    return message.replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match);
}

function applyLanguage(language) {
    currentLanguage = translations[language] ? language : "en";
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = translate(element.dataset.i18n);
        if (element instanceof HTMLMetaElement && element.name === "description") {
            element.content = value;
        } else {
            element.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
        element.content = translate(element.dataset.i18nContent);
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
        element.title = translate(element.dataset.i18nTitle);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        element.alt = translate(element.dataset.i18nAlt);
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
        const selected = button.dataset.language === currentLanguage;
        button.setAttribute("aria-pressed", String(selected));
        button.classList.toggle("is-active", selected);
    });

    const templeStory = document.querySelector(".temple-story");
    if (templeStory) templeStory.lang = currentLanguage;
    if (slider) slider.setAttribute("aria-label", translate("carousel.label"));
    if (slides.length) showSlide(currentSlide);
    syncAutoplay();

    if (qrToggle) {
        const expanded = qrToggle.getAttribute("aria-expanded") === "true";
        const key = expanded ? "qr.hide" : "qr.show";
        qrToggle.textContent = translate(key);
        qrToggle.setAttribute("aria-label", translate(key));
    }
}

document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
        applyLanguage(button.dataset.language);
        try {
            localStorage.setItem("temple-site-language", currentLanguage);
        } catch {
            // Language switching still works when storage is unavailable.
        }
    });
});

function loadSlideImage(slide) {
    const image = slide.querySelector("img[data-src]");
    if (image) {
        image.src = image.dataset.src;
        image.removeAttribute("data-src");
    }
}

function showSlide(index) {
    if (!slides.length) return;

    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
        const active = slideIndex === currentSlide;
        slide.classList.toggle("active", active);
        slide.setAttribute("aria-hidden", String(!active));
        slide.setAttribute("aria-label", translate("carousel.slideOf", { index: slideIndex + 1, count: slides.length }));
        if (active) loadSlideImage(slide);
    });
}

if (slides.length > 1) {
    document.querySelector(".slider-prev")?.addEventListener("click", () => {
        showSlide(currentSlide - 1);
        syncAutoplay();
    });
    document.querySelector(".slider-next")?.addEventListener("click", () => {
        showSlide(currentSlide + 1);
        syncAutoplay();
    });
    showSlide(0);
    syncAutoplay();
}

function syncAutoplay() {
    window.clearInterval(autoplayTimer);
    const isInteracting = slider?.matches(":hover") || slider?.contains(document.activeElement);
    const shouldRotate = !autoplayPaused && !document.hidden && !isInteracting;

    if (autoplayButton) {
        const label = translate(autoplayPaused ? "carousel.play" : "carousel.pause");
        autoplayButton.textContent = autoplayPaused ? "▶" : "Ⅱ";
        autoplayButton.setAttribute("aria-label", label);
        autoplayButton.title = label;
    }

    if (shouldRotate && slides.length > 1) {
        autoplayTimer = window.setInterval(() => showSlide(currentSlide + 1), 6000);
    }
}

autoplayButton?.addEventListener("click", () => {
    autoplayPaused = !autoplayPaused;
    syncAutoplay();
});

slider?.addEventListener("mouseenter", syncAutoplay);
slider?.addEventListener("mouseleave", syncAutoplay);
slider?.addEventListener("focusin", syncAutoplay);
slider?.addEventListener("focusout", (event) => {
    if (!slider.contains(event.relatedTarget)) syncAutoplay();
});
document.addEventListener("visibilitychange", syncAutoplay);

document.querySelectorAll(".year").forEach((element) => {
    element.textContent = new Date().getFullYear();
});

const qrToggle = document.querySelector(".qr-toggle");
const qrCard = document.querySelector("#qr-card");

qrToggle?.addEventListener("click", () => {
    const expanded = qrToggle.getAttribute("aria-expanded") === "true";
    qrToggle.setAttribute("aria-expanded", String(!expanded));
    const key = expanded ? "qr.show" : "qr.hide";
    qrToggle.textContent = translate(key);
    qrToggle.setAttribute("aria-label", translate(key));
    if (qrCard) qrCard.hidden = expanded;
});

const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");

if (gallery && lightbox && lightboxImage) {
    gallery.addEventListener("click", (event) => {
        const item = event.target.closest(".gallery-item");
        const image = item?.querySelector("img");
        if (!image) return;

        lightboxImage.src = item.dataset.full || image.currentSrc || image.src;
        lightboxImage.alt = image.alt;
        lightbox.showModal();
    });

    document.querySelector(".lightbox-close")?.addEventListener("click", () => {
        lightbox.close();
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) lightbox.close();
    });
}

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("js");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

let savedLanguage = "en";
try {
    savedLanguage = localStorage.getItem("temple-site-language") || "en";
} catch {
    savedLanguage = "en";
}
applyLanguage(savedLanguage);
