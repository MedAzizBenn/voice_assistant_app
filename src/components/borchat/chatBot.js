import React, { useState, useEffect,useRef } from 'react';

import './../chat/chat.css';

import { FaRobot } from "react-icons/fa";
import { BiMicrophone } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const ChatBox=(props)=> {
    const [botMessages, setBotMessages] = useState(['Hello how can i help you!']);
    const [userMessages, setUserMessages] = useState([]);
    const [pages,setPages]=useState(["dashboard","profile","analytics"]);
    const [navigationCmd,setNavigationCmd]=useState(["open","navigate","go","show"]);
    const divRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
      console.log(userMessages);
      divRef.current.scrollTop = divRef.current.scrollHeight;

      }, [userMessages,botMessages]);

      useEffect(()=>{

      },[userMessages,botMessages])
    let[message,setMessage] =useState({receiverID:'',
        messageText:'',
        botMessages:['Hello how can i help you!'],
        userMessages:['hello'],
        user:{},
        isAuthenticated:true
      });
      
    

    const handleClick=async(e)=>{
        const code=e.keyCode || e.which;
        if(code==13)
        {
            console.log(message);
           // userMessage(message);
            setMessage("");

        }
    }

    const handleChange=event=>
    {
        setMessage({ messageText: event.target.value });


    }
  /*  useEffect(() => {
        sendMessage()
      });*/

    const sendMessage = () => {
            console.log("Message sent successfully:", message.messageText);
            let words=message.messageText.split(" ").filter(item => item.trim());
            words.map((word)=>
            {
              console.log("/","aziz");
            })
          /*  words.map((word)=>{
              const navigateIndex = navigationCmd.findIndex(cmd=> cmd === word.toLowerCase());
              if (navigateIndex >= 0 && navigateIndex < words.length - 1) {
                const pageIndex = pages.findIndex(p=>p === word.toLowerCase());
                console.log(pageIndex);
                if (pageIndex >= 0 && pageIndex < words.length ) {
                  console.log("command :",cmd," destination: ",pages[pageIndex]);

                 }
              }
            })*/
            navigationCmd.map((cmd)=>
            {
              const navigateIndex = words.findIndex(word => word.toLowerCase() === cmd);
              if (navigateIndex >= 0 && navigateIndex < words.length - 1) {
                pages.map((dest)=>{
                  console.log(dest);
                  const pageIndex = words.findIndex(word => word.toLowerCase() === dest);
                  console.log(pageIndex);
                  if (pageIndex >= 0 && pageIndex < words.length ) {
                    console.log("command :",cmd," destination:",dest);
                    console.log("hello",dest.trim());
                    executeCommand(cmd,dest);

                   }
                })
            }});
         //   const newMsg = [...message.userMessages,message.messageText];
            setUserMessages([...userMessages,message.messageText ]);

            console.log("After:",userMessages );
            
                userMessages.map((data, index) => {
                  console.log(data);
                });
              
            };

    const handleSubmit=event=>
    {
        event.preventDefault();
        sendMessage();
        event.target.reset();
    }
    const executeCommand=(command,object)=>
    {
      const res = object.replace(/ /g, '')

      console.log('aziz',res.trim(),"zaiz");
      navigate(`/${object}`);

    }
 
  return (
    <div className="chatWindow" >
    <div className="chatHeader">
    <FaRobot size={30} className="botIcon"/> <label className="chatTitle">Trading Bot</label>
    </div>
    <div className='chat' ref={divRef}>
    <ul className="botChat" id="chatList" ref={divRef}>
    {botMessages?.map((data, index) => (    
            <li key={index}>
             <div className="msg">
            <div className="message"> {data}</div>
          </div></li>
      ))}
    </ul>
    <ul className="userChat" id="chatList">
    { userMessages?.map((data, index) => (    
            <li key={index}>
             <div className="msg">
            <div className="message"> {data}</div>
          </div>
          </li>
      ))}
    </ul>
    </div>
   
    <div className="chatInputWrapper">
      <form onSubmit={handleSubmit}>
        <div className="inputMsg">
        <input
          className="textarea input"
          type="text"
          placeholder="Enter your message..."
          onChange={handleChange}
        />
        <BiMicrophone size={30}/>
        </div>
      
      </form>
    </div>
  </div>
  );
}

export default ChatBox;