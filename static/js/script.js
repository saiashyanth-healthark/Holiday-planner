// --- HOLIDAY DATABASE FOR 2025 & 2026 ---
const holidayData = {
    "2025": {
        nationalHolidays: [
            { name: "Republic Day", date: "2025-01-26" }, { name: "Idul Fitr", date: "2025-03-30" },
            { name: "Independence Day", date: "2025-08-15" }, { name: "Gandhi Jayanti", date: "2025-10-02" },
            { name: "Christmas Day", date: "2025-12-25" }
        ],
        holidayDatabase: {
            "AN": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Buddha Purnima", date: "2025-05-12" }],
            "AP": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Pongal", date: "2025-01-14" }, { name: "Kanuma Panduga", date: "2025-01-16" }, { name: "Ugadi", date: "2025-03-30" }, { name: "Babu Jagjivan Ram Jayanti", date: "2025-04-05" }, { name: "Maha Ashtami", date: "2025-09-30" }, { name: "Deepavali", date: "2025-10-20" }],
            "AR": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Pongal", date: "2025-01-14" }, { name: "State Day", date: "2025-02-20" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "Maha Ashtami", date: "2025-09-30" }, { name: "Indigenous Faith Day", date: "2025-12-01" }],
            "AS": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Magh Bihu", date: "2025-01-15" }, { name: "Netaji Subhas Chandra Bose Jayanti", date: "2025-01-23" }, { name: "Bohag Bihu Holiday", date: "2025-04-14" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "Tithi of Srimanta Shankardev", date: "2025-08-25" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Janmostav of Srimanta Shankardev", date: "2025-10-05" }, { name: "Kati Bihu", date: "2025-10-18" }, { name: "Chhath Puja", date: "2025-10-28" }],
            "BR": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Bihar Day", date: "2025-03-22" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Chhath Puja", date: "2025-10-28" }, { name: "Eid e Milad", date: "2025-09-04" }],
            "CH": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Guru Gobind Singh Jayanti", date: "2025-01-05" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "Bakrid / Eid al Adha", date: "2025-06-06" }, { name: "Vijaya Dashami", date: "2025-10-02" }],
            "CT": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "Sant Guru Kabir Jayanti", date: "2025-06-11" }, { name: "Haryali Teej", date: "2025-07-27" }, { name: "Raksha Bandhan", date: "2025-08-09" }, { name: "Hartalika Teej", date: "2025-08-26" }, { name: "Chhath Puja", date: "2025-10-28" }, { name: "Guru Ghasidas Jayanti", date: "2025-12-18" }],
            "DN": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Ugadi", date: "2025-03-30" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Parsi New Year", date: "2025-08-15" }, { name: "Ganesh Chaturthi", date: "2025-08-26" }],
            "DD": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Ugadi", date: "2025-03-30" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Raksha Bandhan", date: "2025-08-09" }, { name: "Parsi New Year", date: "2025-08-15" }, { name: "Ganesh Chaturthi", date: "2025-08-26" }, { name: "Liberation Day", date: "2025-12-19" }],
            "DL": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Buddha Purnima", date: "2025-05-12" }],
            "GA": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Ugadi", date: "2025-03-30" }, { name: "Ganesh Chaturthi", date: "2025-08-26" }, { name: "Ganesh Chaturthi Holiday", date: "2025-08-27" }, { name: "Feast of St Francis Xavier", date: "2025-12-03" }, { name: "Liberation Day", date: "2025-12-19" }],
            "GJ": [{ name: "New Year", date: "2025-01-01" },{ name: "Uttarayan", date: "2025-01-14" },{ name: "Uttarayan", date: "2025-01-15" },{ name: "Dhuleti", date: "2025-03-14" },{ name: "Ramzan Eid", date: "2025-03-30" },{ name: "Bakri Eid", date: "2025-06-06" },{ name: "Rakshabandhan", date: "2025-08-09" },{ name: "Janmashtami", date: "2025-08-16" },{ name: "Ganesh Chaturthi", date: "2025-08-27" },{ name: "Dussehra", date: "2025-10-02" },{ name: "Diwali", date: "2025-10-20" },{ name: "Diwali", date: "2025-10-21" },{ name: "Christmas", date: "2025-12-26" }],
            "HR": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Guru Gobind Singh Jayanti", date: "2025-01-05" }, { name: "Vasant Panchami", date: "2025-02-02" }, { name: "Guru Ravidas Jayanti", date: "2025-02-12" }, { name: "S. Bhagat Singh's Martyrdom Day", date: "2025-03-23" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Maharshi Parasuram Jayanti", date: "2025-04-29" }, { name: "Maharana Pratap Jayanti", date: "2025-05-09" }, { name: "Sant Guru Kabir Jayanti", date: "2025-06-11" }, { name: "Haryali Teej", date: "2025-07-27" }, { name: "Shaheed Udham Singh's Martyrdom Day", date: "2025-07-31" }, { name: "Raksha Bandhan", date: "2025-08-09" }, { name: "Maharaja Agrasen Jayanti", date: "2025-09-22" }, { name: "Heroes Martyrdom Day", date: "2025-09-23" }, { name: "Maharishi Valmiki Jayanti", date: "2025-10-07" }, { name: "Haryana Day", date: "2025-11-01" }, { name: "Shaheed Udham Singh Jayanti", date: "2025-12-26" }],
            "HP": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Guru Ravidas Jayanti", date: "2025-02-12" }, { name: "State Day", date: "2025-01-25" }, { name: "Himachal Day", date: "2025-04-15" }, { name: "Maharshi Parasuram Jayanti", date: "2025-04-29" }, { name: "Maharana Pratap Jayanti", date: "2025-05-09" }, { name: "Sant Guru Kabir Jayanti", date: "2025-06-11" }, { name: "Maharishi Valmiki Jayanti", date: "2025-10-07" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "Eid e Milad", date: "2025-09-04" }],
            "JH": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Netaji Subhas Chandra Bose Jayanti", date: "2025-01-23" }, { name: "Sarhul", date: "2025-04-01" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Maha Ashtami", date: "2025-09-30" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Chhath Puja", date: "2025-10-28" }, { name: "Buddha Purnima", date: "2025-05-12" }],
            "JK": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Guru Gobind Singh Jayanti", date: "2025-01-05" }, { name: "Jumat-ul-Wida", date: "2025-03-28" }, { name: "Shab-i-Qadr", date: "2025-03-27" }, { name: "Ugadi", date: "2025-03-30" }, { name: "Vaisakh", date: "2025-04-21" }, { name: "Bakrid / Eid al Adha Holiday", date: "2025-06-07" }, { name: "Guru Hargobind Ji's Birthday", date: "2025-06-12" }, { name: "Martyrs' Day", date: "2025-07-13" }, { name: "Friday Following Eid e Milad", date: "2025-09-12" }, { name: "Sheikh Muhammad Abdullah Jayanti", date: "2025-12-05" }, { name: "Good Friday", date: "2025-04-18" }, { name: "Buddha Purnima", date: "2025-05-12" }],
            "KA": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Makara Sankranti", date: "2025-01-14" }, { name: "Ugadi", date: "2025-03-30" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Basava Jayanti", date: "2025-04-30" }, { name: "Ganesh Chaturthi", date: "2025-08-26" }, { name: "Mahalaya Amavasye", date: "2025-09-21" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Maharishi Valmiki Jayanti", date: "2025-10-07" }, { name: "Deepavali", date: "2025-10-20" }, { name: "Kannada Rajyothsava", date: "2025-11-01" }, { name: "Kanakadasa Jayanti", date: "2025-11-08" }],
            "KL": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Mannam Jayanti", date: "2025-01-02" }, { name: "Vishu", date: "2025-04-14" }, { name: "Easter Sunday", date: "2025-04-20" }, { name: "Karkidaka Vavu Bali", date: "2025-07-24" }, { name: "First Onam", date: "2025-09-04" }, { name: "Sree Narayana Guru Jayanti", date: "2025-09-07" }, { name: "Sree Narayana Guru Samadhi", date: "2025-09-21" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Deepavali", date: "2025-10-20" }],
            "LA": [{ name: "New Year's Day", date: "2025-01-01" }],
            "LD": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Mahavir Jayanti", date: "2025-04-10" }],
            "MP": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Guru Ravidas Jayanti", date: "2025-02-12" }, { name: "Gudi Padwa", date: "2025-03-30" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Maharshi Parasuram Jayanti", date: "2025-04-29" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "Raksha Bandhan", date: "2025-08-09" }, { name: "Maharishi Valmiki Jayanti", date: "2025-10-07" }],
            "MH": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Chhatrapati Shivaji Maharaj Jayanti", date: "2025-02-19" }, { name: "Gudi Padwa", date: "2025-03-30" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Maharashtra Day", date: "2025-05-01" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "Parsi New Year", date: "2025-08-15" }, { name: "Ganesh Chaturthi", date: "2025-08-26" }],
            "MN": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Gaan-Ngai", date: "2025-01-12" }, { name: "Lui-Ngai-Ni", date: "2025-02-15" }, { name: "Yaosang", date: "2025-03-14" }, { name: "Yaosang 2nd Day", date: "2025-03-15" }, { name: "Cheiraoba", date: "2025-03-30" }, { name: "Patriots Day", date: "2025-08-13" }, { name: "Maha Ashtami", date: "2025-09-30" }, { name: "Kut", date: "2025-11-01" }, { name: "New Year's Eve", date: "2025-12-31" }],
            "ML": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Behdeinkhlam Festival", date: "2025-07-11" }, { name: "U Tirot Sing Day", date: "2025-07-17" }, { name: "Maha Saptami", date: "2025-09-29" }, { name: "Maha Ashtami", date: "2025-09-30" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Seng Kut Snem", date: "2025-11-23" }, { name: "Pa Togan Nengminza Sangma", date: "2025-12-12" }, { name: "Death Anniversary of U SoSo Tham", date: "2025-12-18" }, { name: "Christmas Holiday", date: "2025-12-24" }, { name: "Christmas Holiday", date: "2025-12-26" }, { name: "U Kiang Nangbah", date: "2025-12-30" }],
            "MZ": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "New Year Holiday", date: "2025-01-02" }, { name: "Missionary Day", date: "2025-01-11" }, { name: "State Day", date: "2025-02-20" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "YMA Day", date: "2025-06-15" }, { name: "Remna Ni", date: "2025-06-30" }, { name: "MHIP Day", date: "2025-07-06" }, { name: "Christmas Holiday", date: "2025-12-24" }, { name: "New Year's Eve", date: "2025-12-31" }],
            "NL": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Good Friday", date: "2025-04-18" }, { name: "Easter Saturday", date: "2025-04-19" }, { name: "Easter Sunday", date: "2025-04-20" }, { name: "Maha Navami", date: "2025-10-01" }],
            "OR": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Guru Gobind Singh Jayanti", date: "2025-01-05" }, { name: "Vasant Panchami", date: "2025-02-02" }, { name: "Panchayatiraj Divas", date: "2025-03-05" }, { name: "Odisha Day", date: "2025-04-01" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Maha Vishuba Sankranti", date: "2025-04-14" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "Pahili Raja", date: "2025-06-14" }, { name: "Raja Sankranti", date: "2025-06-14" }, { name: "Ratha Yathra", date: "2025-06-27" }, { name: "Jhulan Purnima", date: "2025-08-08" }, { name: "Nuakhai", date: "2025-08-28" }, { name: "Mahalaya Amavasye", date: "2025-09-21" }, { name: "Maha Saptami", date: "2025-09-29" }, { name: "Maha Ashtami", date: "2025-09-30" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Lakshmi Puja", date: "2025-10-20" }, { name: "Karthika Purnima", date: "2025-11-05" }],
            "PY": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Pongal", date: "2025-01-14" }, { name: "Uzhavar Thirunal", date: "2025-01-16" }, { name: "De Jure Transfer Day", date: "2025-08-16" }, { name: "Ganesh Chaturthi", date: "2025-08-26" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Deepavali", date: "2025-10-20" }, { name: "Puducherry Liberation Day", date: "2025-11-01" }],
            "PB": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Guru Gobind Singh Jayanti", date: "2025-01-05" }, { name: "Guru Ravidas Jayanti", date: "2025-02-12" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Vaisakh", date: "2025-04-21" }, { name: "Maharshi Parasuram Jayanti", date: "2025-04-29" }, { name: "Sri Guru Arjun Dev Ji's Martyrdom Day", date: "2025-05-30" }, { name: "Sant Guru Kabir Jayanti", date: "2025-06-11" }, { name: "Eid e Milad", date: "2025-09-04" }, { name: "Maharishi Valmiki Jayanti", date: "2025-10-07" }, { name: "Sri Guru Teg Bahadur Ji's Martyrdom Day", date: "2025-11-24" }],
            "RJ": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Guru Gobind Singh Jayanti", date: "2025-01-05" }, { name: "Ugadi", date: "2025-03-30" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Maharshi Parasuram Jayanti", date: "2025-04-29" }, { name: "Maharana Pratap Jayanti", date: "2025-05-09" }, { name: "Raksha Bandhan", date: "2025-08-09" }, { name: "Ramdev Jayanti", date: "2025-09-02" }, { name: "Teja Dashmi", date: "2025-09-02" }, { name: "Ghatasthapana", date: "2025-09-22" }, { name: "Maha Ashtami", date: "2025-09-30" }, { name: "Bhai Dooj", date: "2025-10-22" }],
            "SK": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Makara Sankranti", date: "2025-01-14" }, { name: "Sonam Losar", date: "2025-01-30" }, { name: "Losar", date: "2025-02-28" }, { name: "State Day", date: "2025-05-16" }, { name: "Bhanu Jayanti", date: "2025-07-13" }, { name: "Tendong Lho Rum Faat", date: "2025-08-08" }, { name: "Hartalika Teej", date: "2025-08-26" }, { name: "Indra Jatra", date: "2025-09-06" }, { name: "Maha Saptami", date: "2025-09-29" }, { name: "Maha Ashtami", date: "2025-09-30" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Bhai Dooj", date: "2025-10-22" }, { name: "Lhabab Duchen", date: "2025-11-11" }, { name: "Tamu Losar", date: "2025-12-30" }],
            "TN": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Pongal", date: "2025-01-14" }, { name: "Thiruvalluvar Day", date: "2025-01-15" }, { name: "Uzhavar Thirunal", date: "2025-01-16" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Tamil New Year", date: "2025-04-14" }, { name: "Ganesh Chaturthi", date: "2025-08-26" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Deepavali", date: "2025-10-20" }],
            "TG": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Makara Sankranti", date: "2025-01-14" }, { name: "Ugadi", date: "2025-03-30" }, { name: "Idul Fitr Holiday", date: "2025-03-31" }, { name: "Babu Jagjivan Ram Jayanti", date: "2025-04-05" }, { name: "Bonalu", date: "2025-06-29" }, { name: "Ganesh Chaturthi", date: "2025-08-26" }, { name: "First Day of Bathukamma", date: "2025-09-22" }, { name: "Maha Ashtami", date: "2025-09-30" }, { name: "Deepavali", date: "2025-10-20" }, { name: "Karthika Purnima", date: "2025-11-05" }, { name: "Christmas Holiday", date: "2025-12-26" }],
            "TR": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Netaji Subhas Chandra Bose Jayanti", date: "2025-01-23" }, { name: "Vasant Panchami", date: "2025-02-02" }, { name: "Bengali New Year", date: "2025-04-15" }, { name: "Garia Puja", date: "2025-04-20" }, { name: "Guru Rabindranath Jayanti", date: "2025-05-08" }, { name: "Kazi Nazrul Islam Jayanti", date: "2025-05-24" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "Mahalaya Amavasye", date: "2025-09-21" }, { name: "Maha Saptami", date: "2025-09-29" }, { name: "Maha Ashtami", date: "2025-09-30" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Lakshmi Puja", date: "2025-10-20" }],
            "UP": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Hazrat Ali Jayanti", date: "2025-01-14" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "Raksha Bandhan", date: "2025-08-09" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Bhai Dooj", date: "2025-10-22" }],
            "UT": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "Raksha Bandhan", date: "2025-08-09" }, { name: "Bhai Dooj", date: "2025-10-22" }],
            "WB": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Swami Vivekananda Jayanti", date: "2025-01-12" }, { name: "Netaji Subhas Chandra Bose Jayanti", date: "2025-01-23" }, { name: "Vasant Panchami", date: "2025-02-02" }, { name: "Doljatra", date: "2025-03-14" }, { name: "Bengali New Year", date: "2025-04-15" }, { name: "Guru Rabindranath Jayanti", date: "2025-05-08" }, { name: "Buddha Purnima", date: "2025-05-12" }, { name: "Mahalaya Amavasye", date: "2025-09-21" }, { name: "Maha Saptami", date: "2025-09-29" }, { name: "Maha Ashtami", date: "2025-09-30" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Lakshmi Puja", date: "2025-10-20" }]
        }
    },
    "2026": {
        nationalHolidays: [
            { name: "Republic Day", date: "2026-01-26" }, { name: "Id-ul-Fitr", date: "2026-03-20" },
            { name: "Independence Day", date: "2026-08-15" }, { name: "Gandhi Jayanti", date: "2026-10-02" },
            { name: "Christmas Day", date: "2026-12-25" }
        ],
        holidayDatabase: {
             "AN": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Buddha Purnima", date: "2026-05-22" }],
            "AP": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Pongal", date: "2026-01-14" }, { name: "Kanuma Panduga", date: "2026-01-16" }, { name: "Ugadi", date: "2026-03-21" }, { name: "Babu Jagjivan Ram Jayanti", date: "2026-04-05" }, { name: "Maha Ashtami", date: "2026-10-19" }, { name: "Deepavali", date: "2026-11-08" }],
            "AR": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Pongal", date: "2026-01-14" }, { name: "State Day", date: "2026-02-20" }, { name: "Buddha Purnima", date: "2026-05-22" }, { name: "Maha Ashtami", date: "2026-10-19" }, { name: "Indigenous Faith Day", date: "2026-12-01" }],
            "AS": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Magh Bihu", date: "2026-01-15" }, { name: "Netaji Subhas Chandra Bose Jayanti", date: "2026-01-23" }, { name: "Bohag Bihu Holiday", date: "2026-04-14" }, { name: "Buddha Purnima", date: "2026-05-22" }, { name: "Tithi of Srimanta Shankardev", date: "2026-09-13" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Kati Bihu", date: "2026-10-18" }, { name: "Chhath Puja", date: "2026-11-17" }],
            "BR": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Bihar Day", date: "2026-03-22" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Chhath Puja", date: "2026-11-17" }, { name: "Eid e Milad", date: "2026-08-25" }],
            "CH": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Guru Gobind Singh Jayanti", date: "2026-01-14" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Buddha Purnima", date: "2026-05-22" }, { name: "Bakrid / Eid al Adha", date: "2026-05-27" }, { name: "Vijaya Dashami", date: "2026-10-21" }],
            "CT": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Sant Guru Kabir Jayanti", date: "2026-06-20" }, { name: "Raksha Bandhan", date: "2026-08-19" }, { name: "Hartalika Teej", date: "2026-09-03" }, { name: "Chhath Puja", date: "2026-11-17" }, { name: "Guru Ghasidas Jayanti", date: "2026-12-18" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Buddha Purnima", date: "2026-05-22" }],
            "DN": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Ugadi", date: "2026-03-21" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Parsi New Year", date: "2026-08-15" }, { name: "Ganesh Chaturthi", date: "2026-09-05" }],
            "DD": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Ugadi", date: "2026-03-21" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Raksha Bandhan", date: "2026-08-19" }, { name: "Parsi New Year", date: "2026-08-15" }, { name: "Ganesh Chaturthi", date: "2026-09-05" }, { name: "Liberation Day", date: "2026-12-19" }],
            "DL": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Buddha Purnima", date: "2026-05-22" }],
            "GA": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Ugadi", date: "2026-03-21" }, { name: "Ganesh Chaturthi", date: "2026-09-05" }, { name: "Ganesh Chaturthi Holiday", date: "2026-09-06" }, { name: "Feast of St Francis Xavier", date: "2026-12-03" }, { name: "Liberation Day", date: "2026-12-19" }],
            "GJ": [{ name: "New Year", date: "2026-01-01" }, { name: "Uttarayan", date: "2026-01-14" }, { name: "Dhuleti", date: "2026-03-04" }, { name: "Ramzan Eid", date: "2026-03-20" }, { name: "Bakri Eid", date: "2026-05-27" }, { name: "Rakshabandhan", date: "2026-08-19" }, { name: "Janmashtami", date: "2026-09-05" }, { name: "Ganesh Chaturthi", date: "2026-09-15" }, { name: "Dussehra", date: "2026-10-21" }, { name: "Diwali", date: "2026-11-08" }, { name: "Diwali", date: "2026-11-09" }, { name: "Christmas", date: "2026-12-25" }],
            "HR": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Guru Gobind Singh Jayanti", date: "2026-01-14" }, { name: "Vasant Panchami", date: "2026-01-22" }, { name: "Guru Ravidas Jayanti", date: "2026-02-01" }, { name: "S. Bhagat Singh's Martyrdom Day", date: "2026-03-23" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Maharshi Parasuram Jayanti", date: "2026-04-20" }, { name: "Maharana Pratap Jayanti", date: "2026-05-29" }, { name: "Sant Guru Kabir Jayanti", date: "2026-06-20" }, { name: "Haryali Teej", date: "2026-08-06" }, { name: "Shaheed Udham Singh's Martyrdom Day", date: "2026-07-31" }, { name: "Raksha Bandhan", date: "2026-08-19" }, { name: "Maharaja Agrasen Jayanti", date: "2026-10-12" }, { name: "Heroes Martyrdom Day", date: "2026-09-23" }, { name: "Maharishi Valmiki Jayanti", date: "2026-10-26" }, { name: "Haryana Day", date: "2026-11-01" }, { name: "Shaheed Udham Singh Jayanti", date: "2026-12-26" }],
            "HP": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Guru Ravidas Jayanti", date: "2026-02-01" }, { name: "State Day", date: "2026-01-25" }, { name: "Himachal Day", date: "2026-04-15" }, { name: "Maharshi Parasuram Jayanti", date: "2026-04-20" }, { name: "Maharana Pratap Jayanti", date: "2026-05-29" }, { name: "Sant Guru Kabir Jayanti", date: "2026-06-20" }, { name: "Maharishi Valmiki Jayanti", date: "2026-10-26" }, { name: "Buddha Purnima", date: "2026-05-22" }, { name: "Eid e Milad", date: "2026-08-25" }],
            "JH": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Netaji Subhas Chandra Bose Jayanti", date: "2026-01-23" }, { name: "Sarhul", date: "2026-03-23" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Maha Ashtami", date: "2026-10-19" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Chhath Puja", date: "2026-11-17" }, { name: "Buddha Purnima", date: "2026-05-22" }],
            "JK": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Guru Gobind Singh Jayanti", date: "2026-01-14" }, { name: "Jumat-ul-Wida", date: "2026-03-13" }, { name: "Shab-i-Qadr", date: "2026-03-16" }, { name: "Ugadi", date: "2026-03-21" }, { name: "Vaisakh", date: "2026-04-14" }, { name: "Bakrid / Eid al Adha Holiday", date: "2026-05-28" }, { name: "Guru Hargobind Ji's Birthday", date: "2026-07-01" }, { name: "Martyrs' Day", date: "2026-07-13" }, { name: "Friday Following Eid e Milad", date: "2026-08-28" }, { name: "Sheikh Muhammad Abdullah Jayanti", date: "2026-12-05" }, { name: "Good Friday", date: "2026-04-03" }, { name: "Buddha Purnima", date: "2026-05-22" }],
            "KA": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Makara Sankranti", date: "2026-01-14" }, { name: "Ugadi", date: "2026-03-21" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Basava Jayanti", date: "2026-04-20" }, { name: "Ganesh Chaturthi", date: "2026-09-05" }, { name: "Mahalaya Amavasye", date: "2026-10-10" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Maharishi Valmiki Jayanti", date: "2026-10-26" }, { name: "Deepavali", date: "2026-10-29" }, { name: "Kannada Rajyothsava", date: "2026-11-01" }, { name: "Kanakadasa Jayanti", date: "2026-11-28" }],
            "KL": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Mannam Jayanti", date: "2026-01-02" }, { name: "Vishu", date: "2026-04-14" }, { name: "Easter Sunday", date: "2026-04-05" }, { name: "Karkidaka Vavu Bali", date: "2026-08-12" }, { name: "First Onam", date: "2026-08-25" }, { name: "Sree Narayana Guru Jayanti", date: "2026-08-28" }, { name: "Sree Narayana Guru Samadhi", date: "2026-09-21" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Deepavali", date: "2026-10-29" }],
            "LA": [{ name: "New Year's Day", date: "2026-01-01" }],
            "LD": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Mahavir Jayanti", date: "2026-03-31" }],
            "MP": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Guru Ravidas Jayanti", date: "2026-02-01" }, { name: "Gudi Padwa", date: "2026-03-21" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Maharshi Parasuram Jayanti", date: "2026-04-20" }, { name: "Buddha Purnima", date: "2026-05-22" }, { name: "Raksha Bandhan", date: "2026-08-19" }, { name: "Maharishi Valmiki Jayanti", date: "2026-10-26" }],
            "MH": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Chhatrapati Shivaji Maharaj Jayanti", date: "2026-02-19" }, { name: "Gudi Padwa", date: "2026-03-21" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Maharashtra Day", date: "2026-05-01" }, { name: "Buddha Purnima", date: "2026-05-22" }, { name: "Parsi New Year", date: "2026-08-15" }, { name: "Ganesh Chaturthi", date: "2026-09-05" }],
            "MN": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Gaan-Ngai", date: "2026-01-31" }, { name: "Lui-Ngai-Ni", date: "2026-02-15" }, { name: "Yaosang", date: "2026-03-04" }, { name: "Yaosang 2nd Day", date: "2026-03-05" }, { name: "Cheiraoba", date: "2026-03-21" }, { name: "Patriots Day", date: "2026-08-13" }, { name: "Maha Ashtami", date: "2026-10-19" }, { name: "Kut", date: "2026-11-01" }, { name: "New Year's Eve", date: "2026-12-31" }],
            "ML": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Behdeinkhlam Festival", date: "2026-07-11" }, { name: "U Tirot Sing Day", date: "2026-07-17" }, { name: "Maha Saptami", date: "2026-10-18" }, { name: "Maha Ashtami", date: "2026-10-19" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Seng Kut Snem", date: "2026-11-23" }, { name: "Pa Togan Nengminza Sangma", date: "2026-12-12" }, { name: "Death Anniversary of U SoSo Tham", date: "2026-12-18" }, { name: "Christmas Holiday", date: "2026-12-24" }, { name: "Christmas Holiday", date: "2026-12-26" }, { name: "U Kiang Nangbah", date: "2026-12-30" }],
            "MZ": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "New Year Holiday", date: "2026-01-02" }, { name: "Missionary Day", date: "2026-01-11" }, { name: "State Day", date: "2026-02-20" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Buddha Purnima", date: "2026-05-22" }, { name: "YMA Day", date: "2026-06-15" }, { name: "Remna Ni", date: "2026-06-30" }, { name: "MHIP Day", date: "2026-07-06" }, { name: "Christmas Holiday", date: "2026-12-24" }, { name: "New Year's Eve", date: "2026-12-31" }],
            "NL": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Good Friday", date: "2026-04-03" }, { name: "Easter Saturday", date: "2026-04-04" }, { name: "Easter Sunday", date: "2026-04-05" }, { name: "Maha Navami", date: "2026-10-20" }],
            "OR": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Guru Gobind Singh Jayanti", date: "2026-01-14" }, { name: "Vasant Panchami", date: "2026-01-22" }, { name: "Panchayatiraj Divas", date: "2026-03-05" }, { name: "Odisha Day", date: "2026-04-01" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Maha Vishuba Sankranti", date: "2026-04-14" }, { name: "Buddha Purnima", date: "2026-05-22" }, { name: "Pahili Raja", date: "2026-06-14" }, { name: "Raja Sankranti", date: "2026-06-15" }, { name: "Ratha Yathra", date: "2026-07-16" }, { name: "Jhulan Purnima", date: "2026-08-28" }, { name: "Nuakhai", date: "2026-09-17" }, { name: "Mahalaya Amavasye", date: "2026-10-10" }, { name: "Maha Saptami", date: "2026-10-18" }, { name: "Maha Ashtami", date: "2026-10-19" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Lakshmi Puja", date: "2026-11-09" }, { name: "Karthika Purnima", date: "2026-11-24" }],
            "PY": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Pongal", date: "2026-01-14" }, { name: "Uzhavar Thirunal", date: "2026-01-16" }, { name: "De Jure Transfer Day", date: "2026-08-16" }, { name: "Ganesh Chaturthi", date: "2026-09-05" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Deepavali", date: "2026-11-08" }, { name: "Puducherry Liberation Day", date: "2026-11-01" }],
            "PB": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Guru Gobind Singh Jayanti", date: "2026-01-14" }, { name: "Guru Ravidas Jayanti", date: "2026-02-20" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Vaisakh", date: "2026-04-14" }, { name: "Maharshi Parasuram Jayanti", date: "2026-04-20" }, { name: "Sri Guru Arjun Dev Ji's Martyrdom Day", date: "2026-06-19" }, { name: "Sant Guru Kabir Jayanti", date: "2026-06-20" }, { name: "Eid e Milad", date: "2026-08-25" }, { name: "Maharishi Valmiki Jayanti", date: "2026-10-26" }, { name: "Sri Guru Teg Bahadur Ji's Martyrdom Day", date: "2026-12-14" }],
            "RJ": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Guru Gobind Singh Jayanti", date: "2026-01-14" }, { name: "Ugadi", date: "2026-03-21" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Maharshi Parasuram Jayanti", date: "2026-04-20" }, { name: "Maharana Pratap Jayanti", date: "2026-05-29" }, { name: "Raksha Bandhan", date: "2026-08-19" }, { name: "Ramdev Jayanti", date: "2026-09-22" }, { name: "Teja Dashmi", date: "2026-09-22" }, { name: "Ghatasthapana", date: "2026-10-12" }, { name: "Maha Ashtami", date: "2026-10-19" }, { name: "Bhai Dooj", date: "2026-11-10" }],
            "SK": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Makara Sankranti", date: "2026-01-14" }, { name: "Sonam Losar", date: "2026-02-18" }, { name: "Losar", date: "2026-02-18" }, { name: "State Day", date: "2026-05-16" }, { name: "Bhanu Jayanti", date: "2026-07-13" }, { name: "Tendong Lho Rum Faat", date: "2026-08-08" }, { name: "Hartalika Teej", date: "2026-09-03" }, { name: "Indra Jatra", date: "2026-09-26" }, { name: "Maha Saptami", date: "2026-10-18" }, { name: "Maha Ashtami", date: "2026-10-19" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Bhai Dooj", date: "2026-11-10" }, { name: "Lhabab Duchen", date: "2026-11-30" }, { name: "Tamu Losar", date: "2026-12-30" }],
            "TN": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Pongal", date: "2026-01-14" }, { name: "Thiruvalluvar Day", date: "2026-01-15" }, { name: "Uzhavar Thirunal", date: "2026-01-16" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Tamil New Year", date: "2026-04-14" }, { name: "Ganesh Chaturthi", date: "2026-09-05" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Deepavali", date: "2026-11-08" }],
            "TG": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Makara Sankranti", date: "2026-01-14" }, { name: "Ugadi", date: "2026-03-21" }, { name: "Idul Fitr Holiday", date: "2026-03-21" }, { name: "Babu Jagjivan Ram Jayanti", date: "2026-04-05" }, { name: "Bonalu", date: "2026-07-19" }, { name: "Ganesh Chaturthi", date: "2026-09-05" }, { name: "First Day of Bathukamma", date: "2026-10-12" }, { name: "Maha Ashtami", date: "2026-10-19" }, { name: "Deepavali", date: "2026-11-08" }, { name: "Karthika Purnima", date: "2026-11-24" }, { name: "Christmas Holiday", date: "2026-12-26" }],
            "TR": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Netaji Subhas Chandra Bose Jayanti", date: "2026-01-23" }, { name: "Vasant Panchami", date: "2026-01-22" }, { name: "Bengali New Year", date: "2026-04-15" }, { name: "Garia Puja", date: "2026-04-21" }, { name: "Guru Rabindranath Jayanti", date: "2026-05-08" }, { name: "Kazi Nazrul Islam Jayanti", date: "2026-05-24" }, { name: "Buddha Purnima", date: "2026-05-22" }, { name: "Mahalaya Amavasye", date: "2026-10-10" }, { name: "Maha Saptami", date: "2026-10-18" }, { name: "Maha Ashtami", date: "2026-10-19" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Lakshmi Puja", date: "2026-11-09" }],
            "UP": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Hazrat Ali Jayanti", date: "2026-01-14" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Buddha Purnima", date: "2026-05-22" }, { name: "Raksha Bandhan", date: "2026-08-19" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Bhai Dooj", date: "2026-11-10" }],
            "UT": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Buddha Purnima", date: "2026-05-22" }, { name: "Raksha Bandhan", date: "2026-08-19" }, { name: "Bhai Dooj", date: "2026-11-10" }],
            "WB": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Swami Vivekananda Jayanti", date: "2026-01-12" }, { name: "Netaji Subhas Chandra Bose Jayanti", date: "2026-01-23" }, { name: "Vasant Panchami", date: "2026-01-22" }, { name: "Doljatra", date: "2026-03-04" }, { name: "Bengali New Year", date: "2026-04-15" }, { name: "Guru Rabindranath Jayanti", date: "2026-05-08" }, { name: "Buddha Purnima", date: "2026-05-22" }, { name: "Mahalaya Amavasye", date: "2026-10-10" }, { name: "Maha Saptami", date: "2026-10-18" }, { name: "Maha Ashtami", date: "2026-10-19" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Lakshmi Puja", date: "2026-11-09" }]
        }
    }
};

const indianStates = {
    "All India (National)": "all", "Andaman and Nicobar Islands": "AN", "Andhra Pradesh": "AP", "Arunachal Pradesh": "AR", "Assam": "AS", "Bihar": "BR", "Chandigarh": "CH", "Chhattisgarh": "CT", "Dadra and Nagar Haveli": "DN", "Daman and Diu": "DD", "Delhi": "DL", "Goa": "GA", "Gujarat": "GJ", "Haryana": "HR", "Himachal Pradesh": "HP", "Jammu and Kashmir": "JK", "Jharkhand": "JH", "Karnataka": "KA", "Kerala": "KL", "Ladakh": "LA", "Lakshadweep": "LD", "Madhya Pradesh": "MP", "Maharashtra": "MH", "Manipur": "MN", "Meghalaya": "ML", "Mizoram": "MZ", "Nagaland": "NL", "Odisha": "OR", "Puducherry": "PY", "Punjab": "PB", "Rajasthan": "RJ", "Sikkim": "SK", "Tamil Nadu": "TN", "Telangana": "TG", "Tripura": "TR", "Uttar Pradesh": "UP", "Uttarakhand": "UT", "West Bengal": "WB"
};

let publicHolidays = [];
let additionalHolidays = [];
let selectedHolidayType = 'long-weekends';
let selectedYear = '2025'; // Default year
let currentMonth = new Date().getMonth();
let currentYear = selectedYear;

document.addEventListener('DOMContentLoaded', function() {
    populateStateDropdown();
    setupEventListeners();
    updateForYear();
});

function updateForYear() {
    selectedYear = document.getElementById('yearSelect').value;
    currentYear = selectedYear;
    const today = new Date();
    // If the selected year is the current year, start calendar from current month
    if (parseInt(selectedYear) === today.getFullYear()) {
        currentMonth = today.getMonth();
    } else {
        currentMonth = 0; // Otherwise start from January
    }
    filterHolidaysByState();
}

function populateStateDropdown() {
    const stateSelect = document.getElementById('stateSelect');
    stateSelect.innerHTML = '';
    for (const state in indianStates) {
        const option = document.createElement('option');
        option.value = indianStates[state];
        option.textContent = state;
        stateSelect.appendChild(option);
    }
    stateSelect.value = "TN"; // Default to Tamil Nadu
}

function setupEventListeners() {
    document.getElementById('yearSelect').addEventListener('change', updateForYear);
    document.getElementById('stateSelect').addEventListener('change', filterHolidaysByState);
    document.querySelectorAll('.holiday-type-card').forEach(card => card.addEventListener('click', function() {
        document.querySelectorAll('.holiday-type-card[data-type]').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        selectedHolidayType = this.dataset.type;
    }));
    document.getElementById('prevMonth').addEventListener('click', () => { currentMonth--; if (currentMonth < 0) { currentMonth = 11; currentYear--; } renderCalendar(); });
    document.getElementById('nextMonth').addEventListener('click', () => { currentMonth++; if (currentMonth > 11) { currentMonth = 0; currentYear++; } renderCalendar(); });
    document.getElementById('generateResults').addEventListener('click', generateResults);
}

function filterHolidaysByState() {
    const yearData = holidayData[selectedYear];
    if (!yearData) {
        publicHolidays = [];
        updateHolidaysList();
        renderCalendar();
        return;
    }
    const national = yearData.nationalHolidays;
    const database = yearData.holidayDatabase;
    const selectedStateCode = document.getElementById('stateSelect').value;
    const stateSpecificHolidays = database[selectedStateCode] || [];
    
    let combinedHolidays;
    if (selectedStateCode === 'all') {
        combinedHolidays = [...national];
    } else {
        combinedHolidays = [...national, ...stateSpecificHolidays];
    }
    
    const groupedHolidays = combinedHolidays.reduce((acc, holiday) => {
        if (!acc[holiday.date]) {
            acc[holiday.date] = [];
        }
        acc[holiday.date].push(holiday.name);
        return acc;
    }, {});

    publicHolidays = Object.keys(groupedHolidays).map(date => ({
        date: date,
        names: [...new Set(groupedHolidays[date])]
    }));

    updateHolidaysList();
    renderCalendar();
}

// (Find this function in your script.js and replace it)
function updateHolidaysList() {
    const holidaysList = document.getElementById('holidaysList');
    holidaysList.innerHTML = '';
    publicHolidays.sort((a, b) => new Date(a.date) - new Date(b.date));

    if (publicHolidays.length === 0) {
        holidaysList.innerHTML = '<p>No holidays found for this state.</p>';
    } else {
        publicHolidays.forEach(holiday => {
            const holidayItem = document.createElement('div');
            holidayItem.className = 'holiday-item';

            const holidayDate = new Date(holiday.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            const holidayNames = holiday.names.join(' / ');

            const nameSpan = document.createElement('span');
            nameSpan.textContent = holidayNames;

            const dateSpan = document.createElement('span');
            dateSpan.textContent = holidayDate;
            dateSpan.style.color = 'var(--text-muted)';

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '&#x1F5D1;'; // Trash can icon
            deleteBtn.setAttribute('aria-label', 'Delete holiday');
            deleteBtn.onclick = () => removePublicHoliday(holiday.date);

            holidayItem.appendChild(nameSpan);
            holidayItem.appendChild(dateSpan);
            holidayItem.appendChild(deleteBtn);
            holidaysList.appendChild(holidayItem);
        });
    }
    document.getElementById('holidayCountDisplay').textContent = publicHolidays.length;
}

function removePublicHoliday(dateToRemove) {
    publicHolidays = publicHolidays.filter(h => h.date !== dateToRemove);
    updateHolidaysList();
    renderCalendar();
}

function renderCalendar() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('calendarMonth').textContent = `${monthNames[currentMonth]} ${currentYear}`;
    const firstDay = new Date(currentYear, currentMonth, 1);
    const calendarDates = document.getElementById('calendarDates');
    calendarDates.innerHTML = '';
    let dayOfWeek = firstDay.getDay();
    if (dayOfWeek === 0) dayOfWeek = 6; else dayOfWeek--;
    for (let i = 0; i < dayOfWeek; i++) { calendarDates.insertAdjacentHTML('beforeend', '<div class="calendar-date other-month"></div>'); }
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const dateString = date.toISOString().split('T')[0];
        const dateElement = document.createElement('div');
        dateElement.className = 'calendar-date';
        dateElement.textContent = i;
        const isPublicHoliday = publicHolidays.some(h => h.date === dateString);
        const isAdditionalHoliday = additionalHolidays.includes(dateString);
        if (isPublicHoliday) dateElement.classList.add('public-holiday');
        if (isAdditionalHoliday) dateElement.classList.add('company-holiday');
        if (!isPublicHoliday) {
            dateElement.addEventListener('click', () => {
                if (isAdditionalHoliday) { additionalHolidays = additionalHolidays.filter(d => d !== dateString); } else { additionalHolidays.push(dateString); }
                renderCalendar();
            });
        }
        calendarDates.appendChild(dateElement);
    }
}

async function generateResults() {
    const generateBtn = document.getElementById('generateResults');
    generateBtn.disabled = true;
    generateBtn.innerHTML = '🧠 Optimizing...';
    const holidaysForBackend = publicHolidays.map(h => ({ date: h.date, name: h.names[0] }));
    const apiPayload = {
        year: document.getElementById('yearSelect').value,
        ptoDays: parseInt(document.getElementById('holidayCount').value) || 16,
        strategy: selectedHolidayType,
        publicHolidays: holidaysForBackend,
        userHolidays: additionalHolidays
    };
    try {
        const response = await fetch('http://127.0.0.1:5000/api/optimize', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(apiPayload) });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const optimizedSuggestions = await response.json();
        document.querySelector('.planner-section').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'block';
        updateWeekendResults(optimizedSuggestions);
        updateStatistics(apiPayload.ptoDays, optimizedSuggestions);
    } catch (error) {
        console.error("Failed to fetch optimization results:", error);
        alert("Could not connect to the optimization server. Please ensure the Python backend (app.py) is running.");
    } finally {
        generateBtn.disabled = false;
        generateBtn.innerHTML = '⚡ Generate result';
    }
}

// REPLACE THIS ENTIRE FUNCTION IN SCRIPT.JS

function updateWeekendResults(suggestions = []) {
    const resultsContainer = document.getElementById('weekendResults');
    resultsContainer.innerHTML = '';

    if (suggestions.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align:center; color: #555; font-size: 1.1rem;">No optimal vacations found. Try a different strategy or add more PTO days.</p>';
        return;
    }

    suggestions.forEach(weekend => {
        const startDate = new Date(weekend.start_date);
        const endDate = new Date(weekend.end_date);
        const yearSuffix = `'${new Date(weekend.start_date).getFullYear().toString().slice(-2)}`;

        const options = { month: 'short', day: 'numeric' };
        
        const startString = `${startDate.toLocaleDateString('en-US', options)}${yearSuffix}`;
        const endString = `${endDate.toLocaleDateString('en-US', options)}${yearSuffix}`;
        const dateString = `${startString} - ${endString}`;

        const weekendData = {
            // --- FIX IS HERE ---
            start_date: weekend.start_date, // This line was missing
            end_date: weekend.end_date,     // This line was missing
            // --- END OF FIX ---
            dates: dateString,
            duration: `${weekend.total_days_off}-day break`,
            type: selectedHolidayType.replace('-', ' '),
            ptoUsed: weekend.pto_used,
            calendar: generateCalendarViewForResult(startDate, weekend.pto_dates)
        };

        const weekendCard = createWeekendCard(weekendData);
        resultsContainer.appendChild(weekendCard);
    });
}

function updateStatistics(initialPto, suggestions = []) {
    const totalPtoUsed = suggestions.reduce((sum, vac) => sum + vac.pto_used, 0);
    const totalDaysOff = suggestions.reduce((sum, vac) => sum + vac.total_days_off, 0);
    document.getElementById('totalDaysOff').textContent = totalDaysOff;
    document.getElementById('userHolidaysUsed').textContent = totalPtoUsed;
    document.getElementById('companyHolidaysUsed').textContent = additionalHolidays.length;
    document.getElementById('strategyType').textContent = selectedHolidayType.replace('-', ' ');
}

function generateCalendarViewForResult(startDate, ptoDates) {
    const year = startDate.getFullYear(), month = startDate.getMonth();
    const ptoDaysInMonth = ptoDates.map(d => new Date(d).getDate());
    const allHolidayDates = [...publicHolidays.map(h => h.date), ...additionalHolidays];
    const holidayDatesInMonth = allHolidayDates.map(h => new Date(h)).filter(d => d.getFullYear() === year && d.getMonth() === month).map(d => d.getDate());
    const firstDayOfMonth = new Date(year, month, 1);
    let startDayOfWeek = firstDayOfMonth.getDay();
    if (startDayOfWeek === 0) startDayOfWeek = 6; else startDayOfWeek--;
    const calendar = [];
    for (let i = 0; i < startDayOfWeek; i++) calendar.push({ day: '', class: 'empty' });
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
        const dayOfWeek = new Date(year, month, day).getDay();
        let dayClass = '';
        if (ptoDaysInMonth.includes(day)) dayClass = 'highlight';
        else if (holidayDatesInMonth.includes(day)) dayClass = 'holiday';
        else if (dayOfWeek === 6 || dayOfWeek === 0) dayClass = 'weekend';
        calendar.push({ day: day, class: dayClass });
    }
    return calendar;
}

function createWeekendCard(weekend) {
    const card = document.createElement('div');
    card.className = 'weekend-card';
    const calendarGrid = weekend.calendar.map(day => `<div class="weekend-calendar-day ${day.class}">${day.day}</div>`).join('');
    card.innerHTML = `<div class="weekend-header"><div class="weekend-dates">${weekend.dates}</div><div class="weekend-type">${weekend.type}</div></div><div class="weekend-duration">${weekend.duration} (uses ${weekend.ptoUsed} PTO day${weekend.ptoUsed > 1 ? 's' : ''})</div><div class="weekend-calendar"><div class="weekend-calendar-header"><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span></div><div class="weekend-calendar-grid">${calendarGrid}</div></div>`;
    return card;
}

function goBackToPlanner() {
    document.querySelector('.planner-section').style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';
    filterHolidaysByState();
}

// ADD THIS NEW HELPER FUNCTION SOMEWHERE IN YOUR SCRIPT.JS
function formatGoogleCalendarDate(date) {
    // Takes a date object and returns it in YYYYMMDD format
    return date.toISOString().split('T')[0].replace(/-/g, '');
}

// REPLACE YOUR EXISTING createWeekendCard FUNCTION WITH THIS MORE ROBUST VERSION
function createWeekendCard(weekend) {
    const card = document.createElement('div');
    card.className = 'weekend-card';

    // --- Google Calendar Link Generation (with validation) ---
    let calendarLink = ''; // Default to an empty string

    // VALIDATION: Check if start_date and end_date are valid before processing.
    if (weekend.start_date && weekend.end_date) {
        const gcStartDate = new Date(weekend.start_date);
        const gcEndDate = new Date(weekend.end_date);

        // Check if the created dates are valid objects
        if (!isNaN(gcStartDate) && !isNaN(gcEndDate)) {
            gcEndDate.setDate(gcEndDate.getDate() + 1); // For all-day events, Google requires the end date to be the day AFTER the event ends.

            const calendarUrl = new URL('https://calendar.google.com/calendar/render');
            calendarUrl.searchParams.append('action', 'TEMPLATE');
            calendarUrl.searchParams.append('text', 'Holiday / Vacation');
            calendarUrl.searchParams.append('dates', `${formatGoogleCalendarDate(gcStartDate)}/${formatGoogleCalendarDate(gcEndDate)}`);
            calendarUrl.searchParams.append('details', `Optimized holiday period.\nUses ${weekend.ptoUsed} PTO day(s) for a total of ${weekend.duration.split('-')[0]} days off.`);

            // Create the button HTML
            calendarLink = `
                <a href="${calendarUrl.href}" target="_blank" rel="noopener noreferrer" class="gcal-btn">
                    Add to Google Calendar
                </a>`;
        }
    }
    // --- End of Link Generation ---

    const calendarGrid = weekend.calendar.map(day => `<div class="weekend-calendar-day ${day.class}">${day.day}</div>`).join('');

    card.innerHTML = `
        <div class="weekend-header">
            <div class="weekend-dates">${weekend.dates}</div>
            <div class="weekend-type">${weekend.type}</div>
        </div>
        <div class="weekend-duration">${weekend.duration} (uses ${weekend.ptoUsed} PTO day${weekend.ptoUsed > 1 ? 's' : ''})</div>
        <div class="weekend-calendar">
            <div class="weekend-calendar-header">
                <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
            </div>
            <div class="weekend-calendar-grid">${calendarGrid}</div>
        </div>
        ${calendarLink} 
    `; // The calendarLink will be added here (or be blank if the date was invalid)
    return card;
}
// (Find this at the bottom of your script.js and replace it)
document.addEventListener('DOMContentLoaded', function() {
    // ... (all your other DOMContentLoaded code is fine)

    const backButton = document.createElement('button');
    backButton.textContent = '← Plan Again';
    backButton.className = 'generate-btn'; // Use the same class
    backButton.style.marginTop = '2rem'; // Keep a little space
    backButton.addEventListener('click', goBackToPlanner);

    const resultsContent = document.querySelector('.results-content');
    resultsContent.insertBefore(backButton, resultsContent.firstChild);
});