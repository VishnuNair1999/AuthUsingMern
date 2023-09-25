import React, { useState } from 'react';
import { Chat } from '@progress/kendo-react-conversational-ui';
import {marked} from 'marked';


const MessageTemplate = (props) => {
  let message = props.item;
  let parser = marked.setOptions({});
  let parsedMessage = parser.parse(message.text);
  let htmlToInsert = {
    __html: parsedMessage,
  };
  return (
    <div className="k-chat-bubble">
      <div dangerouslySetInnerHTML={htmlToInsert} />
    </div>
  );
};

const user = {
  id: 1,
};

const bot = {
  id: 0,
};

const initialMessages = [
  {
    author: bot,
    text: 'enter message here',
  },
];

const App = () => {
  const [messages, setMessages] = useState(initialMessages);

  const addNewMessage = (event) => {
    setMessages([...messages, event.message]);
  };

  return (
    <div>
      <Chat
        user={user}
        messages={messages}
        onMessageSend={addNewMessage}
        width={400}
        messageTemplate={MessageTemplate}
        placeholder="Type a message..."
      />
    </div>
  );
};

export default App;
