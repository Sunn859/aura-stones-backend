import { prisma } from "./src/lib/prisma.js";

const categoryData = [
  {
    name: "ความรัก",
    description: "หินที่ตามความเชื่อช่วยส่งเสริมความรักและความสัมพันธ์",
  },
  {
    name: "การงาน",
    description: "หินที่ตามความเชื่อช่วยส่งเสริมการทำงานและความก้าวหน้า",
  },
  {
    name: "การเงิน",
    description: "หินที่ตามความเชื่อช่วยส่งเสริมโอกาสและความมั่งคั่ง",
  },
  {
    name: "จิตใจ",
    description:
      "หินที่ตามความเชื่อช่วยส่งเสริมกำลังใจและความสมดุล ไม่ใช้แทนการรักษาทางการแพทย์",
  },
];

const stoneData = [
  // ================= ความรัก =================
  {
    category: "ความรัก",
    dayOfWeek: "SUNDAY",
    nameTH: "ทับทิม",
    nameEN: "Ruby",
    description:
      "อัญมณีในตระกูลคอรันดัม มีสีแดงตั้งแต่แดงอมชมพูไปจนถึงแดงเข้ม",
    color: "แดง",
    benefit:
      "ตามความเชื่อช่วยเสริมความมั่นใจ พลังแห่งความรัก และความกล้าแสดงความรู้สึก",
    
  },
  {
    category: "ความรัก",
    dayOfWeek: "MONDAY",
    nameTH: "มูนสโตน",
    nameEN: "Moonstone",
    description:
      "อัญมณีในกลุ่มเฟลด์สปาร์ มีสีขาวนวลและมีประกายเหลือบเมื่อกระทบแสง",
    color: "ขาวนวล",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมความอ่อนโยน ความเข้าใจ และความสมดุลทางอารมณ์",
  },
  {
    category: "ความรัก",
    dayOfWeek: "TUESDAY",
    nameTH: "โรสควอตซ์",
    nameEN: "Rose Quartz",
    description:
      "หินในตระกูลควอตซ์ มีสีตั้งแต่ชมพูอ่อนเกือบขาวไปจนถึงชมพูเข้ม",
    color: "ชมพู",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมความรัก ความเมตตา การเปิดใจ และความสัมพันธ์ที่ดี",
  },
  {
    category: "ความรัก",
    dayOfWeek: "WEDNESDAY",
    nameTH: "มรกต",
    nameEN: "Emerald",
    description:
      "อัญมณีในตระกูลเบริล มีสีเขียวตั้งแต่เขียวอ่อนไปจนถึงเขียวเข้ม",
    color: "เขียว",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมความซื่อสัตย์ ความมั่นคง และการเติบโตของความสัมพันธ์",
  },
  {
    category: "ความรัก",
    dayOfWeek: "THURSDAY",
    nameTH: "คาร์เนเลียน",
    nameEN: "Carnelian",
    description:
      "หินในตระกูลคาลซิโดนี มีสีตั้งแต่ส้มอ่อนไปจนถึงส้มแดง",
    color: "ส้ม",
    benefit:
      "ตามความเชื่อช่วยเพิ่มความมั่นใจและความกล้าแสดงความรู้สึกในความรัก",
  },
  {
    category: "ความรัก",
    dayOfWeek: "FRIDAY",
    nameTH: "บลูแซฟไฟร์",
    nameEN: "Blue Sapphire",
    description:
      "อัญมณีในตระกูลคอรันดัม มีสีน้ำเงินตั้งแต่อ่อนไปจนถึงเข้ม",
    color: "น้ำเงิน",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมความจริงใจ ความซื่อสัตย์ และความไว้วางใจ",
  },
  {
    category: "ความรัก",
    dayOfWeek: "SATURDAY",
    nameTH: "อเมทิสต์",
    nameEN: "Amethyst",
    description:
      "หินในตระกูลควอตซ์ มีสีตั้งแต่ม่วงอ่อนไปจนถึงม่วงเข้ม",
    color: "ม่วง",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมความสงบ ความเข้าใจ และลดความขัดแย้งในความสัมพันธ์",
  },

  // ================= การงาน =================
  {
    category: "การงาน",
    dayOfWeek: "SUNDAY",
    nameTH: "เรดแจสเปอร์",
    nameEN: "Red Jasper",
    description:
      "หินแจสเปอร์เนื้อละเอียด มีสีแดงอิฐไปจนถึงแดงน้ำตาล",
    color: "แดง",
    benefit:
      "ตามความเชื่อช่วยเสริมความมุ่งมั่น ความอดทน และพลังในการทำงาน",
  },
  {
    category: "การงาน",
    dayOfWeek: "MONDAY",
    nameTH: "ไทเกอร์อายสีทอง",
    nameEN: "Golden Tiger's Eye",
    description:
      "หินควอตซ์ที่มีลวดลายและประกายเหลือบคล้ายดวงตาของเสือ",
    color: "เหลืองทอง",
    benefit:
      "ตามความเชื่อช่วยเสริมความมั่นใจ สมาธิ การวางแผน และการตัดสินใจ",
  },
  {
    category: "การงาน",
    dayOfWeek: "TUESDAY",
    nameTH: "โรโดไนต์",
    nameEN: "Rhodonite",
    description:
      "แร่สีชมพูถึงชมพูแดง มักมีลวดลายหรือส่วนประกอบสีดำแทรกอยู่",
    color: "ชมพู",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมการทำงานร่วมกับผู้อื่นและการจัดการความขัดแย้ง",
  },
  {
    category: "การงาน",
    dayOfWeek: "WEDNESDAY",
    nameTH: "กรีนอเวนเจอรีน",
    nameEN: "Green Aventurine",
    description:
      "หินควอตซ์สีเขียวที่อาจมีประกายระยิบระยับอยู่ภายในเนื้อหิน",
    color: "เขียว",
    benefit:
      "ตามความเชื่อช่วยเสริมโอกาส ความคิดสร้างสรรค์ และความก้าวหน้าในการทำงาน",
  },
  {
    category: "การงาน",
    dayOfWeek: "THURSDAY",
    nameTH: "ซันสโตน",
    nameEN: "Sunstone",
    description:
      "อัญมณีในกลุ่มเฟลด์สปาร์ มีสีส้มถึงส้มแดงและอาจมีประกายภายใน",
    color: "ส้ม",
    benefit:
      "ตามความเชื่อช่วยเสริมความเป็นผู้นำ ความกระตือรือร้น และแรงบันดาลใจ",
  },
  {
    category: "การงาน",
    dayOfWeek: "FRIDAY",
    nameTH: "ลาพิสลาซูลี",
    nameEN: "Lapis Lazuli",
    description:
      "หินสีน้ำเงินเข้มที่มักมีจุดสีทองของแร่ไพไรต์กระจายอยู่ภายใน",
    color: "น้ำเงิน",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมการสื่อสาร การนำเสนอ และความน่าเชื่อถือ",
  },
  {
    category: "การงาน",
    dayOfWeek: "SATURDAY",
    nameTH: "เพอร์เพิลฟลูออไรต์",
    nameEN: "Purple Fluorite",
    description:
      "แร่ฟลูออไรต์สีม่วง มีตั้งแต่ม่วงอ่อนไปจนถึงม่วงเข้ม",
    color: "ม่วง",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมสมาธิ การจัดระเบียบความคิด และการแก้ปัญหา",
  },

  // ================= การเงิน =================
  {
    category: "การเงิน",
    dayOfWeek: "SUNDAY",
    nameTH: "โกเมน",
    nameEN: "Garnet",
    description:
      "กลุ่มแร่ที่พบได้หลายสี โดยชนิดที่พบทั่วไปมักมีสีแดงเข้ม",
    color: "แดงเข้ม",
    benefit:
      "ตามความเชื่อช่วยเสริมแรงผลักดัน ความมั่นคง และโอกาสในการสร้างรายได้",
  },
  {
    category: "การเงิน",
    dayOfWeek: "MONDAY",
    nameTH: "ไพไรต์",
    nameEN: "Pyrite",
    description:
      "แร่สีทองเหลืองที่มีประกายโลหะและมีรูปลักษณ์คล้ายทองคำ",
    color: "ทอง",
    benefit:
      "ตามความเชื่อเป็นสัญลักษณ์ของความมั่งคั่งและโอกาสทางการเงิน",
  },
  {
    category: "การเงิน",
    dayOfWeek: "TUESDAY",
    nameTH: "พิงก์ทัวร์มาลีน",
    nameEN: "Pink Tourmaline",
    description:
      "อัญมณีในกลุ่มทัวร์มาลีน มีสีตั้งแต่ชมพูอ่อนไปจนถึงชมพูแดง",
    color: "ชมพู",
    benefit:
      "ตามความเชื่อช่วยเสริมการเจรจา ความสัมพันธ์ และโอกาสจากผู้คนรอบตัว",
      
  },
  {
    category: "การเงิน",
    dayOfWeek: "WEDNESDAY",
    nameTH: "หยกเขียว",
    nameEN: "Green Jade",
    description:
      "อัญมณีสีเขียวที่มีเนื้อแน่นและเหนียว พบได้ทั้งชนิดเจไดต์และเนไฟรต์",
    color: "เขียว",
    benefit:
      "ตามความเชื่อเป็นสัญลักษณ์ของความมั่งคั่ง ความมั่นคง และโชคลาภ",
  },
  {
    category: "การเงิน",
    dayOfWeek: "THURSDAY",
    nameTH: "ซิทริน",
    nameEN: "Citrine",
    description:
      "หินควอตซ์สีเหลืองอ่อนไปจนถึงเหลืองส้ม",
    color: "เหลืองส้ม",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมความสำเร็จ ความมั่งคั่ง และโอกาสทางธุรกิจ",
  },
  {
    category: "การเงิน",
    dayOfWeek: "FRIDAY",
    nameTH: "บลูไทเกอร์อาย",
    nameEN: "Blue Tiger's Eye",
    description:
      "หินที่มีลวดลายเหลือบคล้ายดวงตาของเสือ มีสีน้ำเงินเข้มถึงน้ำเงินเทา",
    color: "น้ำเงิน",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมสติ การวางแผน และการตัดสินใจทางการเงิน",
  },
  {
    category: "การเงิน",
    dayOfWeek: "SATURDAY",
    nameTH: "ชารอยต์",
    nameEN: "Charoite",
    description:
      "แร่สีม่วงที่มีลวดลายเป็นเส้นหรือเกลียวตั้งแต่ม่วงอ่อนไปจนถึงม่วงเข้ม",
    color: "ม่วง",
    benefit:
      "ตามความเชื่อช่วยให้ตัดสินใจเรื่องการเงินอย่างมีสติและรอบคอบ",
  },

  // ================= สุขภาพ =================
  {
    category: "จิตใจ",
    dayOfWeek: "SUNDAY",
    nameTH: "เรดอาเกต",
    nameEN: "Red Agate",
    description:
      "หินในกลุ่มคาลซิโดนี มีสีแดงถึงแดงน้ำตาลและอาจมีลวดลายเป็นชั้น",
    color: "แดง",
    benefit:
      "ตามความเชื่อช่วยเสริมกำลังใจ ความกระตือรือร้น และแรงจูงใจในการดูแลตนเอง",
  },
  {
    category: "จิตใจ",
    dayOfWeek: "MONDAY",
    nameTH: "อำพัน",
    nameEN: "Amber",
    description:
      "วัสดุอินทรีย์ที่เกิดจากยางไม้โบราณแข็งตัว มีสีเหลืองถึงน้ำตาลทอง",
    color: "เหลือง",
    benefit:
      "ตามความเชื่อช่วยสร้างความรู้สึกอบอุ่น ผ่อนคลาย และส่งเสริมกำลังใจ",
  },
  {
    category: "จิตใจ",
    dayOfWeek: "TUESDAY",
    nameTH: "พิงก์โอปอล",
    nameEN: "Pink Opal",
    description:
      "โอปอลสีชมพูที่มีลักษณะทึบแสงถึงโปร่งแสงและมีเนื้อเรียบ",
    color: "ชมพู",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมความสงบ ความอ่อนโยน และการพักผ่อน",
  },
  {
    category: "จิตใจ",
    dayOfWeek: "WEDNESDAY",
    nameTH: "มาลาไคต์",
    nameEN: "Malachite",
    description:
      "แร่ทองแดงสีเขียวที่มีลวดลายเป็นชั้น วง หรือแถบสีเขียวหลายระดับ",
    color: "เขียว",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมการดูแลตนเองและความสมดุลทางอารมณ์",
  },
  {
    category: "จิตใจ",
    dayOfWeek: "THURSDAY",
    nameTH: "ออเรนจ์แคลไซต์",
    nameEN: "Orange Calcite",
    description:
      "แร่แคลไซต์สีส้มอ่อนถึงส้มเข้ม มีลักษณะโปร่งแสงหรือทึบแสง",
    color: "ส้ม",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมความสดใส ความคิดเชิงบวก และกำลังใจ",
  },
  {
    category: "จิตใจ",
    dayOfWeek: "FRIDAY",
    nameTH: "อความารีน",
    nameEN: "Aquamarine",
    description:
      "อัญมณีในตระกูลเบริล มีสีฟ้าอ่อนไปจนถึงฟ้าอมเขียว",
    color: "ฟ้า",
    benefit:
      "ตามความเชื่อช่วยส่งเสริมความสงบ การผ่อนคลาย และความสมดุลทางอารมณ์",
  },
  {
    category: "จิตใจ",
    dayOfWeek: "SATURDAY",
    nameTH: "เลพิโดไลต์",
    nameEN: "Lepidolite",
    description:
      "แร่ในกลุ่มไมกาที่มักมีสีม่วงอ่อน ชมพูอมม่วง หรือม่วงเทา",
    color: "ม่วง",
    benefit:
      "ตามความเชื่อช่วยสร้างความสงบ ส่งเสริมการพักผ่อน และความสมดุลทางอารมณ์",
  },
];

async function main() {
  console.log("กำลังล้างข้อมูลหินเดิม...");

  // ลบตารางเชื่อมก่อน เพราะมี Foreign Key
  await prisma.favorite.deleteMany();
  await prisma.stoneCategory.deleteMany();
  await prisma.stoneBirthDay.deleteMany();
  await prisma.stone.deleteMany();
  await prisma.category.deleteMany();

  console.log("กำลังสร้างหมวดหมู่...");

  const categoryIdByName = {};

  for (const category of categoryData) {
    const newCategory = await prisma.category.create({
      data: category,
    });

    categoryIdByName[newCategory.name] = newCategory.id;
  }

  console.log("กำลังสร้างข้อมูลหิน...");

  for (const stone of stoneData) {
    const {
      category,
      dayOfWeek,
      ...data
    } = stone;

    await prisma.stone.create({
      data: {
        ...data,
        imageUrl: null,
        isActive: true,

        stoneCategories: {
          create: {
            categoryId: categoryIdByName[category],
          },
        },

        stoneBirthDays: {
          create: {
            dayOfWeek: dayOfWeek,
          },
        },
      },
    });
  }

  console.log("Seed สำเร็จ");
  console.log(`หมวดหมู่ทั้งหมด: ${categoryData.length}`);
  console.log(`หินทั้งหมด: ${stoneData.length}`);
}

main()
  .catch((error) => {
    console.error("Seed ไม่สำเร็จ");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });