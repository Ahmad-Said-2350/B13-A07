import React, { useState } from 'react';
import TimelineContext from './TimelineContext ';

const TimelineProvider = ({children}) => {
    const [timeline,settimeline] = useState([])

    const data = {
        timeline,settimeline
    }

     
    return (
        <TimelineContext.Provider value={data}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;