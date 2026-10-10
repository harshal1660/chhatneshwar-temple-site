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
        "site.brand": "Chhatneshwar",
        "site.anniversary": "250 Years",
        "invitation.title": "Program invitation",
        "invitation.close": "Close invitation",
        "invitation.alt": "Invitation to the temple program",
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
        "home.temple.text": "The mandir has a 250-year-old tradition of worship and continues through generations, with special gatherings during Navratri.",
        "home.temple.link": "Explore the temple history",
        "home.gallery.title": "Gallery",
        "home.gallery.text": "Browse photographs of the mandir, village life, and community celebrations.",
        "home.gallery.link": "Explore the gallery",
        "home.cards.label": "Explore Chhatneshwar",
        "map.title": "Visit Us",
        "map.place": "Chhatneshwar Durga Mandir",
        "map.frame": "Interactive map to Chhatneshwar Durga Mandir",
        "map.directions": "Open in Google Maps",
        "qr.label": "DurgaPuja QR code",
        "qr.hide": "Hide QR",
        "qr.show": "Show QR",
        "qr.alt": "UPI payment QR code Chhatneshwar DurgaPuja",
        "qr.caption": "Durga Puja Chhatneshwar",
        "qr.pay": "Pay via UPI",
        "qr.payAction": "Open a UPI payment app",
        "qr.id": "UPI ID: 9967730356@ptaxis",
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
        "story.title": "Chhatneshwar Durga Mandir: Devotion, Tradition and a Living Heritage",
        "story.intro": "This Durga temple in Chhatneshwar, Samastipur, is at the heart of the village's faith and generations of worship. Local family tradition is 250 years old. About 12 kilometres from the district headquarters, it welcomes many devotees during Navratri.",
        "story.dream.heading": "Worship of Maa Durga Began with a Dream",
        "story.dream.one": "According to temple attendant Satyadev Prasad Karn, his great-grandfather, the late Ramnath Das, served as a diwan in the court of the Darbhanga Maharaja.",
        "story.dream.two": "The family's account says that after years without a child, Ramnath Das saw Maa Durga in a dream. She blessed him with a son and asked him to build a temple.",
        "story.dream.three": "A son, Lakshmi Datt Lal Das, was born to Ramnath Das in Chhatneshwar village.",
        "story.dream.four": "In gratitude to the Mother, he began building the temple that same year. This account continues to inspire devotees through its message of faith, resolve and service.",
        "story.worship.heading": "Temple Foundations and Worship",
        "story.worship.one": "Local accounts say artisans of the Darbhanga Maharaja made the idol, and accomplished priests from Darbhanga began the worship.",
        "story.worship.two": "Since then, Maa Durga has been worshipped through the customs established by the ancestors and carried forward across generations.",
        "story.worship.three": "Currently, the family of Lakshmi Dutt Lal Das is carrying forward this sacred tradition through proper rites and religious ceremonies.",
        "story.sixth.heading": "The Shashthi-to-Saptami Tradition",
        "story.sixth.one": "The sequence of worship on Shashthi and Saptami holds a special place in the temple's tradition.",
        "story.sixth.two": "According to custom, Maa Durga is formally invited on Shashthi beneath a sacred bel tree some distance from the temple.",
        "story.sixth.three": "On Saptami, the Goddess is brought to the temple for the kalash installation and worship. Alongside kalash worship, direct worship of the Goddess is a distinctive part of this tradition.",
        "story.sixth.four": "This observance has been carried through generations and is still performed with devotion.",
        "story.ashtami.heading": "Special Observances on Ashtami and Navami",
        "story.ashtami.one": "Maha Ashtami and Maha Navami are especially significant at Chhatneshwar Durga Mandir. Large numbers of devotees travel from near and far to offer prayers and seek the Goddess's darshan on these days.",
        "story.ashtami.two": "Local tradition describes goat sacrifice in large numbers on these days as part of the temple's old observance.",
        "story.faith.heading": "Faith Carried Across Generations",
        "story.faith.one": "The worship of Maa Durga, which began in Chhatneshwar village, has been connecting devotees for approximately 250 years.",
        "story.faith.two": "This siddhpeeth is more than a place of worship, it is a shared heritage of families, temple servants and the whole village.",
        "story.faith.three": "During Navratri, worship, devotion and community participation bring a special energy to Chhatneshwar.",
        "story.heritage.heading": "Chhatneshwar's Shared Heritage",
        "story.heritage.text": "Connected to Mithila's cultural traditions, the region continues to cherish religious festivals, folk customs and family observances. Alongside devotion to Maa Durga, education, social unity, ties with residents living away and love for one's roots are all part of Chhatneshwar's identity.",
        "story.next.heading": "For Generations to Come",
        "story.next.text": "Learning about our heritage and passing it on is a shared responsibility. This website is an effort to preserve Chhatneshwar's history, the temple, worship traditions, festivals, village landmarks and people's memories in one place. May future generations discover their village's story, take pride in its culture and carry these traditions forward with love.",
        "story.motto": "Where there is faith in the Mother, there is her blessing; where there is love for one's roots, there is Chhatneshwar.",
        "story.blessing": "Jai Mata Di",
        "story.signature": "Siddhpeeth Durga Mandir, Chhatneshwar — Bihar",
        "gallery.meta": "Photographs of Chhatneshwar village, its temple and community celebrations in Samastipur, Bihar.",
        "gallery.title": "Village Gallery | Chhatneshwar Durga Mandir",
        "gallery.heading": "Village Gallery",
        "gallery.templeAlt": "Chhatneshwar Durga Mandir",
        "gallery.photoAlt": "A photograph from Chhatneshwar village",
        "gallery.newPhoto3978": "The temple entrance illuminated at dusk",
        "gallery.newPhoto3979": "A red temple tower framed by palm trees",
        "gallery.newPhoto3980": "The temple facade lit for a celebration",
        "gallery.newPhoto3981": "A side view of the temple beneath the evening sky",
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
        "contact.location": "Temple address and map",
        "contact.address": "Address",
        "contact.village": "Village",
        "contact.postOffice": "Post Office",
        "contact.district": "District",
        "contact.state": "State",
        "contact.taluka": "Tehsil / Taluka",
        "contact.pinCode": "PIN Code",
        "contact.youtube": "YouTube channel",
        "contact.facebook": "Facebook page",
        "contact.youtubeAction": "Watch on YouTube",
        "contact.facebookAction": "Visit Facebook"
    },
    hi: {
        "language.label": "भाषा",
        "language.switchEnglish": "अंग्रेज़ी में बदलें",
        "language.switchHindi": "हिंदी में बदलें",
        "site.brand": "छतनेश्वर",
        "site.anniversary": "250 वर्ष",
        "invitation.title": "कार्यक्रम का निमंत्रण",
        "invitation.close": "निमंत्रण बंद करें",
        "invitation.alt": "मंदिर के कार्यक्रम का निमंत्रण",
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
        "home.temple.text": "मंदिर की आराधना परंपरा 250 वर्षों से चली आ रही है और पीढ़ियों से जारी है। नवरात्रि में यहां विशेष आयोजन होते हैं।",
        "home.temple.link": "मंदिर का इतिहास जानें",
        "home.gallery.title": "गैलरी",
        "home.gallery.text": "मंदिर, गांव के जीवन और सामुदायिक उत्सवों की तस्वीरें देखें।",
        "home.gallery.link": "गैलरी देखें",
        "home.cards.label": "छतनेश्वर के बारे में जानें",
        "map.title": "यहां आएं",
        "map.place": "छतनेश्वर दुर्गा मंदिर",
        "map.frame": "छतनेश्वर दुर्गा मंदिर का इंटरैक्टिव नक्शा",
        "map.directions": "Google Maps में खोलें",
        "qr.label": "दुर्गापूजा के लिए QR कोड",
        "qr.hide": "QR छिपाएं",
        "qr.show": "QR दिखाएं",
        "qr.alt": "छतनेश्वर दुर्गापूजा के लिए UPI भुगतान QR कोड",
        "qr.caption": "दुर्गा पूजा छतनेश्वर",
        "qr.pay": "UPI से भुगतान करें",
        "qr.payAction": "UPI भुगतान ऐप खोलें",
        "qr.id": "UPI ID: 9967730356@ptaxis",
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
        "story.title": "🌺 छतनेश्वर दुर्गा मंदिर — भक्ति, परंपरा और जीवित विरासत 🌺",
        "story.intro": "समस्तीपुर जिले के छतनेश्वर गांव में विराजित मां दुर्गा का यह मंदिर गांव की आस्था और पीढ़ियों से निभाई जा रही पूजा का केंद्र है। स्थानीय पारिवारिक परंपरा के अनुसार, मंदिर की स्थापना की कथा 250 वर्ष पुरानी है। जिला मुख्यालय से लगभग 12 किलोमीटर दूर स्थित यह स्थान नवरात्रि में विशेष रूप से श्रद्धालुओं से भर उठता है।",
        "story.dream.heading": "🙏 स्वप्न से शुरू हुई मां दुर्गा की आराधना",
        "story.dream.one": "मंदिर के सेवक सत्यदेव प्रसाद कर्ण के अनुसार, उनके परदादा स्वर्गीय रामनाथ दास दरभंगा महाराज के यहां दीवान के पद पर कार्यरत थे।",
        "story.dream.two": "परिवार की परंपरा में वर्णित है कि कई वर्षों तक संतान न होने के बाद एक रात स्वप्न में मां दुर्गा ने रामनाथ दास को दर्शन दिए, पुत्र-प्राप्ति का आशीर्वाद दिया और मंदिर बनवाने का निर्देश दिया।",
        "story.dream.three": "छतनेश्वर गांव में रामनाथ दास के यहां पुत्र का जन्म हुआ, जिनका नाम लक्ष्मी दत्त लाल दास रखा गया।",
        "story.dream.four": "उसी वर्ष मां के प्रति कृतज्ञता प्रकट करते हुए उन्होंने मंदिर-निर्माण आरंभ कराया। यह कथा आज भी श्रद्धालुओं को विश्वास, संकल्प और सेवा की प्रेरणा देती है।",
        "story.worship.heading": "🛕 स्थापना और पूजा की परंपरा",
        "story.worship.one": "स्थानीय वर्णन के अनुसार, प्रतिमा का निर्माण दरभंगा महाराज के शिल्पकारों ने किया और वहीं के पुरोहितों ने पूजा-अर्चना आरंभ कराई।",
        "story.worship.two": "तब से मां दुर्गा की आराधना पूर्वजों द्वारा स्थापित रीति के अनुसार पीढ़ी-दर-पीढ़ी चलती आई है।",
        "story.worship.three": "वर्तमान में, लक्ष्मी दत्त लाल दास का परिवार पूरे विधि-विधान और धार्मिक अनुष्ठानों के साथ इस पावन परंपरा का निर्वहन कर रहा है।",
        "story.sixth.heading": "🌿 षष्ठी से सप्तमी तक विशेष विधान",
        "story.sixth.one": "छतनेश्वर दुर्गा मंदिर की पूजा-पद्धति में षष्ठी और सप्तमी का क्रम विशेष स्थान रखता है।",
        "story.sixth.two": "परंपरा के अनुसार, मंदिर से कुछ दूरी पर स्थित पवित्र बेल वृक्ष के नीचे षष्ठी के दिन मां को विधिवत आमंत्रित किया जाता है।",
        "story.sixth.three": "सप्तमी को मां को मंदिर लाकर कलश-स्थापना और पूजा-अर्चना संपन्न की जाती है। यहां कलश-पूजन के साथ देवी की प्रत्यक्ष आराधना भी इस परंपरा का विशिष्ट अंग है।",
        "story.sixth.four": "यह रीति पीढ़ियों से चली आ रही है और आज भी श्रद्धा के साथ निभाई जाती है।",
        "story.ashtami.heading": "🔱 अष्टमी और नवमी का विशेष अनुष्ठान",
        "story.ashtami.one": "छतनेश्वर दुर्गा मंदिर में महाष्टमी एवं महानवमी का विशेष महत्व है। इन दोनों दिनों में दूर-दूर से बड़ी संख्या में श्रद्धालु मां के दर्शन और पूजा-अर्चना के लिए पहुंचते हैं।",
        "story.ashtami.two": "स्थानीय परंपरा में इन दिनों बड़ी संख्या में छागड़ की बलि का उल्लेख मिलता है; यह मंदिर की पुरानी पूजा-पद्धति का हिस्सा रहा है।",
        "story.faith.heading": "🌸 पीढ़ियों से चली आ रही श्रद्धा",
        "story.faith.one": "छतनेश्वर गांव में शुरू हुई मां दुर्गा की यह पूजा लगभग 250 वर्षों से श्रद्धालुओं की आस्था का केंद्र बनी हुई है।",
        "story.faith.two": "यह सिद्धपीठ केवल पूजा का स्थान नहीं, बल्कि परिवारों, सेवकों और पूरे गांव की साझा विरासत है।",
        "story.faith.three": "नवरात्रि में भक्ति, पूजा और सामुदायिक सहभागिता से छतनेश्वर का वातावरण विशेष रूप से जीवंत हो उठता है।",
        "story.heritage.heading": "🪷 छतनेश्वर की साझी पहचान",
        "story.heritage.text": "मिथिला की सांस्कृतिक परंपरा से जुड़ा यह क्षेत्र धार्मिक उत्सवों, लोक-रीतियों और पारिवारिक संस्कारों को आज भी संजोए हुए है। मां दुर्गा के प्रति आस्था के साथ-साथ शिक्षा, सामाजिक एकता, प्रवासी गांववासियों का जुड़ाव और अपनी मिट्टी से प्रेम भी छतनेश्वर की पहचान हैं।",
        "story.next.heading": "🌱 आने वाली पीढ़ियों के लिए",
        "story.next.text": "अपनी विरासत को जानना और उसे आगे पहुंचाना हम सबकी साझा जिम्मेदारी है। यह वेबसाइट छतनेश्वर के इतिहास, मां दुर्गा मंदिर, पूजा-पद्धतियों, त्योहारों, गांव के स्थलों और लोगों की स्मृतियों को एक जगह संजोने का प्रयास है। आशा है कि आने वाली पीढ़ियां अपने गांव की कथा जानेंगी, अपनी संस्कृति पर गर्व करेंगी और इस परंपरा को प्रेम से आगे बढ़ाएंगी।",
        "story.motto": "जहां मां में आस्था है, वहां उनका आशीर्वाद है; जहां अपनी मिट्टी से प्रेम है, वहीं अपना छतनेश्वर है।",
        "story.blessing": "🌸 जय माता दी 🌸",
        "story.signature": "सिद्धपीठ दुर्गा मंदिर, छतनेश्वर — बिहार",
        "gallery.meta": "समस्तीपुर, बिहार के छतनेश्वर गांव, मंदिर और सामुदायिक उत्सवों की तस्वीरें।",
        "gallery.title": "गांव की गैलरी | छतनेश्वर दुर्गा मंदिर",
        "gallery.heading": "गांव की गैलरी",
        "gallery.templeAlt": "छतनेश्वर दुर्गा मंदिर",
        "gallery.photoAlt": "छतनेश्वर गांव की एक तस्वीर",
        "gallery.newPhoto3978": "संध्या की रोशनी में मंदिर का प्रवेश-द्वार",
        "gallery.newPhoto3979": "ताड़ के पेड़ों के बीच लाल मंदिर का शिखर",
        "gallery.newPhoto3980": "उत्सव के लिए रोशनी से सजा मंदिर का सामने का भाग",
        "gallery.newPhoto3981": "सांझ के आकाश के नीचे मंदिर का एक पार्श्व दृश्य",
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
        "contact.location": "मंदिर का पता और नक्शा",
        "contact.address": "पता",
        "contact.village": "गांव",
        "contact.postOffice": "डाकघर",
        "contact.district": "जिला",
        "contact.state": "राज्य",
        "contact.taluka": "तहसील / तालुका",
        "contact.pinCode": "पिन कोड",
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

const invitationDialog = document.querySelector("#invitation-dialog");
const invitationClose = invitationDialog?.querySelector(".invitation-close");
let invitationTimer;

if (invitationDialog instanceof HTMLDialogElement) {
    invitationDialog.showModal();
    invitationTimer = window.setTimeout(() => invitationDialog.close(), 5_000);

    invitationClose?.addEventListener("click", () => invitationDialog.close());
    invitationDialog.addEventListener("click", (event) => {
        if (event.target === invitationDialog) invitationDialog.close();
    });
    invitationDialog.addEventListener("close", () => window.clearTimeout(invitationTimer));
}
