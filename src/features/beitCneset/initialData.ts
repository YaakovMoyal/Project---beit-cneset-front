import { BeitCnesetIF } from './interfaces/beitCnesetIF';

const initialData: BeitCnesetIF[] = [
  {
    name: 'שבעתה',
    address: 'מצדה 6, בני ברק',
    URLaddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.0963068181404!2d34.82830792446809!3d32.09368271859387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b70ede642bb%3A0xbac201e01563b985!2z157XkteT15wg16nXkdei16og15TXm9eV15vXkdeZ150!5e0!3m2!1siw!2sil!4v1707121821931!5m2!1siw!2sil',
    community: '8200',
    image: 'https://www.brlv.co.il/wp-content/uploads/2017/08/bbc2.jpg',
    gabai: {
      name: 'הרב ישי',
      managementOf: 'שבעתה',
      email: 'gabai211@example.com',
      password: 'securePassword123',
      phone: '0551234567',
    },
    tfilot: [
      {
        tfila: 'שחרית',
        time: '08:00',
      },
      {
        tfila: 'מנחה',
        time: '13:20',
      },
      {
        tfila: 'ערבית',
        time: '17:15',
      },
    ],
  },
  {
    name: 'מוסדות בעלזא',
    address: 'בינת יששכר 7, ירושלים',
    URLaddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13564.12576270045!2d35.22516644504267!3d31.796893052502114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d6226c461c7d%3A0xb927c0540824133e!2z157XqNeb15Yg16LXldec157XmSDXnNeq15XXqNeUINeV15fXodeZ15PXldeqINeR16LXnNeW15A!5e0!3m2!1siw!2sil!4v1707122464157!5m2!1siw!2sil',

    community: 'בעלז',
    image:
      'https://jerusalem.mynet.co.il/picserver/mynet/wcm_upload/wcm_mynet_pic/2019/10/23/518512/518512.jpg',
    gabai: {
      name: "ר' משה הכהן",
      email: 'gabai1@example.com',
      password: 'securePassword123',
      managementOf: 'מוסדות בעלזא',
      phone: '0551234567',
    },
    tfilot: [
      { tfila: 'שחרית', time: '09:00' },
      { tfila: 'מנחה', time: '13:00' },
      { tfila: 'ערבית', time: '19:30' },
    ],
  },
  {
    name: 'בית מדרש גור',
    address: 'ירמיהו 3, ירושלים',
    URLaddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13564.80262668593!2d35.23173464199775!3d31.792280907803498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d620dec1c001%3A0x43ada758b1149e62!2z15HXmdeqINee15PXqNepINeS15XXqA!5e0!3m2!1siw!2sil!4v1707122566502!5m2!1siw!2sil',

    community: 'גור',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8dLnMqEVip2hP4SCF7EY3nPFFhyTrvvajg&usqp=CAU',
    gabai: {
      name: "ר' אליהו הלוי",
      email: 'gabai2@example.com',
      password: 'strongPassword456',
      managementOf: 'בית מדרש גור',
      phone: '02-5667778',
    },
    tfilot: [
      { tfila: 'שחרית', time: '10:30' },
      { tfila: 'מנחה', time: '16:15' },
      { tfila: 'ערבית', time: '20:00' },
    ],
  },

  {
    name: 'מוסדות אריאל',
    address: 'הצפון 5, אריאל',
    URLaddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108164.48297359556!2d35.25753232090012!3d32.09249921672032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d270b0797feeb%3A0xe8ae03cbd935baad!2z15DXqNeZ15DXnA!5e0!3m2!1siw!2sil!4v1707122635445!5m2!1siw!2sil',
    community: 'אריאל',
    image:
      'https://static.wixstatic.com/media/eafb08_a77dba3f19b64d15bb06784ef8ac67b2~mv2.jpg/v1/fill/w_320,h_204,q_90/eafb08_a77dba3f19b64d15bb06784ef8ac67b2~mv2.jpg',
    gabai: {
      name: "ר' יעקב לוי",
      email: 'gabai4@example.com',
      password: 'securePassword910',
      managementOf: 'מוסדות אריאל',
      phone: '09-1234567',
    },
    tfilot: [
      { tfila: 'שחרית', time: '07:30' },
      { tfila: 'מנחה', time: '13:15' },
      { tfila: 'ערבית', time: '19:00' },
    ],
  },
  {
    name: "מוסדות ויז'ניץ",
    address: 'תורת חיים 9-5, בני ברק',
    URLaddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13522.997905145861!2d34.85698064097377!3d32.076024045112014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bfc57b070b3%3A0xf507f28a316fedbc!2z15XXmdeW17PXoNeZ16UgLSDXkdeZ16og15TXnteT16jXqSDXlNeS15PXldec!5e0!3m2!1siw!2sil!4v1707122703050!5m2!1siw!2sil',

    community: "ויז'ניץ",
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBIsQntlcVknK6w0uuqS9r4eIHCLjPp7haQ&usqp=CAU',
    gabai: {
      name: "ר' יצחק כהן",
      email: 'gabai5@example.com',
      password: 'securePassword111',
      managementOf: "מוסדות ויז'ניץ",
      phone: '04-5556667',
    },
    tfilot: [
      { tfila: 'שחרית', time: '08:30' },
      { tfila: 'מנחה', time: '14:30' },
      { tfila: 'ערבית', time: '19:45' },
    ],
  },
  {
    name: 'בית כנסת תל אביב',
    address: 'אלנבי 110, תל אביב-יפו',
    URLaddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54098.86830676587!2d34.84438317832029!3d32.06439969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c82c8a04c4b%3A0x5497a896a49392dc!2z15HXmdeqINeU15vXoNeh16og15TXkteT15XXnCDXqdecINeq15wg15DXkdeZ15E!5e0!3m2!1siw!2sil!4v1707122754304!5m2!1siw!2sil',

    community: 'תל אביב',
    image:
      'https://upload.wikimedia.org/wikipedia/he/thumb/b/b5/%D7%91%D7%99%D7%AA_%D7%94%D7%9E%D7%93%D7%A8%D7%A9_%D7%9C%D7%94%D7%9C%D7%9B%D7%94_%D7%91%D7%94%D7%AA%D7%99%D7%99%D7%A9%D7%91%D7%95%D7%AA.jpg/330px-%D7%91%D7%99%D7%AA_%D7%94%D7%9E%D7%93%D7%A8%D7%A9_%D7%9C%D7%94%D7%9C%D7%9B%D7%94_%D7%91%D7%94%D7%AA%D7%99%D7%99%D7%A9%D7%91%D7%95%D7%AA.jpg',
    gabai: {
      name: "ר' יהודה כהן",
      email: 'gabai6@example.com',
      password: 'strongPassword789',
      managementOf: 'בית כנסת תל אביב',
      phone: '03-4445556',
    },
    tfilot: [
      { tfila: 'שחרית', time: '09:15' },
      { tfila: 'מנחה', time: '15:00' },
      { tfila: 'ערבית', time: '20:30' },
    ],
  },
  {
    name: `בית כנסת הגדול`,
    address: 'חובבי ציון 37, פתח תקווה',
    URLaddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13521.063451653365!2d34.90302684092642!3d32.08909954221546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d366d5278f395%3A0xdcbb2712b740f4b4!2z15HXmdeqINeU15vXoNeh16og15TXkteT15XXnCDXpNeq15cg16rXp9eV15XXlA!5e0!3m2!1siw!2sil!4v1707122849421!5m2!1siw!2sil',

    community: 'פתח תקווה',
    image:
      'https://www.yeilat.org/media/3027/%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C-%D7%91%D7%99%D7%AA-%D7%94%D7%9E%D7%93%D7%A8%D7%A9900.jpg',
    gabai: {
      name: "ר' דוד כהן",
      email: 'gabai7@example.com',
      password: 'securePassword222',
      managementOf: 'בית כנסת הגדול',
      phone: '03-1234567',
    },
    tfilot: [
      { tfila: 'שחרית', time: '07:00' },
      { tfila: 'מנחה', time: '13:30' },
      { tfila: 'ערבית', time: '18:15' },
    ],
  },
  {
    name: "ישיבת פוניבז'",
    address: 'רבי אבא גרוסברד 7, בני ברק',
    URLaddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.483653802776!2d34.837261911145006!3d32.0832117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a3b1887446b%3A0x6d3e7e408b555cc5!2z15nXqdeZ15HXqiDXpNeV16DXmdeR15Yn!5e0!3m2!1siw!2sil!4v1707123011052!5m2!1siw!2sil',

    community: "פוניבז'",
    image:
      'https://images.kikar.co.il/cdn-cgi/image/format=jpeg,fit=contain,width=900/2023/04/26/ddcd3310-e451-11ed-8756-976be84b426a__h720_w1280.jpeg',
    gabai: {
      name: "ר' שלמה כהן",
      email: 'gabai8@example.com',
      password: 'strongPassword123',
      managementOf: "ישיבת פוניבז'",
      phone: '03-7654321',
    },
    tfilot: [
      { tfila: 'שחרית', time: '07:00' },
      { tfila: 'מנחה', time: '13:15' },
      { tfila: 'ערבית', time: '20:00' },
    ],
  },

  {
    name: 'ישיבת מיר',
    address: 'הרב זוננפלד 22, ירושלים',
    URLaddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54261.58979584908!2d35.29515897832031!3d31.788227299999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1503299dd053ce2b%3A0x3e4d35121fe1b459!2z15nXqdeZ15HXqiDXnteZ16ggLSDXpNeo15nXk9ee158!5e0!3m2!1siw!2sil!4v1707123052597!5m2!1siw!2sil',

    community: 'מיר',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/%D7%91%D7%A0%D7%99%D7%9F_%D7%99%D7%A9%D7%99%D7%91%D7%AA_%D7%9E%D7%99%D7%A8_%D7%91%D7%A8%D7%9B%D7%A4%D7%9C%D7%93.jpg',
    gabai: {
      name: "ר' משה לוי",
      email: 'gabai9@example.com',
      password: 'securePassword777',
      managementOf: 'ישיבת מיר',
      phone: '02-5000005',
    },
    tfilot: [
      { tfila: 'שחרית', time: '08:45' },
      { tfila: 'מנחה', time: '15:30' },
      { tfila: 'ערבית', time: '20:15' },
    ],
  },

  {
    name: 'בית כנסת הרמב"ן',
    address: 'אמציה 4, ירושלים',
    URLaddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13569.228583966558!2d35.23344944458007!3d31.762107700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329ceaae8e94f%3A0x53c4238e54f4f4bc!2z15HXmdeqINeb16DXodeqINeo157XkSLXnw!5e0!3m2!1siw!2sil!4v1707123105162!5m2!1siw!2sil',

    community: 'אחר',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/%D7%94%D7%97%D7%95%D7%A8%D7%91%D7%94_%D7%95%D7%91%D7%99%D7%AA_%D7%9B%D7%A0%D7%A1%D7%AA_%D7%94%D7%A8%D7%9E%D7%91%22%D7%9F.jpg/800px-%D7%94%D7%97%D7%95%D7%A8%D7%91%D7%94_%D7%95%D7%91%D7%99%D7%AA_%D7%9B%D7%A0%D7%A1%D7%AA_%D7%94%D7%A8%D7%9E%D7%91%22%D7%9F.jpg?20151007072139',
    gabai: {
      name: "ר' יוסף כהן",
      email: 'gabai10@example.com',
      password: 'strongPassword5432',
      managementOf: 'בית כנסת הרמב"ן',
      phone: '09-2222222',
    },
    tfilot: [
      { tfila: 'שחרית', time: '06:30' },
      { tfila: 'מנחה', time: '12:45' },
      { tfila: 'ערבית', time: '19:15' },
    ],
  },
  {
    name: 'בית הכנסת חב"ד',
    address: 'The Rebbe of Lubavitch 36, ירושלים',
    URLaddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13562.3988216623!2d35.23468094458008!3d31.808657699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329fdc695dc13%3A0xe8f97eede07d1906!2z15HXmdeqINeU15vXoNeh16ogNzcwICjXmdeo15XXqdec15nXnSk!5e0!3m2!1siw!2sil!4v1707123173152!5m2!1siw!2sil',

    community: 'חב"ד',
    image:
      'https://content.chabadigital.org/wp-content/uploads/2017/10/770kchabad.jpg',
    gabai: {
      name: "ר' אברהם כהן",
      email: 'gabai11@example.com',
      password: 'strongPassword890',
      managementOf: 'בית הכנסת חב"ד',
      phone: '03-7894561',
    },
    tfilot: [
      { tfila: 'שחרית', time: '08:00' },
      { tfila: 'מנחה', time: '16:45' },
      { tfila: 'ערבית', time: '20:45' },
    ],
  },

  {
    name: 'ישיבת סלונים',
    address: 'הרב שמואל סלנט 17, ירושלים',
    URLaddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6782.90149094937!2d35.23134892229005!3d31.785463399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329dd92984a09%3A0x8f3f5fbe0c6f071a!2z15nXqdeZ15HXqiDXkdeZ16og15DXkdeo15TXnSDXodec15XXoNeZ150!5e0!3m2!1siw!2sil!4v1707123337095!5m2!1siw!2sil',

    community: 'סלונים',
    image:
      'https://greenpel.co.il/wp-content/uploads/2020/12/%D7%A1%D7%95%D7%A4%D7%99-%D7%97%D7%93%D7%A9-3-scaled.jpg',
    gabai: {
      name: "ר' יצחק כהן",
      email: 'gabai12@example.com',
      password: 'strongPassword246',
      managementOf: 'ישיבת סלונים',
      phone: '02-1234569',
    },
    tfilot: [
      { tfila: 'שחרית', time: '06:45' },
      { tfila: 'מנחה', time: '13:00' },
      { tfila: 'ערבית', time: '21:00' },
    ],
  },
];

export default initialData;
