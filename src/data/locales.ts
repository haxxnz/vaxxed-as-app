import type { Locales } from "./types";

const locales: Locales = {
  ar: {
    cameraPermissionDialog: {
      callToAction: "السماح",
      content: "يتطلب {{appname}} استخدام الكاميرا لالتقاط {{passName}}",
      title: "يرجى السماح باستخدام الكاميرا"
    },
    footer: {
      disclaimer:
        "هذا ليس موقعًا رسميًا للحكومة. لمزيد من المعلومات حول COVIDpass، يرجى الانتقال إلى https://nzcp.covid19.health.nz",
      privacy:
        "لا تتم مشاركة نتائج عمليات المسح مع أي كيان؛ خاص أو عام أو حكومي. لم تتم إضافة أي تتبع على الإطلاق إلى هذا الموقع، إذا وجدت أي مشاكل، يرجى إرسال بريد إلكتروني إلى vaxxed@contrer.as"
    },
    header: {
      "Change language": "غير اللغة",
      "Scan your NZ COVIDpass": "مسح COVID الخاص بك في نيوزيلندا"
    },
    invalidCodes: {
      expired:
        "عذرًا، يبدو أنك قد انتهت صلاحية COVIDpass. يرجى الاتصال بـ [وزارة الصحة]({{link}})",
      invalid:
        "عذرًا، لم نتمكن من التحقق من COVID Pass الخاص بك. يرجى الاتصال بـ [وزارة الصحة]({{link}})",
      notAcovidPass:
        "عذرًا، هذا لا يبدو أنه COVIDpass. يرجى الاتصال بـ [وزارة الصحة]({{link}})"
    },
    thisLanguage: {
      callToAction: "باللغة العربية vaxxed.as استخدم",
      name: "عربي"
    },
    verificationDialog: {
      "Attention needed": "يجب الانتباه",
      Close: "إغلاق",
      "Copy results": "نتائج النسخ",
      "Date of birth": "تاريخ الميلاد",
      "First name": "الاسم الأول",
      "Last name": "اسم العائلة",
      "Verification results": "نتائج التحقق",
      "View details": "عرض التفاصيل",
      onlyForVerificationPurposes:
        "يرجى استخدام النتائج لأغراض التحقق فقط. إنه لأمر جيد احترام خصوصية الجميع.",
      yes: "نعم"
    }
  },
  de: {
    cameraPermissionDialog: {
      callToAction: "Zulassen",
      content:
        "Die {{appname}} erfordert die Verwendung Ihrer Kamera, um den {{passName}} zu erfassen",
      title: "Bitte erlauben Sie die Verwendung der Kamera"
    },
    footer: {
      disclaimer:
        "Dies ist keine offizielle Regierungswebsite. Weitere Informationen zum CovidPass finden Sie unter https://nzcp.covid19.health.nz",
      privacy:
        "Die Ergebnisse der Scans werden vertraulich behandelt und nicht an Dritte, weder privat, öffentlich noch staatlich, weitergegeben. Dieser Webseite wurde keinerlei Tracking hinzugefügt. Wenn Sie Probleme feststellen, senden Sie bitte eine E-Mail an vaxxed@contrer.as"
    },
    header: {
      "Change language": "Sprache ändern",
      "Scan your NZ COVIDpass": "Scannen Sie Ihren NZ CovidPass"
    },
    invalidCodes: {
      expired:
        "Ihr CovidPass ist abgelaufen. Bitte wenden Sie sich an das [Gesundheitsministerium (Ministry of Health)]({{link}})",
      invalid:
        "Wir bitten um Ihr Verständnis, aber leider konnten wir Ihren CovidPass nicht überprüfen. Bitte wenden Sie sich an das [Gesundheitsministerium (Ministry of Health)]({{link}})",
      notAcovidPass:
        "Dies scheint nicht der CovidPass zu sein. Probieren Sie bitte erneut oder wenden Sie sich an das [Gesundheitsministerium (Ministry of Health)]({{link}})"
    },
    thisLanguage: {
      callToAction: "Verwenden Sie vaxxed.as in Deutsch",
      name: "Deutsch"
    },
    verificationDialog: {
      "Attention needed": "Aufmerksamkeit erforderlich",
      Close: "Schließen",
      "Copy results": "Ergebnisse übernehmen",
      "Date of birth": "Geburtsdatum",
      "First name": "Vorname",
      "Last name": "Nachname",
      "Verification results": "Prüfergebnisse",
      "View details": "Details anzeigen",
      onlyForVerificationPurposes:
        "Bitte verwenden Sie die Ergebnisse nur zu Überprüfungszwecken. Es ist gut, die Privatsphäre aller zu respektieren.",
      yes: "Ja"
    }
  },
  en: {
    cameraPermissionDialog: {
      callToAction: "Allow",
      content:
        "The {{appname}} requires the use of your camera to capture the {{passName}}",
      title: "Please allow camera use"
    },
    footer: {
      disclaimer:
        "This is not an official Government website. For more information about the COVIDpass, please go to https://nzcp.covid19.health.nz",
      privacy:
        "The results of the scans are not shared to any entity; private, public, or governmental. No tracking whatsoever has been added to this site, if you find any issues, please email vaxxed@contrer.as"
    },
    header: {
      "Change language": "Change language",
      "Scan your NZ COVIDpass": "Scan your NZ COVIDpass"
    },
    invalidCodes: {
      expired:
        "Sorry, it looks like you COVIDpass has expired. Please contact the [Ministry of Health]({{link}})",
      invalid:
        "Sorry, we could not verify your COVIDpass. Please contact the [Ministry of Health]({{link}})",
      notAcovidPass:
        "Sorry, this doesn't look to be a COVIDpass. Please contact the [Ministry of Health]({{link}})"
    },
    thisLanguage: {
      callToAction: "Use vaxxed.as in English",
      name: "English"
    },
    verificationDialog: {
      "Attention needed": "Attention needed",
      Close: "Close",
      "Copy results": "Copy results",
      "Date of birth": "Date of birth",
      "First name": "First name",
      "Last name": "Last name",
      "Verification results": "Verification results",
      "View details": "View details",
      onlyForVerificationPurposes:
        "Please use the results for verification purposes only. It's a good thing to respect everybody's privacy.",
      yes: "Yes"
    }
  },
  es: {
    cameraPermissionDialog: {
      callToAction: "Permitir",
      content:
        "El {{appname}} requiere el uso de la cámara para capturar el {{passName}}",
      title: "Permita el uso de la cámara"
    },
    footer: {
      disclaimer:
        "Este no es un sitio web oficial del gobierno. Para obtener más información sobre el COVIDpass, visite https://nzcp.covid19.health.nz",
      privacy:
        "Los resultados de los análisis no se comparten con ninguna entidad; privada, pública o gubernamental. No se ha agregado ningún tipo de tracking a este sitio, si encuentra algún problema, envíe un correo electrónico a vaxxed@contrer.as"
    },
    header: {
      "Change language": "Cambiar idioma",
      "Scan your NZ COVIDpass": "Escanea tu NZ COVIDPass"
    },
    invalidCodes: {
      expired:
        "Lo sentimos, parece que su COVIDpass ha caducado. Por favor póngase en contacto con el [Ministerio de Salud (Ministry of Health)]({{link}})",
      invalid:
        "Lo sentimos, no pudimos verificar su COVIDpass. Por favor póngase en contacto con el [Ministerio de Salud (Ministry of Health)]({{link}})",
      notAcovidPass:
        "Lo sentimos, esto no parece ser un COVIDpass. Por favor póngase en contacto con el [Ministerio de Salud (Ministry of Health)]({{link}})"
    },
    thisLanguage: {
      callToAction: "Utilice vaxxed.as en Español",
      name: "Español"
    },
    verificationDialog: {
      "Attention needed": "Atención necesaria",
      Close: "Cerrar",
      "Copy results": "Copiar resultados",
      "Date of birth": "Fecha de cumpleaños",
      "First name": "Primer nombre",
      "Last name": "Apellido",
      "Verification results": "Resultados de la verificación",
      "View details": "Ver detalles",
      onlyForVerificationPurposes:
        "Utilice los resultados únicamente para fines de verificación. Es bueno respetar la privacidad de todos.",
      yes: "Sí"
    }
  },
  fa: {
    cameraPermissionDialog: {
      callToAction: "اجازه دادن",
      content:
        "{{appname}} نیاز به استفاده از دوربین شما برای ضبط {{passName}} دارد",
      title: "لطفا اجازه استفاده از دوربین را بدهید"
    },
    footer: {
      disclaimer:
        "این یک وب سایت رسمی دولت نیست. برای کسب اطلاعات بیشتر در مورد CovidPass، لطفا به آدرس https://nzcp.covid19.health.nz مراجعه نمایید.",
      privacy:
        "نتایج اسکن‌ها به هیچ نهاد خصوصی، دولتی و یا با عموم به اشتراک گذاشته نمی‌شود. این وبسایت فاقد هرگونه سیستم ردیابی می‌باشد ، در مواجه با هرگونه مشکلی لطفا با نشانی پست الکترونیکی  ذیل ارتباط برقرار فرمایید \nvaxxed@contrer.as"
    },
    header: {
      "Change language": "تغییر زبان",
      "Scan your NZ COVIDpass": "CovidPass خود را اسکن نمایید. "
    },
    invalidCodes: {
      expired:
        "متاسفانه، COVIDpass  شما منقضی شده است.  لطفا با [وزارت بهداشت] تماس حاصل فرمایید.  ({{link}})",
      invalid:
        "متأسفانه ما قادر به تأیید CovidPass شما نیستیم. لطفا با [وزارت بهداشت] تماس بگیرید ({{link}})",
      notAcovidPass:
        "متاسفانه ،QR کد شما یک COVIDpass نیست.   لطفا با [وزارت بهداشت] تماس بگیرید ({{link}})"
    },
    thisLanguage: {
      callToAction: "استفاده از vaxxed.asبه زبان فارسی",
      name: "فارسی"
    },
    verificationDialog: {
      "Attention needed": "توجه فرمایید ",
      Close: "بستن",
      "Copy results": "کپی نتایج",
      "Date of birth": "تاریخ تولد",
      "First name": "نام",
      "Last name": "نام خانوادگی",
      "Verification results": "تأیید اعتبار نتایج ",
      "View details": "مشاهده جزئیات",
      onlyForVerificationPurposes:
        "لطفا نتایج را فقط به منظور اهداف تأیید استفاده نمایید و به حريم خصوصي دیگران احترام بگذارید. ",
      yes: "آری"
    }
  },
  hi: {
    cameraPermissionDialog: {
      callToAction: "अनुमति दें",
      content:
        "{{appname}} को {{passName}} को कैप्चर करने के लिए आपके कैमरे के उपयोग की आवश्यकता होती है",
      title: "कृपया कैमरा उपयोग की अनुमति दें"
    },
    footer: {
      disclaimer:
        "यह एक आधिकारिक सरकारी वेबसाइट नहीं है। COVIDpass के बारे में अधिक जानकारी के लिए, कृपया https://nzcp.covid19.health.nz . पर जाएं",
      privacy:
        "स्कैन के परिणाम किसी भी इकाई; निजी, सार्वजनिक या सरकारी को साझा नहीं किए जाते हैं। इस साइट पर जो भी ट्रैकिंग नहीं जोड़ी गई है, अगर आपको कोई समस्या मिलती है, तो कृपया vaxxed@contrer.as पर ईमेल करें"
    },
    header: {
      "Change language": "भाषा बदलें",
      "Scan your NZ COVIDpass": "अपने NZ COVIDPass को स्कैन करें"
    },
    invalidCodes: {
      expired:
        "क्षमा करें, ऐसा लगता है कि आप कोविदपास की समय सीमा समाप्त हो गई है। कृपया [स्वास्थ्य मंत्रालय (Ministry of Health)]({{link}}) से संपर्क करें",
      invalid:
        "क्षमा करें, हम आपके COVIDpass की पुष्टि नहीं कर सके। कृपया [मिनिस्ट्री ऑफ़ हेल्थ] से संपर्क करें (Ministry of Health)]({{link}})",
      notAcovidPass:
        "क्षमा करें, यह कोई COVIDpass नहीं लगता। कृपया [मिनिस्ट्री ऑफ़ हेल्थ] से संपर्क करें (Ministry of Health)]({{link}})"
    },
    thisLanguage: {
      callToAction: "हिंदी में vaxxed.as का प्रयोग करें",
      name: "अंग्रेज़ी"
    },
    verificationDialog: {
      "Attention needed": "ध्यान देने की आवश्यकता है",
      Close: "बंद करें",
      "Copy results": "परिणाम नक़ल करें",
      "Date of birth": "जन्मतिथि",
      "First name": "पहला नाम",
      "Last name": "अंतिम नाम",
      "Verification results": "सत्यापन के परिणाम",
      "View details": "विवरण देखें",
      onlyForVerificationPurposes:
        "कृपया परिणामों का उपयोग केवल सत्यापन उद्देश्यों के लिए करें। हर किसी की निजता का सम्मान करना अच्छी बात है।",
      yes: "हाँ"
    }
  },
  mi: {
    cameraPermissionDialog: {
      callToAction: "Tukua",
      content:
        "Ko te {{appname}} me whakamahi to kamera ki te hopu i te {{passName}}",
      title: "Whakaaetia te whakamahi kamera"
    },
    footer: {
      disclaimer:
        "Ehara tenei i te paetukutuku mana a te Kawanatanga. Mo etahi atu korero mo te COVIDpass, haere ki https://nzcp.covid19.health.nz",
      privacy:
        "Ko nga hua o nga karapa kaore e tohatohahia ki tetahi hinonga; tūmataiti, tūmatanui, kāwanatanga ranei. Karekau he whainga kua taapirihia ki tenei papaanga, mena ka kitea e koe etahi take, tena koa imeera vaxxed@contrer.as"
    },
    header: {
      "Change language": "Huri reo",
      "Scan your NZ COVIDpass": "Matawai i to NZ COVIDpass"
    },
    invalidCodes: {
      expired:
        "Aroha mai, te ahua nei kua pau to COVIDpass. Tena koa whakapā atu ki te [Manatū Hauora (Ministry of Health)]({{link}})",
      invalid:
        "Aroha mai, kaore i taea e matou te manatoko i to urunga COVIDpass. Tena koa whakapā atu ki te [Manatū Hauora (Ministry of Health)]({{link}})",
      notAcovidPass:
        "Aroha mai, ehara tenei i te COVIDpass. Tena koa whakapā atu ki te [Manatū Hauora (Ministry of Health)]({{link}})"
    },
    thisLanguage: {
      callToAction: "Whakamahia te vaxxed.as i te reo Māori",
      name: "Te reo Māori"
    },
    verificationDialog: {
      "Attention needed": "Me aro",
      Close: "Katia",
      "Copy results": "Tārua ngā hua",
      "Date of birth": "Te ra whanau",
      "First name": "Ingoa tuatahi",
      "Last name": "Ingoa whakamutunga",
      "Verification results": "Nga hua manatoko",
      "View details": "Tirohia nga taipitopito",
      onlyForVerificationPurposes:
        "Tena koa whakamahia nga hua mo nga kaupapa manatoko anake. He mea pai ki te whakaute i te noho muna o te katoa.",
      yes: "Āe"
    }
  },
  nl: {
    cameraPermissionDialog: {
      callToAction: "Toestaan",
      content:
        "De {{appname}} vereist het gebruik van je camera om de {{passName}} vast te leggen",
      title: "Gelieve cameragebruik toe"
    },
    footer: {
      disclaimer:
        "Dit is geen officiële website van de overheid. Ga voor meer informatie over de COVIDpass naar https://nzcp.covid19.health.nz",
      privacy:
        "De resultaten van de scans worden niet gedeeld met een entiteit; privé, openbaar of overheidsinstanties. Er is geen enkele tracking toegevoegd aan deze site, als u problemen ondervindt, stuur dan een e-mail naar vaxxed@contrer.as"
    },
    header: {
      "Change language": "Taal wijzigen",
      "Scan your NZ COVIDpass": "Scan je NZ COVIDpass"
    },
    invalidCodes: {
      expired:
        "Sorry, het lijkt erop dat je COVIDpass is verlopen. Neem contact op met het [Ministerie van Volksgezondheid (Ministry of Health)]({{link}})",
      invalid:
        "Sorry, we hebben je COVIDpass niet kunnen verifiëren. Neem dan contact op met het [Ministerie van Volksgezondheid (Ministry of Health)]({{link}})",
      notAcovidPass:
        "Sorry, dit lijkt geen COVIDpass te zijn. Neem contact op met het [Ministerie van Volksgezondheid (Ministry of Health)]({{link}})"
    },
    thisLanguage: {
      callToAction: "Gebruik vaxxed.as in het Dutch",
      name: "Dutch"
    },
    verificationDialog: {
      "Attention needed": "Aandacht vereist",
      Close: "Sluiten",
      "Copy results": "Resultaten kopiëren",
      "Date of birth": "Geboortedatum",
      "First name": "Voornaam",
      "Last name": "Achternaam",
      "Verification results": "Resultaten van verificatie",
      "View details": "Bekijk details",
      onlyForVerificationPurposes:
        "Gebruik de resultaten alleen voor verificatiedoeleinden. Het is goed om ieders privacy te respecteren.",
      yes: "Ja"
    }
  },
  ru: {
    cameraPermissionDialog: {
      callToAction: "Разрешить",
      content:
        "{{appname}} требует использования вашей камеры для съемки {{passName}}",
      title: "Пожалуйста, разрешите использование камеры"
    },
    footer: {
      disclaimer:
        "Это не официальный сайт правительства. Для получения дополнительной информации о COVIDPass перейдите по ссылке https://nzcp.covid19.health.nz",
      privacy:
        "Результаты сканирования не передаются ни одной организации — частной, государственной или государственной. Отслеживание на этом сайте не было добавлено, если вы обнаружите какие-либо проблемы, напишите по адресу vaxxed@contrer.as"
    },
    header: {
      "Change language": "Изменить язык",
      "Scan your NZ COVIDpass": "Отсканируйте свой NZ COVIDPass"
    },
    invalidCodes: {
      expired:
        "Извините, похоже, у вас истек срок действия CovidPass. Обратитесь к [Министерству здравоохранения (Ministry of Health)]({{link}})",
      invalid:
        "К сожалению, нам не удалось проверить ваш CovidPass. Обратитесь к [Министерству здравоохранения (Ministry of Health)]({{link}})",
      notAcovidPass:
        "Извините, похоже, это не CovidPass. Обратитесь к [Министерству здравоохранения (Ministry of Health)]({{link}})"
    },
    thisLanguage: {
      callToAction: "Использовать vaxxed.as на русском",
      name: "Русский"
    },
    verificationDialog: {
      "Attention needed": "Требуется внимание",
      Close: "Закрыть",
      "Copy results": "Копировать результаты",
      "Date of birth": "Дата рождения",
      "First name": "Имя",
      "Last name": "Фамилия",
      "Verification results": "Результаты проверки",
      "View details": "Подробнее",
      onlyForVerificationPurposes:
        "Полученные результаты можно использовать только для проверки. Хорошо уважать неприкосновенность частной жизни каждого.",
      yes: "Да"
    }
  },
  sm: {
    cameraPermissionDialog: {
      callToAction: "Fa&#39;ataga",
      content:
        "E mana&#39;omia e le {{appname}} le fa&#39;aogaina o lau meapueata e pu&#39;e ai le {{passName}}",
      title: "Fa&#39;amolemole fa&#39;ataga le fa&#39;aoga meapueata"
    },
    footer: {
      disclaimer:
        "E le ose upegatafa&#39;ilagi aloaia a le Malo. Mo nisi fa&#39;amatalaga e uiga ile COVIDpass, fa&#39;amolemole alu ile https://nzcp.covid19.health.nz",
      privacy:
        "O fa&#39;ai&#39;uga o su&#39;esu&#39;ega e le fa&#39;asoa i so&#39;o se fa&#39;alapotopotoga; tumaoti, lautele, pe faalemalo. Leai se su&#39;esu&#39;ega so&#39;o se mea ua fa&#39;aopoopoina i lenei &#39;upega tafa&#39;ilagi, pe a e mauaina ni fa&#39;afitauli, fa&#39;amolemole imeli vaxxed@contrer.as"
    },
    header: {
      "Change language": "Suia le gagana",
      "Scan your NZ COVIDpass": "Va&#39;ai lau NZ COVIDpass"
    },
    invalidCodes: {
      expired:
        "Fa&#39;amalie atu, e foliga mai ua mae&#39;a lau COVIDpass. Fa&#39;amolemole fa&#39;afeso&#39;ota&#39;i le [Matagaluega o le Soifua Maloloina (Ministry of Health)]({{link}})",
      invalid:
        "Fa&#39;amalie atu, matou te le mafai ona fa&#39;amaonia lau COVIDpass. Fa&#39;amolemole fa&#39;afeso&#39;ota&#39;i le [Matagaluega o le Soifua Maloloina (Ministry of Health)]({{link}})",
      notAcovidPass:
        "Fa&#39;amalie atu, e le o se COVIDpass lea. Fa&#39;amolemole fa&#39;afeso&#39;ota&#39;i le [Matagaluega o le Soifua Maloloina (Ministry of Health)]({{link}})"
    },
    thisLanguage: {
      callToAction: "Fa'aaoga le vaxxed.as o le gagana Samoa",
      name: "Samoa"
    },
    verificationDialog: {
      "Attention needed": "Manaomia le gauai",
      Close: "Tapuni",
      "Copy results": "Kopi i&#39;uga",
      "Date of birth": "Aso fanau",
      "First name": "Igoa muamua",
      "Last name": "Faʻaiu",
      "Verification results": "I&#39;uga fa&#39;amaoniga",
      "View details": "Va&#39;ai fa&#39;amatalaga",
      onlyForVerificationPurposes:
        "Fa&#39;amolemole fa&#39;aoga tali mo na&#39;o fa&#39;amaoniga. Ose mea lelei le fa&#39;aaloalo i le le faalauaiteleina o tagata uma.",
      yes: "ioe"
    }
  },
  "zh-cn": {
    cameraPermissionDialog: {
      callToAction: "允许",
      content: "{{appname}} 需要使用相机捕获 {{passName}}",
      title: "请允许使用相机"
    },
    footer: {
      disclaimer:
        "這不是官方的政府網站。 有關 COVIDpass 的更多信息，請訪問 https://nzcp.covid19.health.nz",
      privacy:
        "扫描结果不会共享给任何实体；私人、公共或政府实体。本网站没有添加任何追踪信息，如果您发现任何问题，请发送电子邮件至 vaxxed@contrer.as"
    },
    header: {
      "Change language": "改变语言",
      "Scan your NZ COVIDpass": "扫描你的新西兰 CovidPass"
    },
    invalidCodes: {
      expired:
        "抱歉，您的 COVID pass 好像已過期。 請聯繫[衛生部 (Ministry of Health)]({{link}})",
      invalid:
        "抱歉，我們無法驗證您的 COVIDpass。 請聯繫[衛生部 (Ministry of Health)]({{link}})",
      notAcovidPass:
        "抱歉，這看起來不是 COVIDpass。 請聯繫[衛生部 (Ministry of Health)]({{link}})"
    },
    thisLanguage: {
      callToAction: "使用 vaxxed.as 简体中文",
      name: "简体中文"
    },
    verificationDialog: {
      "Attention needed": "需要注意",
      Close: "关闭",
      "Copy results": "复制结果",
      "Date of birth": "出生日期",
      "First name": "名字",
      "Last name": "姓氏",
      "Verification results": "验证结果",
      "View details": "查看详情",
      onlyForVerificationPurposes:
        "请仅将结果用于验证目的。尊重每个人的隐私是一件好事。",
      yes: "是"
    }
  },
  "zh-hk": {
    cameraPermissionDialog: {
      callToAction: "允許",
      content: "{{appname}} 需要使用您的相機來捕捉 {{passName}}",
      title: "請允許使用相機"
    },
    footer: {
      disclaimer:
        "這不是官方的政府網站。 有關 COVIDpass 的更多信息，請訪問 https://nzcp.covid19.health.nz",
      privacy:
        "掃描結果不會共用給任何實體；私人、公共或政府機構。本網站沒有追蹤任何追蹤資訊，如果您發現任何問題，請電子郵件至 vaxxed@contrer.as"
    },
    header: {
      "Change language": "更改語言",
      "Scan your NZ COVIDpass": "掃描您的 NZ COVIDpass"
    },
    invalidCodes: {
      expired:
        "抱歉，您的 COVIDpass 好像已過期。 請聯繫[衛生部 (Ministry of Health)]({{link}})",
      invalid:
        "抱歉，我們無法驗證您的 COVIDpass。 請聯繫[衛生部 (Ministry of Health)]({{link}})",
      notAcovidPass:
        "抱歉，這看起來不是 COVIDpass。 請聯繫[衛生部 (Ministry of Health)]({{link}})"
    },
    thisLanguage: {
      callToAction: "在繁體中文中使用 vaxxed.as",
      name: "中國傳統的"
    },
    verificationDialog: {
      "Attention needed": "敬請注意",
      Close: "關閉",
      "Copy results": "複製結果",
      "Date of birth": "出生日期",
      "First name": "名字",
      "Last name": "姓氏",
      "Verification results": "驗證結果",
      "View details": "查看詳情",
      onlyForVerificationPurposes:
        "請使用結果僅作驗證之用。尊重每個人的隱私是件好事",
      yes: "是"
    }
  }
};
export { locales };
