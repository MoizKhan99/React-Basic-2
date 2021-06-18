import react, {useContext} from 'react'
import { UserContext} from '../App'
import {ChannelContext} from '../App'
function ComponentC(){

    // const user = useContext(UserContext)
    // const channel = useContext(ChannelContext)
    return(
        <div>
            {/* {channel} */}
            <UserContext.Consumer>
                 {
                     user =>{
                         return(
                             <ChannelContext.Consumer>
                                 {
                                     channel =>{
                                        return <div>{user} {channel}</div>

                                     }
                                 }
                             </ChannelContext.Consumer>
                         )                      }
                 }
            </UserContext.Consumer>
        </div>
    )
}
export default ComponentC;