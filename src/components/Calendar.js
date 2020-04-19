import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { darken, fade, lighten } from '@material-ui/core/styles/colorManipulator';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  Resources
} from '@devexpress/dx-react-scheduler-material-ui';


const styles = theme => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
  },  appointment: {
    borderRadius: '10px',
    '&:hover': {
      opacity: 0.6,
    },
  },
  apptContent: {
    '&>div>div': {
      whiteSpace: 'normal !important',
      lineHeight: 1.2,
    }
  }})

const Appointment = (restProps) => (
  <Appointments.Appointment
   {...restProps}
    className={styles.appointment}
  />
);

const AppointmentContent = (restProps) => (
  <Appointments.AppointmentContent {...restProps} className={styles.apptContent} />
)


export default class Calendar extends React.PureComponent {
 
  constructor(props) {
    super(props);

    this.state = {
      data: props.appointmentdata,
    };

  }
   resourcess = [{
    fieldName: 'ownerId',
    title: 'Owners',
    instances: this.props.owner,
  }];

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
        >
        
          <ViewState
            defaultCurrentDate={new Date()}
          />

          <MonthView/>

          <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
          />
          <Resources
            data={this.resourcess}
          />

          <Toolbar/>
          <DateNavigator />

          
          <AppointmentTooltip
            showCloseButton
          />
        
        </Scheduler>
      </Paper>
    );
  }
}
