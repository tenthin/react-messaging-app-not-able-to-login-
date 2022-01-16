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
        </div>
    ) 

}

export default TheirMessage;