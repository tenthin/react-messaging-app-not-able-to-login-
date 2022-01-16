const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avater"
                    style={{backgroundImage: `url(${message?.sender?.avater})`}}
                />
            )}
            
            {message?.attachments?.length>0
                    ? (
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{float:'right'}}
                    />
                    ):
                    (
                        <div className="message" style={{float:'right', marginRight: '18px', color:'white', backgroundColor:'#3B2A50'}}>
                            {message.text}
                        </div>
                    )      
            }
        </div>
    ) 

}

export default TheirMessage;