import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import CalendarCSS from './Calendar.module.css';

function Calendar() {

    const apiKey = process.env.REACT_APP_CAL_API_KEY;
    
    

    return(
        <>
           <div className="cal-container">
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        googleCalendarApiKey={apiKey}
        events={{
          googleCalendarId: 'junyon6@gmail.com',
        }}
        eventDisplay={'block'}
        eventTextColor={'#FFF'}
        eventColor={'#F2921D'}
        height={'660px'}
        
        Toolbar
      />
      
        </div>

        
        </>
        
    );
    
}

export default Calendar;