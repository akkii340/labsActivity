import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import moment from 'moment' 


const currentDate = moment();

export default React.memo((props) =>
    {
        if(props.schedulerData.length > 0)
     return(
        <Paper>
          <Scheduler
            data={props.schedulerData}
          >
            <ViewState
              currentDate={currentDate}
            />
            <DayView
              startDayHour={9}
              endDayHour={19}
              cellDuration={60}
            />
            <Appointments />
          </Scheduler>
        </Paper>
      )
      else return(
        <div> 
        <p style={{color:'tomato',fontWeight:'bold',fontSize:'15px'}}>No active periods today</p>

        <Paper>
          <Scheduler
            data={props.schedulerData}
          >
          
            <ViewState
              currentDate={currentDate}
            />
            <DayView
              startDayHour={9}
              endDayHour={18}
              cellDuration={60}
            />
            <Appointments />
          </Scheduler>
        </Paper>
        </div>
      );
    })
