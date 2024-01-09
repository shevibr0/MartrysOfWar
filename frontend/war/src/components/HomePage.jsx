import React, { useEffect } from "react";
import { getSoldiers } from "../utils/SoldierUtil";

const HomePage = () => {

    let a = [
        {
            "id": 1376,
            "first_name": "אוריה",
            "last_name": "באייר",
            "age": 20,
            "gender": "male",
            "city": "מעלות תרשיחא",
            "date_of_death": "2023-12-17",
            "hebrew_date": "ה׳ טבת, תשפ״ד",
            "time": "08:27:00",
            "place_of_death": "דרום רצועת עזה",
            "rank_name": "רס\"ל",
            "rank_organization": "צה\"ל",
            "role": "לוחם ביחידת מגלן",
            "short_description": "נפטר לאחר שנפצע במלחמה",
            "long_description": "נפטר מפצעיו לאחר שנפצע באורח קשה ב-14.12.2023 בקרב בדרום רצועת עזה.",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/3748094e-a387-41fa-96f4-5dbe75c10686.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "חטיבת הקומנדו",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1375,
            "first_name": "בוריס",
            "last_name": "דונבצקי",
            "age": 21,
            "gender": "male",
            "city": "קרית ביאליק",
            "date_of_death": "2023-12-17",
            "hebrew_date": "ה׳ טבת, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "צפון רצועת עזה",
            "rank_name": "סמ\"ר",
            "rank_organization": "צה\"ל",
            "role": "לוחם שיריון בגדוד 46",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/94f3d59b-6925-4efd-9970-9269357fa78e.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "עוצבת 'עקבות הברזל' (401)",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1374,
            "first_name": "יוסף אבנר",
            "last_name": "דורן",
            "age": 26,
            "gender": "male",
            "city": "ירושלים",
            "date_of_death": "2023-12-16",
            "hebrew_date": "ד׳ טבת, תשפ״ד",
            "time": "17:00:00",
            "place_of_death": "צפון רצועת עזה",
            "rank_name": "רס\"ר",
            "rank_organization": "צה\"ל",
            "role": "(במיל') לחם במסגרת יחידת הניוד המבצעי (הבלנ\"ם), שי",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/a9597945-d317-439e-ae72-61531d39b21b.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "בשייטת 13",
            "burial_place": "הר הרצל",
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1373,
            "first_name": "שלו",
            "last_name": "זלצמן",
            "age": 24,
            "gender": "male",
            "city": "רמת ישי",
            "date_of_death": "2023-12-16",
            "hebrew_date": "ד׳ טבת, תשפ״ד",
            "time": "17:00:00",
            "place_of_death": "דרום רצועת עזה",
            "rank_name": "רס\"ל",
            "rank_organization": "צה\"ל",
            "role": "(במיל') לוחם בגדוד 6623",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/62091d50-7bc6-4693-a73d-7fcc795cce57.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "עוצבת 'חוד החנית' (55)",
            "burial_place": "בית העלמין ברמת ישי",
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1372,
            "first_name": "יחזקאל",
            "last_name": "עזריה",
            "age": 53,
            "gender": "male",
            "city": "פתח תקווה",
            "date_of_death": "2023-12-16",
            "hebrew_date": "ד׳ טבת, תשפ״ד",
            "time": "16:00:00",
            "place_of_death": "מרחב מרגליות",
            "rank_name": "רס\"ב",
            "rank_organization": "צה\"ל",
            "role": "(במיל') לוחם בשריון בגדוד 129",
            "short_description": "נפל בפעילות מבצעית",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/d98d14b1-0e09-4b50-9448-37c179f8edd9.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "חטיבה 8",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1371,
            "first_name": "ענבר",
            "last_name": "היימן",
            "age": 27,
            "gender": "female",
            "city": "חיפה",
            "date_of_death": "2023-12-16",
            "hebrew_date": "ד׳ טבת, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": null,
            "role": null,
            "short_description": "הודעה על הירצחה בשבי נמסרה למשפחתה",
            "long_description": "ענבר היימן בת 27 מחיפה. בחורה מחוננת, מלאת אהבה והכלה עם נתינה אין סופית. בחורה יצירתית ומלאה בשמחת חיים. ענבר היא חובבת אומנות מושבעת. היא אומנית גרפיטי וגם למדה במגמת קולנוע בתיכון ואוהדת של מכבי חיפה. היא הכירה את בן זוגה נועם אלון בלימודי תקשורת חזותית במרכז האקדמי ויצו חיפה לפני כמעט שנתיים.  י\r\nהיא נחטפה לעזה בשבת ה-7.10 מהמסיבה ליד קיבוץ רעים פסטיבל הנובה בה עבדה כ\"הלפרית\" למשתתפי המסיבה.\r\n\r\nיהי זכרה ברוך.",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/293b46f5-8f9d-4c8b-a1ab-17c0b784ce8b.jpg",
            "url_to_article": "https://www.davar1.co.il/473853/",
            "classification": "citizen",
            "place_of_service": null,
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1370,
            "first_name": "סאמר פואד",
            "last_name": "אלטלקאת",
            "age": 22,
            "gender": "male",
            "city": "ח'ורה",
            "date_of_death": "2023-12-15",
            "hebrew_date": "ג׳ טבת, תשפ״ד",
            "time": "19:00:00",
            "place_of_death": "שאג'עייה",
            "role": null,
            "short_description": "נהרג מאש כוחותינו",
            "long_description": "סאמר נחטף מעבודתו בלולים בקיבוץ ניר עם בשבת ה-7.10.\r\nהוא נהרג מאש כוחותינו יחד עם יותם חיים ואלון שמריז מכפר עזה .\r\n\r\nיהי זכרו ברוך.",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/c59534f4-63d4-4126-bb1c-4175a67d5e27.jpg",
            "url_to_article": "https://www.davar1.co.il/473688/",
            "classification": "citizen",
            "place_of_service": null,
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1368,
            "first_name": "יותם",
            "last_name": "חיים",
            "age": 28,
            "gender": "male",
            "city": "כפר עזה",
            "date_of_death": "2023-12-15",
            "hebrew_date": "ג׳ טבת, תשפ״ד",
            "time": "19:00:00",
            "place_of_death": "שאג'עייה",
            "role": null,
            "short_description": "נהרג מאש כוחותינו",
            "long_description": "יותם נחטף מביתו בכפר עזה בשבת ה-7.10. \r\nהוא נהרג מאש כוחותינו בשאג'עייה יחד עם אלון שמריז וסאמר אלטלקאת.\r\n\r\nיהי זכרו ברוך",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/b996f29e-15d7-4bc0-892c-08a7986c8a7f.jpg",
            "url_to_article": null,
            "classification": "citizen",
            "place_of_service": null,
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1369,
            "first_name": "אלון לולו",
            "last_name": "שמריז",
            "age": 28,
            "gender": "male",
            "city": "כפר עזה",
            "date_of_death": "2023-12-15",
            "hebrew_date": "ג׳ טבת, תשפ״ד",
            "time": "19:00:00",
            "place_of_death": "שאג'עייה",
            "role": null,
            "short_description": "נהרג מאש כוחותינו",
            "long_description": "אלון נחטף מביתו בכפר עזה בשבת ה-7.10.\r\nהוא נהרג יחד עם יותם חיים וסאמר אלטלקאת מאש כוחותינו.\r\n\r\nיהי זכרו ברוך.",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/5d03f665-dc66-42b6-a938-af5f9347c82b.jpg",
            "url_to_article": "https://www.davar1.co.il/473688/",
            "classification": "citizen",
            "place_of_service": null,
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1360,
            "first_name": "אליה",
            "last_name": "טולדנו",
            "age": 28,
            "gender": "male",
            "city": "אלעד",
            "date_of_death": "2023-12-15",
            "hebrew_date": "ג׳ טבת, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": null,
            "role": null,
            "short_description": "הודעה על הירצחו נמסרה למשפחתו",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/809f26ea-4b66-4b36-ae7c-0e31765979da.jpg",
            "url_to_article": "https://www.davar1.co.il/473439/",
            "classification": "citizen",
            "place_of_service": null,
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1367,
            "first_name": "תומר שלמה",
            "last_name": "מיארה",
            "age": 28,
            "gender": "male",
            "city": "נתניה",
            "date_of_death": "2023-12-15",
            "hebrew_date": "ג׳ טבת, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "צפון רצועת עזה",
            "role": "(במיל') לוחם בגדוד ההנדסה 710",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/46fbe9ab-9c5b-4afa-b2ae-2b213b123e71.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "עוצבת 'ראם' (179)",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1363,
            "first_name": "שי אוריאל",
            "last_name": "פיזם",
            "age": 23,
            "gender": "male",
            "city": "עין הנצי\"ב",
            "date_of_death": "2023-12-15",
            "hebrew_date": "ג׳ טבת, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "דרום רצועת עזה",
            "rank_name": "רס\"ל",
            "rank_organization": "צה\"ל",
            "role": "מפקד טנק בגדוד 9",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/beee4cb1-9c65-43e6-94f2-164885a98538.webp",
            "url_to_article": "https://www.davar1.co.il/473444/",
            "classification": "serviceman",
            "place_of_service": "עוצבת 'עקבות הברזל' (401)",
            "burial_place": "בית העלמין קיבוץ עין הנצי\"ב",
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1361,
            "first_name": "עוז שמואל",
            "last_name": "ארדי",
            "age": 19,
            "gender": "male",
            "city": "קיבוץ חצור",
            "date_of_death": "2023-12-14",
            "hebrew_date": "ב׳ טבת, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "דרום רצועת עזה",
            "rank_name": "סמל",
            "rank_organization": "צה\"ל",
            "role": "לוחם בגדוד ההנדסה 603",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/17aba513-8d1f-4582-957a-33adbb7de8c2.webp",
            "url_to_article": "https://www.davar1.co.il/473444/",
            "classification": "serviceman",
            "place_of_service": "׳עוצבת סער מגולן׳ (7)",
            "burial_place": "בית העלמין בקיבוץ חצור",
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1366,
            "first_name": "ניק",
            "last_name": "בייזר",
            "age": 19,
            "gender": "male",
            "city": "באר שבע",
            "date_of_death": "2023-12-14",
            "hebrew_date": "ב׳ טבת, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": null,
            "rank_name": "רב\"ט",
            "rank_organization": "צה\"ל",
            "role": "נהג",
            "short_description": "הודעה על נפילתו נמסרה למשפחתו",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/defa17dd-ef33-4a55-82f1-847dac31e259.webp",
            "url_to_article": "https://www.davar1.co.il/473439/",
            "classification": "serviceman",
            "place_of_service": "במת\"ק ארז",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1365,
            "first_name": "רון",
            "last_name": "שרמן",
            "age": 19,
            "gender": "male",
            "city": "להבים",
            "date_of_death": "2023-12-14",
            "hebrew_date": "ב׳ טבת, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": null,
            "rank_name": "סמל",
            "rank_organization": "צה\"ל",
            "role": "מש\"ק תיאום וקישור",
            "short_description": "הודעה על נפילתו נמסרה למשפחתו",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/a710c4e5-6c2d-4fdb-b499-ceb8fbad53c0.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "במת\"ק ארז",
            "burial_place": "בית העלמין בלהבים",
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1358,
            "first_name": "טל",
            "last_name": "חיימי",
            "age": 41,
            "gender": "male",
            "city": "ניר יצחק",
            "date_of_death": "2023-12-13",
            "hebrew_date": "א׳ טבת, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": null,
            "role": null,
            "short_description": "הודעה על הירצחו נמסרה למשפחתו",
            "long_description": "טל (41) הוא דור שלישי למקימי קיבוץ ניר יצחק והיה מחובר בכל נימי נפשו לקיבוץ ואחד מעמודי התווך של הקהילה. \r\nמשפחתו וחבריו מספרים שתמיד היה הראשון לסייע, לתת יד, ולהשרות רוגע וביטחון לכל מי שסביבו.\r\nרק לפני כשלושה חודשים טל איבד את אימו, אסתי, לאחר מאבק במחלה קשה. \r\n\r\nטל הותיר אחריו את אשתו אלה, שלושה ילדים - תאומים בני 9 וילד בן 6, אביו זהר ואחותו אור. \r\n\r\nיהי זכרו ברוך",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/02cc840a-9b18-473f-9c4a-2851b2462573.jpg",
            "url_to_article": "https://www.davar1.co.il/473093/",
            "classification": "citizen",
            "place_of_service": null,
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1359,
            "first_name": "ג'ושוע",
            "last_name": "לואיטו מולל",
            "age": 21,
            "gender": "male",
            "city": "טנזניה",
            "date_of_death": "2023-12-13",
            "hebrew_date": "א׳ טבת, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": null,
            "role": null,
            "short_description": "הודעה על הירצחו נמסרה למשפחתו",
            "long_description": "ג'ושוע הגיע לישראל שבועיים בלבד לפני הירצחו, ועבד ברפת בנחל עוז כחלק מהשתלמות בחקלאות כסטודנט.\r\nהוא נרצח בשבת ה-7.10 וגופתו נחטפה לעזה בידי ארגוני הטרור.\r\n\r\nיהי זכרו ברוך.",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/8b139117-e064-4fca-9162-d512584f6d39.jpg",
            "url_to_article": "https://www.davar1.co.il/473093/",
            "classification": "citizen",
            "place_of_service": null,
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1357,
            "first_name": "אלישע",
            "last_name": "לוינשטרן",
            "age": 38,
            "gender": "male",
            "city": "חריש",
            "date_of_death": "2023-12-13",
            "hebrew_date": "א׳ טבת, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "דרום רצועת עזה",
            "rank_name": "רס\"ר",
            "rank_organization": "צה\"ל",
            "role": "(במיל') לוחם בגדוד שריון 8104",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/1e7b9135-b749-4fdb-bdd9-a7c112c3d37d.webp",
            "url_to_article": "https://www.davar1.co.il/473152/",
            "classification": "serviceman",
            "place_of_service": "עוצבת ראם (179)",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1356,
            "first_name": "ערן",
            "last_name": "אלוני",
            "age": 19,
            "gender": "male",
            "city": "אופקים",
            "date_of_death": "2023-12-12",
            "hebrew_date": "כ״ט כסלו, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "צפון רצועת עזה",
            "rank_name": "סמל",
            "rank_organization": "צה\"ל",
            "role": "לוחם בגדוד 51",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/69d56df3-fe20-409b-a937-dd3add1c66da.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "חטיבת גולני",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1355,
            "first_name": "יצחק",
            "last_name": "בן בשט",
            "age": 44,
            "gender": "male",
            "city": "שדה יעקב",
            "date_of_death": "2023-12-12",
            "hebrew_date": "כ״ט כסלו, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "צפון רצועת עזה",
            "rank_name": "אל\"ם",
            "rank_organization": "צה\"ל",
            "role": "מפקד חפ\"ק מח\"ט גולני",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/1672784d-f499-4832-aff2-91ee05844b2a.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "חטיבת גולני",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1349,
            "first_name": "משה אברהם",
            "last_name": "בר און",
            "age": 23,
            "gender": "male",
            "city": "רעננה",
            "date_of_death": "2023-12-12",
            "hebrew_date": "כ״ט כסלו, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "צפון רצועת עזה",
            "rank_name": "רס\"ן",
            "rank_organization": "צה\"ל",
            "role": "מפקד פלוגה בגדוד 51",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/b21ec59e-030b-4724-8d04-5654c5ab5464.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "חטיבת גולני",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1347,
            "first_name": "תומר",
            "last_name": "גרינברג",
            "age": 35,
            "gender": "male",
            "city": "אלמוג",
            "date_of_death": "2023-12-12",
            "hebrew_date": "כ״ט כסלו, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "צפון רצועת עזה",
            "rank_name": "סא\"ל",
            "rank_organization": "צה\"ל",
            "role": "מפקד גדוד 13",
            "short_description": "נפל במלחמה",
            "long_description": "תומר גרינברג נכנס לתפקיד מפקד הגדוד רק לפני כחצי שנה, והגדוד שעליו פיקד איבד 41 לוחמים בשבת השחורה ב-7 באוקטובר. ארבעה ימים אחרי מתקפת חמאס, פנה סא\"ל גרינברג ללוחמיו בגולני ואמר להם: \"חבר'ה, גדוד 13 גיבורים. דור יום הכיפורים, אחד לאחד. עוד 10 שנים יהיה מג\"ד גיבור לגדוד 13, עם לוחמים גיבורים, חלקכם כבר תהיו הורים. הוא יקפיץ את הגדוד ביום כיפור ויספר עליכם, ויראה תמונות של ההרוגים שלנו. אז כנראה שאתם לא כאלה מפונקים, ולא פחות גיבורים, וכנראה שאתם לא דור האייפון. אז כל הכבוד לכולם, אני גאה אחד אחד במי שעומד פה, אבל זו רק ההתחלה\".\r\n\r\nיהי זכרו ברוך",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/53c61cfe-e4a2-4717-90a9-b141de698b48.webp",
            "url_to_article": "https://www.davar1.co.il/472835/",
            "classification": "serviceman",
            "place_of_service": "חטיבת גולני",
            "burial_place": "הר הרצל",
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1350,
            "first_name": "אחיה",
            "last_name": "דסקל",
            "age": 19,
            "gender": "male",
            "city": "חיפה",
            "date_of_death": "2023-12-12",
            "hebrew_date": "כ״ט כסלו, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "צפון רצועת עזה",
            "rank_name": "סמל",
            "rank_organization": "צה\"ל",
            "role": "לוחם בגדוד 51",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/3d76d26f-d5e3-4a2c-b9b2-91c26520ca3e.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "חטיבת גולני",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1353,
            "first_name": "רום",
            "last_name": "הכט",
            "age": 20,
            "gender": "male",
            "city": "גבעתיים",
            "date_of_death": "2023-12-12",
            "hebrew_date": "כ״ט כסלו, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "צפון רצועת עזה",
            "rank_name": "רס\"ל",
            "rank_organization": "צה\"ל",
            "role": "לוחם",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/6fd01565-037a-413f-80c8-b277361396f9.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "היחידה הטקטית לחילוץ מיוחד (669)",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1351,
            "first_name": "ליאל",
            "last_name": "חיו",
            "age": 22,
            "gender": "male",
            "city": "שוהם",
            "date_of_death": "2023-12-12",
            "hebrew_date": "כ״ט כסלו, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "צפון רצועת עזה",
            "rank_name": "סרן",
            "rank_organization": "צה\"ל",
            "role": "מפקד מחלקה בגדוד 51",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/ff4139d8-03f9-45b8-b373-99a768231a13.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "חטיבת גולני",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1354,
            "first_name": "אוריה",
            "last_name": "יעקב",
            "age": 19,
            "gender": "male",
            "city": "אשקלון",
            "date_of_death": "2023-12-12",
            "hebrew_date": "כ״ט כסלו, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "צפון רצועת עזה",
            "rank_name": "סמ\"ר",
            "rank_organization": "צה\"ל",
            "role": "לוחם בגדוד 614",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/09491be9-cfc5-4be5-a3d5-f446a21cb1b2.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "בית הספר להנדסה קרבית",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1348,
            "first_name": "רועי",
            "last_name": "מלדסי",
            "age": 23,
            "gender": "male",
            "city": "עפולה",
            "date_of_death": "2023-12-12",
            "hebrew_date": "כ״ט כסלו, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "צפון רצועת עזה",
            "rank_name": "רס\"ן",
            "rank_organization": "צה\"ל",
            "role": "מפקד פלוגה בגדוד 13",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/243d002c-99d6-4735-945e-2fd3353b02d0.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "חטיבת גולני",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1352,
            "first_name": "בן",
            "last_name": "שלי",
            "age": 26,
            "gender": "male",
            "city": "קדרון",
            "date_of_death": "2023-12-12",
            "hebrew_date": "כ״ט כסלו, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": "צפון רצועת עזה",
            "rank_name": "רס\"ן",
            "rank_organization": "צה\"ל",
            "role": "מפקד פלגת לוחמים",
            "short_description": "נפל במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/222fab0a-b6f4-4b6f-ac0e-16115a10cab9.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "היחידה הטקטית לחילוץ מיוחד (669)",
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1346,
            "first_name": "עדן",
            "last_name": "זכריה",
            "age": 26,
            "gender": "female",
            "city": "ראשון לציון",
            "date_of_death": "2023-12-11",
            "hebrew_date": "כ״ח כסלו, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": null,
            "role": null,
            "short_description": "הודעה על הירצחה בשבי נמסרה למשפחתה",
            "long_description": "עדן בילתה עם בן זוגה אופק קמחי במסיבה ליד קיבוץ רעים משם נחטפה. בן זוגה נרצח. \r\n\r\nיהי זכרם ברוך.",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/9f1176f4-106d-45c9-a710-7b6a6b7edd68.jpg",
            "url_to_article": "https://www.davar1.co.il/473503/",
            "classification": "citizen",
            "place_of_service": null,
            "burial_place": null,
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        },
        {
            "id": 1345,
            "first_name": "צביקה",
            "last_name": "לביא",
            "age": 30,
            "gender": "male",
            "city": "עלי",
            "date_of_death": "2023-12-11",
            "hebrew_date": "כ״ח כסלו, תשפ״ד",
            "time": "07:00:00",
            "place_of_death": null,
            "rank_name": "רס\"ר",
            "rank_organization": "צה\"ל",
            "role": "(במיל') לוחם בגדוד 699",
            "short_description": "נפטר לאחר שנפצע במלחמה",
            "long_description": "",
            "image": "https://d1evb41nwskyyu.cloudfront.net/persons_images/48573455-13d2-4a52-b224-e871030242ab.webp",
            "url_to_article": null,
            "classification": "serviceman",
            "place_of_service": "עוצבת 'חצי האש' (551)",
            "burial_place": "הר הרצל",
            "is_approved": true,
            "is_child": false,
            "is_emergency_squad": false,
            "at_nova": false
        }
    ];
    useEffect(() => {
        console.log(a.length);
        getSoldiers().then(res => { console.log(res) })
    }, [])
    return (<>bbbbbbbbbbbb</>)
}
export default HomePage;