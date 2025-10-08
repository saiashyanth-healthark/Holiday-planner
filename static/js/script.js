
// --- HOLIDAY DATABASE FOR INDIA (Hardcoded) ---
const holidayData = {
    "2025": {
        nationalHolidays: [
            { name: "Republic Day", date: "2025-01-26" }, { name: "Idul Fitr", date: "2025-03-30" },
            { name: "Independence Day", date: "2025-08-15" }, { name: "Gandhi Jayanti", date: "2025-10-02" },
            { name: "Christmas Day", date: "2025-12-25" }
        ],
        holidayDatabase: {
            "AN": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Buddha Purnima", date: "2025-05-12" }],
            "TN": [{ name: "New Year's Day", date: "2025-01-01" }, { name: "Pongal", date: "2025-01-14" }, { name: "Thiruvalluvar Day", date: "2025-01-15" }, { name: "Uzhavar Thirunal", date: "2025-01-16" }, { name: "Mahavir Jayanti", date: "2025-04-10" }, { name: "Tamil New Year", date: "2025-04-14" }, { name: "Ganesh Chaturthi", date: "2025-08-26" }, { name: "Maha Navami", date: "2025-10-01" }, { name: "Deepavali", date: "2025-10-20" }],
            // ... (add all other Indian state data here) ...
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
            "TN": [{ name: "New Year's Day", date: "2026-01-01" }, { name: "Pongal", date: "2026-01-14" }, { name: "Thiruvalluvar Day", date: "2026-01-15" }, { name: "Uzhavar Thirunal", date: "2026-01-16" }, { name: "Mahavir Jayanti", date: "2026-03-31" }, { name: "Tamil New Year", date: "2026-04-14" }, { name: "Ganesh Chaturthi", date: "2026-09-05" }, { name: "Maha Navami", date: "2026-10-20" }, { name: "Deepavali", date: "2026-11-08" }],
            // ... (add all other Indian state data here) ...
        }
    }
};

const indianStates = {
    "All India (National)": "all", "Andaman and Nicobar Islands": "AN", "Andhra Pradesh": "AP", "Arunachal Pradesh": "AR", "Assam": "AS", "Bihar": "BR", "Chandigarh": "CH", "Chhattisgarh": "CT", "Dadra and Nagar Haveli": "DN", "Daman and Diu": "DD", "Delhi": "DL", "Goa": "GA", "Gujarat": "GJ", "Haryana": "HR", "Himachal Pradesh": "HP", "Jammu and Kashmir": "JK", "Jharkhand": "JH", "Karnataka": "KA", "Kerala": "KL", "Ladakh": "LA", "Lakshadweep": "LD", "Madhya Pradesh": "MP", "Maharashtra": "MH", "Manipur": "MN", "Meghalaya": "ML", "Mizoram": "MZ", "Nagaland": "NL", "Odisha": "OR", "Puducherry": "PY", "Punjab": "PB", "Rajasthan": "RJ", "Sikkim": "SK", "Tamil Nadu": "TN", "Telangana": "TG", "Tripura": "TR", "Uttar Pradesh": "UP", "Uttarakhand": "UT", "West Bengal": "WB"
};

let publicHolidays = [];
let additionalHolidays = [];
let selectedHolidayType = ''; // No default strategy
let selectedYear = new Date().getFullYear().toString(); // Default to current year
let currentMonth = new Date().getMonth();
let currentYear = parseInt(selectedYear);

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', function() {
    populateStateDropdown();
    setupEventListeners();
    handleCountryChange();
});

function setupEventListeners() {
    document.getElementById('yearSelect').addEventListener('change', updateForYear);
    document.getElementById('countrySelect').addEventListener('change', handleCountryChange);
    document.getElementById('stateSelect').addEventListener('change', filterHolidaysByState);
    
    document.querySelectorAll('.holiday-type-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.holiday-type-card.selected').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedHolidayType = this.dataset.type;
        });
    });

    document.getElementById('prevMonth').addEventListener('click', () => { if(--currentMonth < 0) { currentMonth = 11; currentYear--; } renderCalendar(); });
    document.getElementById('nextMonth').addEventListener('click', () => { if(++currentMonth > 11) { currentMonth = 0; currentYear++; } renderCalendar(); });
    document.getElementById('generateResults').addEventListener('click', generateResults);
}

function handleCountryChange() {
    const countryCode = document.getElementById('countrySelect').value;
    const stateSelector = document.getElementById('stateSelectorWrapper');

    if (countryCode === 'IN') {
        stateSelector.style.display = 'block';
        filterHolidaysByState();
    } else {
        stateSelector.style.display = 'none';
        fetchHolidaysFromAPI(countryCode);
    }
}

// Replace the old function with this new one that uses the Nager.Date API

async function fetchHolidaysFromAPI(countryCode) {
    const year = document.getElementById('yearSelect').value;
    
    // Caching logic remains the same
    const cacheKey = `holidays-${countryCode}-${year}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
        console.log("Loading holidays from cache...");
        publicHolidays = JSON.parse(cachedData);
        updateHolidaysList();
        renderCalendar();
        return;
    }

    publicHolidays = []; 
    updateHolidaysList();
    renderCalendar();

    // --- NEW: Nager.Date API URL (no key needed) ---
    const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
        console.log("Fetching holidays from Nager.Date API...");
        const response = await fetch(url, { signal: controller.signal });
        
        if (!response.ok) throw new Error('API response was not ok.');
        
        const holidays = await response.json();
        if (!holidays || holidays.length === 0) {
            console.log("No holidays found for this country/year via API.");
            return;
        }
        
        // The data format is similar, so we can process it the same way
        const formattedHolidays = holidays.map(holiday => ({
            date: holiday.date,
            names: [holiday.name]
        }));

        // Save the new data to the cache
        localStorage.setItem(cacheKey, JSON.stringify(formattedHolidays));
        
        publicHolidays = formattedHolidays;
        
        updateHolidaysList();
        renderCalendar();

    } catch (error) {
        if (error.name === 'AbortError') {
            console.error("API Error: Request timed out.");
            alert("The holiday API took too long to respond. Please try again.");
        } else {
            console.error("API Error:", error);
            alert("Could not fetch holiday data for the selected country.");
        }
    } finally {
        clearTimeout(timeoutId);
    }
}

function updateForYear() {
    selectedYear = document.getElementById('yearSelect').value;
    currentYear = parseInt(selectedYear);
    const today = new Date();
    currentMonth = (parseInt(selectedYear) === today.getFullYear()) ? today.getMonth() : 0;
    
    handleCountryChange(); 
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
    stateSelect.value = "TN";
}

function filterHolidaysByState() {
    publicHolidays = [];
    const yearData = holidayData[selectedYear];
    if (!yearData) {
        updateHolidaysList();
        renderCalendar();
        return;
    }

    const national = yearData.nationalHolidays;
    const database = yearData.holidayDatabase;
    const selectedStateCode = document.getElementById('stateSelect').value;
    const stateSpecificHolidays = database[selectedStateCode] || [];
    
    let combinedHolidays = (selectedStateCode === 'all') ? [...national] : [...national, ...stateSpecificHolidays];
    
    const groupedHolidays = combinedHolidays.reduce((acc, holiday) => {
        if (!acc[holiday.date]) acc[holiday.date] = [];
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

function updateHolidaysList() {
    const holidaysList = document.getElementById('holidaysList');
    holidaysList.innerHTML = '';
    publicHolidays.sort((a, b) => new Date(a.date) - new Date(b.date));

    if (publicHolidays.length === 0) {
        holidaysList.innerHTML = '<p>No holidays found for this selection.</p>';
    } else {
        publicHolidays.forEach(holiday => {
            const holidayItem = document.createElement('div');
            holidayItem.className = 'holiday-item';
            
            // Use try-catch for robust date parsing
            try {
                const holidayDate = new Date(holiday.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                const holidayNames = holiday.names.join(' / ');
                
                const nameSpan = document.createElement('span');
                nameSpan.textContent = holidayNames;
                
                const dateSpan = document.createElement('span');
                dateSpan.textContent = holidayDate;
                dateSpan.style.color = 'var(--text-muted)';

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.innerHTML = '&#x1F5D1;';
                deleteBtn.setAttribute('aria-label', 'Delete holiday');
                deleteBtn.onclick = () => removePublicHoliday(holiday.date);

                holidayItem.appendChild(nameSpan);
                holidayItem.appendChild(dateSpan);
                holidayItem.appendChild(deleteBtn);
                holidaysList.appendChild(holidayItem);
            } catch(e) {
                console.error("Could not parse date:", holiday.date);
            }
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

    for (let i = 0; i < dayOfWeek; i++) {
        calendarDates.insertAdjacentHTML('beforeend', '<div class="calendar-date other-month"></div>');
    }

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonth, i);
        
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        
        const dateElement = document.createElement('div');
        dateElement.className = 'calendar-date';
        dateElement.textContent = i;

        const isPublicHoliday = publicHolidays.some(h => h.date === dateString);
        const isAdditionalHoliday = additionalHolidays.includes(dateString);

        if (isPublicHoliday) dateElement.classList.add('public-holiday');
        if (isAdditionalHoliday) dateElement.classList.add('company-holiday');

        if (!isPublicHoliday) {
            dateElement.addEventListener('click', () => {
                if (isAdditionalHoliday) {
                    additionalHolidays = additionalHolidays.filter(d => d !== dateString);
                } else {
                    additionalHolidays.push(dateString);
                }
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
        year: parseInt(document.getElementById('yearSelect').value),
        ptoDays: parseInt(document.getElementById('holidayCount').value) || 16,
        strategy: selectedHolidayType,
        publicHolidays: holidaysForBackend,
        userHolidays: additionalHolidays
    };

    try {
        const response = await fetch('/api/optimize', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(apiPayload) });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const optimizedSuggestions = await response.json();
        
        document.querySelector('.planner-section').style.display = 'none';
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.style.display = 'block';

        if (!resultsSection.querySelector('.back-btn')) {
            const backButton = document.createElement('button');
            backButton.textContent = '← Plan Again';
            backButton.className = 'generate-btn back-btn';
            backButton.style.marginBottom = '2rem';
            backButton.onclick = () => {
                resultsSection.style.display = 'none';
                document.querySelector('.planner-section').style.display = 'block';
            };
            resultsSection.insertBefore(backButton, resultsSection.firstChild);
        }
        
        updateWeekendResults(optimizedSuggestions);
        updateStatistics(apiPayload.ptoDays, optimizedSuggestions);

    } catch (error) {
        console.error("Failed to fetch optimization results:", error);
        alert("Could not connect to the optimization server. Please ensure the backend is running.");
    } finally {
        generateBtn.disabled = false;
        generateBtn.innerHTML = '⚡ Generate My Holiday Plan';
    }
}

function updateWeekendResults(suggestions = []) {
    const resultsContainer = document.getElementById('weekendResults');
    resultsContainer.innerHTML = '';

    if (suggestions.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align:center; color: #555;">No optimal vacations found. Try a different strategy or add more PTO days.</p>';
        return;
    }

    suggestions.forEach(weekend => {
        const startDate = new Date(weekend.start_date + 'T00:00:00');
        const endDate = new Date(weekend.end_date + 'T00:00:00');
        
        const weekendData = {
            start_date: weekend.start_date,
            end_date: weekend.end_date,
            dates: `${startDate.toLocaleDateString('en-US', {month:'short', day:'numeric'})} - ${endDate.toLocaleDateString('en-US', {month:'short', day:'numeric'})}`,
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
    document.getElementById('strategyType').textContent = selectedHolidayType;
}

function generateCalendarViewForResult(startDate, ptoDates) {
    const year = startDate.getFullYear(), month = startDate.getMonth();
    const ptoDaysInMonth = ptoDates.map(d => new Date(d + 'T00:00:00').getDate());
    const allHolidayDates = [...publicHolidays.map(h => h.date), ...additionalHolidays];
    const holidayDatesInMonth = allHolidayDates.map(h => new Date(h + 'T00:00:00')).filter(d => d.getFullYear() === year && d.getMonth() === month).map(d => d.getDate());
    
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

function formatGoogleCalendarDate(date) {
    return date.toISOString().split('T')[0].replace(/-/g, '');
}

function formatISO8601Date(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}T00:00:00`;
}

function createWeekendCard(weekend) {
    const card = document.createElement('div');
    card.className = 'weekend-card';
    let calendarLinksHTML = '';

    if (weekend.start_date && weekend.end_date) {
        const startDate = new Date(weekend.start_date + 'T00:00:00');
        const endDate = new Date(weekend.end_date + 'T00:00:00');

        if (!isNaN(startDate) && !isNaN(endDate)) {
            const calendarEndDate = new Date(endDate);
            calendarEndDate.setDate(calendarEndDate.getDate() + 1);

            const eventTitle = 'Holiday / Vacation';
            const eventDetails = `Optimized holiday period.\nUses ${weekend.ptoUsed} PTO day(s) for a total of ${weekend.duration.split('-')[0]} days off.`;

            const googleUrl = new URL('https://calendar.google.com/calendar/render');
            googleUrl.searchParams.append('action', 'TEMPLATE');
            googleUrl.searchParams.append('text', eventTitle);
            googleUrl.searchParams.append('dates', `${formatGoogleCalendarDate(startDate)}/${formatGoogleCalendarDate(calendarEndDate)}`);
            googleUrl.searchParams.append('details', eventDetails);

            const outlookUrl = new URL('https://outlook.live.com/calendar/0/deeplink/compose');
            outlookUrl.searchParams.append('path', '/calendar/action/compose');
            outlookUrl.searchParams.append('rru', 'addevent');
            outlookUrl.searchParams.append('subject', eventTitle);
            outlookUrl.searchParams.append('startdt', formatISO8601Date(startDate));
            outlookUrl.searchParams.append('enddt', formatISO8601Date(calendarEndDate));
            outlookUrl.searchParams.append('body', eventDetails);

            calendarLinksHTML = `
                <div class="card-actions">
                    <a href="${googleUrl.href}" target="_blank" rel="noopener noreferrer" class="calendar-btn gcal-btn">Add to Google</a>
                    <a href="${outlookUrl.href}" target="_blank" rel="noopener noreferrer" class="calendar-btn outlook-btn">Add to Outlook</a>
                </div>`;
        }
    }

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
        ${calendarLinksHTML}
    `;
    return card;
}