import { useEffect, useState } from 'react';
import friends from '../../path/to/friends.json'
import * as Component from './OurFriends.styled'

const OurFriends = () => {
    const [, setCurrentTime] = useState(new Date());
    const daysOfWeek = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"]
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
return(
    <Component.List>
        {friends.map(({id,title, url,address,imageUrl,addressUrl,email,phone, workDays,isOpen})=>{
           
             return(
                <Component.Item key={id}>
                    <Component.CardTitle><a href={url} target="_blank"
                  rel="noopener noreferrer">{title}</a></Component.CardTitle>
                    <Component.MainWrap>
                        <Component.WrapImage>
                            <Component.Image src={imageUrl} alt={title}/>
                        </Component.WrapImage>
                    <Component.TextWrap>
                        <div>
                        <Component.Text>Time</Component.Text>
                    {workDays ? 
                    <Component.Select name="days" id="days"> hgvghgvh
                        {workDays.map((day, index)=>{
                            const dayOfWeek = daysOfWeek[index];
                             return(
                                    <Component.Option key={index} value={day}>{dayOfWeek}  {day.from}- {day.to}  
                                    {day.isOpen === true ?  "" : "Closed"}</Component.Option>
                            
                              )
                        })}
                    </Component.Select> : <Component.Link>Day and night</Component.Link>}
                    </div>
                    
                    <div><Component.Text>Address</Component.Text>
                  {address ?  <Component.Link href={addressUrl} target="_blank"
                  rel="noopener noreferrer">
                    {address}
                    {/* {address.length > 32 ? address.substring(0, 28) + '...' : address} */}
                    </Component.Link> : <Component.Link>Only website</Component.Link>}</div>
                    
                  <div> <Component.Text>Email</Component.Text>
                   {email? <Component.Link href={`mailto:${email}`} target="_blank"
                  rel="noopener noreferrer">{email}</Component.Link> : <Component.Link href={url} target="_blank"
                  rel="noopener noreferrer">Only website</Component.Link>}</div>
                   
                  <div><Component.Text>Phone</Component.Text>
                  {phone? <Component.Link href={`tel:${phone}`}>{phone}</Component.Link>: <Component.Link href={`mailto:${email}`} target="_blank"
                  rel="noopener noreferrer">Email only</Component.Link>}
                  </div>
                    </Component.TextWrap>
                    </Component.MainWrap>
                </Component.Item>
             )
        })
           
            }
    </Component.List>
)
}

export default OurFriends