import React from 'react'
import Calendar from './Calendar'
import DaySheet from './DaySheet' 
import './User.css'
import moment from 'moment'

const User =(props)=>{

    const userInfo = props.userinfo
    const [userClick,setUsserClick] = React.useState(false)
    const [showMore,setShowMore] = React.useState(false)
 
    const daysheet = props.userinfo.activity_periods.filter(data => moment(data.start_time,"LLL h:mmA").isSame(moment(),"day"))
    const appointments = props.userinfo.activity_periods.filter(data => !moment(data.start_time,"LLL h:mmA").isSame(moment(),"day"))
    let schedulerData = []
    let appointmentdata = []
    let owner = [{
        text: props.userinfo.real_name,
        id: props.userinfo.id,
        color: '#7E57C2',
    }] 
    {
    appointments.length > 0 ? 
        appointmentdata = appointments.map((obj,index) =>  ({
            id: index,
            title: 'Activity period',
            startDate: moment(obj.start_time,"LLL h:mmA").toDate(),
            endDate: moment(obj.end_time,"LLL h:mmA").toDate(),
            ownerId: props.userinfo.id}))

            :console.log('appintmenrt data empty')
    }
 

    {daysheet.length> 0 ? 
     schedulerData = daysheet
    .map(obj => ({startDate:moment(obj.start_time,"LLL h:mmA"),endDate:moment(obj.end_time,"LLL h:mmA"),title: 'Active Period'}))
    :console.log('daysheet is empty')}

    return(
    <div className="modal">
        <div className= "userName" onClick={()=>{setUsserClick(!userClick)}}>
        <div><strong>{userInfo.real_name}</strong>
        </div>
        </div>
    { userClick ?
        <div className = "daySheet">
        <div style={{display:'flex',flexDirection:'row'}} onClick={()=>{setShowMore(!showMore)}}>
        <p  style={{marginRight:'20px',color:userClick && !showMore ? 'Violet':'gray'}}>Current Day</p>
        <p  style={{color:showMore?'Violet':'gray'}}>Show More</p></div>
        <div style={{opacity:showMore? 0 : 1,transform:showMore? 'translateX(100vh)':'translateX(0)',transition:'all 0.5s ease-out'}}>
        <DaySheet schedulerData={schedulerData}/>
        </div>     
        </div>:null}
        {showMore && userClick ?
    <div 
    style =
    {{  position:'absolute',left:'10px',right:'10px',bottom:'10px',overflow: 'auto',
        top:'100px',opacity:showMore ? 1 : 0,
        transform:showMore? 'translateX(0)':'translateX(-100vh)',transition:'all 0.5s ease-out'}}>
        <Calendar owner = {owner} appointmentdata ={appointmentdata}/>
    </div>
        :null}
    </div>
    )
}

export default User