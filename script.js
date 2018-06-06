console.clear();

class Chat extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            messages: [{
                who: 'them',
                text: 'Welcome'
            }]
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        const newMessages = [{
            who: 'me',
            text: event.target.message.value
        }];
        
        if (this.state.messages.length % 3 === 0) {
            newMessages.push({
                who: 'them',
                text: "That's pretty neat!"
            });
        }

        this.setState((previousState) => ({
            messages: previousState.messages.concat(newMessages)
        }), () => {            
            const messagesElement = document.querySelector('.messages');
            messagesElement.scrollTop = messagesElement.scrollHeight + 500;
        });
        
        event.target.reset();
    }
    
    render() {
        return (
            <div className="chat">
                <h1>senssense-chess chat</h1>
                <div className="messages">
                    {this.state.messages.map((message) => <div className={`message ${message.who}`}>{message.text}</div>)}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input name="message" placeholder="Send message" autoComplete="off"/>
                </form>
            </div>
        );
    }
}


ReactDOM.render(
    <Chat/>, 
    document.getElementById('app')
);