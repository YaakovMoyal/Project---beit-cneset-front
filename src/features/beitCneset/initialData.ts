import { BeitCneset } from "./interfaces/beitCnesetIF";

const initialData: BeitCneset[] = [
  {
    name: "מוסדות בעלזא",
    address: "קדושת אהרון 10, ירושלים",
    community: "בעלז",
    image:
      "https://jerusalem.mynet.co.il/picserver/mynet/wcm_upload/wcm_mynet_pic/2019/10/23/518512/518512.jpg",
    gabai: {
      name: "ר' משה הכהן",
      email: "gabai1@example.com",
      password: "securePassword123",
      managementOf: "מוסדות בעלזא",
      phone: "0551234567",
    },
    tfilot: [
      { tfila: "שחרית", time: "09:00" },
      { tfila: "מנחה", time: "13:00" },
      { tfila: "ערבית", time: "19:30" },
    ],
  },
  {
    name: "בית מדרש גור",
    address: "ירמיהו 53, ירושלים",
    community: "גור",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8dLnMqEVip2hP4SCF7EY3nPFFhyTrvvajg&usqp=CAU",
    gabai: {
      name: "ר' אליהו הלוי",
      email: "gabai2@example.com",
      password: "strongPassword456",
      managementOf: "בית מדרש גור",
      phone: "02-5667778",
    },
    tfilot: [
      { tfila: "שחרית", time: "10:30" },
      { tfila: "מנחה", time: "16:15" },
      { tfila: "ערבית", time: "20:00" },
    ],
  },

  {
    name: "מוסדות אריאל",
    address: "הצפון 5, אריאל",
    community: "אריאל",
    image:
      "https://static.wixstatic.com/media/eafb08_a77dba3f19b64d15bb06784ef8ac67b2~mv2.jpg/v1/fill/w_320,h_204,q_90/eafb08_a77dba3f19b64d15bb06784ef8ac67b2~mv2.jpg",
    gabai: {
      name: "ר' יעקב לוי",
      email: "gabai4@example.com",
      password: "securePassword910",
      managementOf: "מוסדות אריאל",
      phone: "09-1234567",
    },
    tfilot: [
      { tfila: "שחרית", time: "07:30" },
      { tfila: "מנחה", time: "13:15" },
      { tfila: "ערבית", time: "19:00" },
    ],
  },
  {
    name: "מוסדות ויז'ניץ",
    address: "הנביאים 20, ירושלים",
    community: "ויז'ניץ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBIsQntlcVknK6w0uuqS9r4eIHCLjPp7haQ&usqp=CAU",
    gabai: {
      name: "ר' יצחק כהן",
      email: "gabai5@example.com",
      password: "securePassword111",
      managementOf: "מוסדות ויז'ניץ",
      phone: "04-5556667",
    },
    tfilot: [
      { tfila: "שחרית", time: "08:30" },
      { tfila: "מנחה", time: "14:30" },
      { tfila: "ערבית", time: "19:45" },
    ],
  },
  {
    name: "בית כנסת תל אביב",
    address: "השלום 10, תל אביב",
    community: "תל אביב",
    image:
      "https://upload.wikimedia.org/wikipedia/he/thumb/b/b5/%D7%91%D7%99%D7%AA_%D7%94%D7%9E%D7%93%D7%A8%D7%A9_%D7%9C%D7%94%D7%9C%D7%9B%D7%94_%D7%91%D7%94%D7%AA%D7%99%D7%99%D7%A9%D7%91%D7%95%D7%AA.jpg/330px-%D7%91%D7%99%D7%AA_%D7%94%D7%9E%D7%93%D7%A8%D7%A9_%D7%9C%D7%94%D7%9C%D7%9B%D7%94_%D7%91%D7%94%D7%AA%D7%99%D7%99%D7%A9%D7%91%D7%95%D7%AA.jpg",
    gabai: {
      name: "ר' יהודה כהן",
      email: "gabai6@example.com",
      password: "strongPassword789",
      managementOf: "בית כנסת תל אביב",
      phone: "03-4445556",
    },
    tfilot: [
      { tfila: "שחרית", time: "09:15" },
      { tfila: "מנחה", time: "15:00" },
      { tfila: "ערבית", time: "20:30" },
    ],
  },
  {
    name: `בית כנסת הגדול`,
    address: "הבנים 40, פתח תקווה",
    community: "פתח תקווה",
    image:
      "https://www.yeilat.org/media/3027/%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C-%D7%91%D7%99%D7%AA-%D7%94%D7%9E%D7%93%D7%A8%D7%A9900.jpg",
    gabai: {
      name: "ר' דוד כהן",
      email: "gabai7@example.com",
      password: "securePassword222",
      managementOf: "בית כנסת הגדול",
      phone: "03-1234567",
    },
    tfilot: [
      { tfila: "שחרית", time: "07:00" },
      { tfila: "מנחה", time: "13:30" },
      { tfila: "ערבית", time: "18:15" },
    ],
  },
];

export default initialData;
