import React, { useEffect, useState } from 'react'
// import {isImageURL} from 'image-url-validator'; 
import './css/card.css'
async function checkImage(image){
  const response =await fetch(image)
  if(response.status===200) return true;
  return false
}
const Card = ({fName,lName,signal,photo,image_source}) => {
  const [image,setImage] = useState('');
  useEffect(()=>{
    photo.map((p)=>{
      switch(p.source){
        case 'google':return checkImage(p.url) && setImage(p.url);
        
        case 'facebook':return checkImage(p.url) && setImage(p.url);
        
        case 'twitter':return checkImage(p.url) && setImage(p.url);
        
        case 'linkedin':checkImage(p.url) && setImage(p.url);
        return
        case 'office365':checkImage(p.url) && setImage(p.url);
        return
        default :setImage('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAhwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADQQAAICAQEGBAMHBAMAAAAAAAABAgMEEQUSITFBURMiMnFSgaEzQmGRscHRFDRy4RVTgv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7UAAAAAAxnONcHOclGK5tldkbU+7jx/8AUv4AszVLIoj6rYL5lDZdZa9bJyl7vkYAX/8AWY//AGxM43VT9NkX8znQB0wOfqyrqvRN6dnxRY420oTe7ctx9+gE8Hi4rVcUegAAAAAAAADVkXwx63Ob9kubZnOcYQlKT0SWrZQZV8sm1zfBL0rsgPcjIsyJ71j4LklyRpAAG6rFvuWtdbce74InYGCklbfHVvio/uyyApP+NydNdIe28abaLafta5RXfp+Z0J40mmmtU+aYHNAn7QwlTrbSvJ1j8P8AogAS8PMnRLdlrKvqn0LmucbIKcHqmc2TNn5Tos3JPyS4ewF0AAAAAAACs2vf6aIvTXzS/ZFYjZk2eNkWWdHLh7dDWAJOBUrslKS8q4tEYn7G08az/H9wLcAAAAB5JKUXGS1TWjRzt1bqunW/uvQ6Motpf31vy/RARgABd7Nv8Wjdb80OBLKXZdm5kqPSS0LoAAABryJblFkuqi2jYacz+0u/wYHPrkAuQAEnZ1vhZMdeClwZGPYxnLVxjJpc2lyA6UFfgZynFV2vSS5N9SwAAHjaSbbSS6sBJqMXKT0SWrZzt1jtunY1pvPUl7QzldrVTxh1l8RClGUHuzi4vs1oB4AANlMt26Eu0jojmo+pe50i5AegAAY2x36px7xaMgBzIN+dV4OXZHTSLe8vmaUtWkubAmbPxFe3OxPcjw07suIpRjuxSUV0XIworVVUYLojYBXZezVN7+O1GXWL5P8Agiq3MxOE99Jd1qi7AFK9p5DWmsfyMXHMzGtVOUe74JF58kAIWHgQoanNqVnTsiXZCNsHCyKlHs0ZAChzcb+lt0WrhLjFv9COXm0avFxJ/FFby+RRoDbjx376495I6Ep9k1OV7npwgvqXAAAAAABA2rj+LUrIrzV/VFbibqya3N6R3joSk2hiPHs3oJ+FLl+D7AXYKvAzt1Kq5/hGTLRctQAAAAAAAYzlGEXKbSS6tgLHGMJSm9IpcTm+uiJefmvIe5Xqq1xS09Ru2Zib0lfYuC9KfX8QJuDR4FCi/U+MiQAAAAAAADycYzg4TScXwaZ6AKXMwJ0tyq1nX9YmGNm2UaLXeh2ZekXJwKb25Jbk396P8AeU7Qos4N7j7MkxnGfpkn7Mp7dmZEHrHdmvwej+pHlTdD1VWR94sDojCdtdfrnGPuznvO+Hm+plDHvm/JTNrvo0BaXbTqh9knY+/JFZkZFuQ07ZdeEVyXyJNWzLp/aOMF+bLDGw6cfjGOs/ifMCFhbOctJ5C0XwdX7lr0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z')
      }
    }
    )
  },[])
  return (
    <div className='wrapper'>
      <div className='data-card'>
        <div className='main-data'>
            <div className='profile'>
                <img className='image' src={image}/>          
                <h3 className='text'>{fName} {lName}</h3>
            </div>
            <div className='signal-box'>
                <button style={{backgroundColor:signal<3?'blue':signal=3?'yellow':signal>3?'green':0 ,color:signal<3?'white':'black'}} className='btn btn-primary' disabled>{signal>3?'GOOD':signal<3?'OK':'SOLID'}</button>
            </div>
        </div>
        {/* <div className='vector'></div> */}
    </div>
    </div>
  )
}

export default Card