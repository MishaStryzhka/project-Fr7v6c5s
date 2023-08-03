import friends from '../../path/to/friends.json'
import { CardTitle, Image, Item, Link, List, MainWrap, Text, TextTime, TextWrap, WrapImage } from './OurFriends.styled';
import TimeList from './TimeList';
// import React from 'react';
import ImagePlaceholder from '../../images/OurFriendsPageImages/images_placeholder.png'


const OurFriends = () => {
   

return(

    <List>
     {friends.map(({id,title, url,address,imageUrl,addressUrl,email,phone, workDays})=>{
       
             return(
             
                <Item key={id}>
                    <CardTitle><a href={url} target="_blank"
                  rel="noopener noreferrer">{title}</a></CardTitle>
                 
                    <MainWrap>
                        <WrapImage>
                           {imageUrl?<Image src={imageUrl} alt={title}/>:<Image src={ImagePlaceholder} alt="Placeholder"/>} 
                        </WrapImage>
                    <TextWrap>
                        <div>
                        <Text>Time</Text>
                    {workDays ? 
                    <TimeList workDays={workDays}/>
                     : <TextTime>Day and night</TextTime>}
                    </div>
                    
                    <div><Text>Address</Text>
                  {address ?  <Link href={addressUrl} target="_blank"
                  rel="noopener noreferrer">
                    {address}
                    </Link> : <Link>Only website</Link>}</div>
                    
                  <div> <Text>Email</Text>
                   {email? <Link href={`mailto:${email}`} target="_blank"
                  rel="noopener noreferrer">{email}</Link> : <Link href={url} target="_blank"
                  rel="noopener noreferrer">Only website</Link>}</div>
                   
                  <div><Text>Phone</Text>
                  {phone? <Link href={`tel:${phone}`}>{phone}</Link>: <Link href={`mailto:${email}`} target="_blank"
                  rel="noopener noreferrer">Email only</Link>}
                  </div>
                    </TextWrap>
                    </MainWrap>
                </Item>
             )
        })
           
            }
    </List>

)
}

export default OurFriends