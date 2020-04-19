import * as React from 'react';
import {data} from './data'
import User from './components/Users'


const App =()=>{
  const Objdata = data.members
return(
  <React.Fragment>
    <strong style={{marginLeft:'10px',marginTop:'10px'}}>List of user</strong>
    {Objdata.map( obj => <User key ={obj.id} userinfo={obj}/>)}
  </React.Fragment>
  )
}
export default App