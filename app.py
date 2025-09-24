from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from datetime import date, timedelta

app = Flask(__name__)
CORS(app) # Enables Cross-Origin Resource Sharing

# --- Main Route to Serve the HTML Page ---
@app.route('/')
def index():
    return render_template('index.html')

# --- The Optimization Algorithm ---
def find_optimal_holidays(year, pto_days_available, public_holidays_str, user_holidays_str, strategy):
    # Now uses the real current date. It will always be up-to-date!
    today = date.today()

    public_holidays = {date.fromisoformat(h['date']) for h in public_holidays_str}
    user_holidays = {date.fromisoformat(d) for d in user_holidays_str}
    all_holidays = public_holidays.union(user_holidays)

    strategy_params = {
        'long-weekends': {'min_gap': 1, 'max_gap': 2, 'min_vacation': 3},
        'mid-week': {'min_gap': 2, 'max_gap': 4, 'min_vacation': 5},
        'week-long': {'min_gap': 3, 'max_gap': 5, 'min_vacation': 7},
        'extended': {'min_gap': 5, 'max_gap': 10, 'min_vacation': 10}
    }
    params = strategy_params.get(strategy, strategy_params['week-long'])

    # Scan into the next year to catch potential New Year's breaks
    start_date, end_date = date(year, 1, 1), date(year + 1, 1, 15)
    day_type = {}
    current_date = start_date
    while current_date <= end_date:
        # Manually add next year's New Day as a holiday for planning
        if current_date in all_holidays or current_date == date(year + 1, 1, 1):
            day_type[current_date] = 'holiday'
        elif current_date.weekday() >= 5: # Saturday or Sunday
            day_type[current_date] = 'weekend'
        else:
            day_type[current_date] = 'workday'
        current_date += timedelta(days=1)

    potential_vacations = []
    current_date = start_date + timedelta(days=1)
    while current_date < date(year, 12, 31): # Only find gaps within the selected year
        if day_type.get(current_date) == 'workday' and day_type.get(current_date - timedelta(days=1)) != 'workday':
            gap_start = current_date
            gap_end = gap_start
            while gap_end < end_date and day_type.get(gap_end + timedelta(days=1)) == 'workday':
                gap_end += timedelta(days=1)
            
            pto_to_take = (gap_end - gap_start).days + 1
            
            if params['min_gap'] <= pto_to_take <= params['max_gap']:
                vacation_start, vacation_end = gap_start, gap_end
                while vacation_start > start_date and day_type.get(vacation_start - timedelta(days=1)) != 'workday':
                    vacation_start -= timedelta(days=1)
                while vacation_end < end_date and day_type.get(vacation_end + timedelta(days=1)) != 'workday':
                    vacation_end += timedelta(days=1)
                
                total_days_off = (vacation_end - vacation_start).days + 1

                if pto_to_take > 0 and total_days_off >= params['min_vacation']:
                    score = round(total_days_off / pto_to_take, 2)
                    potential_vacations.append({
                        'score': score, 'total_days_off': total_days_off, 'pto_used': pto_to_take,
                        'start_date': vacation_start.isoformat(), 'end_date': vacation_end.isoformat(),
                        'pto_dates': [d.isoformat() for d in [gap_start + timedelta(days=i) for i in range(pto_to_take)]]
                    })
        current_date += timedelta(days=1)
    
    # Filter out vacations that have already passed
    future_vacations = [vac for vac in potential_vacations if date.fromisoformat(vac['start_date']) >= today]

    # Sort by the best score using the filtered list
    sorted_vacations = sorted(future_vacations, key=lambda x: x['score'], reverse=True)
    
    final_suggestions, used_dates, pto_remaining = [], set(), pto_days_available
    for vac in sorted_vacations:
        if pto_remaining >= vac['pto_used']:
            v_dates = {date.fromisoformat(vac['start_date']) + timedelta(days=i) for i in range(vac['total_days_off'])}
            if not used_dates.intersection(v_dates):
                final_suggestions.append(vac)
                used_dates.update(v_dates)
                pto_remaining -= vac['pto_used']

    return final_suggestions

# --- The API Endpoint ---
@app.route('/api/optimize', methods=['POST'])
def optimize_holidays_api():
    data = request.json
    year = int(data.get('year', 2025))
    pto_days = int(data.get('ptoDays', 16))
    strategy = data.get('strategy', 'week-long')
    public_holidays = data.get('publicHolidays', [])
    user_holidays = data.get('userHolidays', [])
    results = find_optimal_holidays(year, pto_days, public_holidays, user_holidays, strategy)
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True, port=5000)