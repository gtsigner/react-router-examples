import React from "react";
import { Link } from "react-router-dom";
class HomePage extends React.Component {
  // implement this class
  render() {
    return (
      <div>
        <h1>My first assignment - YiyunJia</h1>
        <hr />
        <h2>Articles</h2>
        <div className="titlelist">
          <ol>
            <li>
              <Link to="/post1">8 Experiments in Motivation</Link>
            </li>
            <li>
              <Link to="/post2">A Mindful Shift of Focus</Link>
            </li>
            <li>
              <Link to="/post3">
                How to Develop an Awesome Sense of Direction
              </Link>
            </li>
            <li>
              <Link to="/post4">Training to Be a Good Writer</Link>
            </li>
            <li>
              <Link to="/post5">What Productivity Systems Won't Solve</Link>
            </li>
          </ol>
        </div>
        <br />
        <br />
        <hr />
        <h4>Learn more</h4>
      </div>
    );
  }
}

class AboutUsPage extends React.Component {
  // implement this class
  constructor(props){
    super(props);
    this.state={
      path:'/',
    };
  }
  setRoute(route){
    this.setState({path:route})
  }

  render(){
    if(this.state.path==='/'){
      return this.renderHome();
    }
    if(this.state.path==='/about'){
      return this.renderAbout();
    }

  }
  renderAbout(){
    return <div>About</div>;
  }
  renderHome() {
    return <ContactHome route={this.setRoute.bind(this)} title="Demo"></ContactHome>
  }
}
class ContactHome extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props);
     return (
      <div className="about-page">
        <h1>My first assignment - YiyunJia </h1>
        {this.props.title}
        <hr />
        <h2>About Us</h2>
        <button onClick={()=>{
          //this.setState({path:'/about'});
          this.props.route('/about');
        }}>22</button>
        <div className="aboutlist">
          <ul>
            <li> Class INFO 253 Web Architecture</li>
            <li> Teacher kayashaolu</li>
            <li> Name Yiyun Jia</li>
            <li> Tel. 999-888-1234</li>
            <li> Email 3928dshiuw@mail.com</li>
            <li>
              <strong>UC Berkeley</strong>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class ContactUsPage extends React.Component {
  // implement this class
  constructor(props) {
    super(props);
    const messages = this.getMessages();
    this.state = {
      messages: messages,
      name: "",
      subject: "",
      message: ""
    };
  }
  clearMessages() {
    localStorage.removeItem("messages");
  }

  pushMessage(message) {
    const oldMessage = this.getMessages();
    oldMessage.push({
      name: message.name,
      subject: message.subject,
      message: message.message
    });
    localStorage.setItem("messages", JSON.stringify(oldMessage));
  }

  getMessages() {
    let messages = localStorage.getItem("messages");
    if (!messages) {
      return [];
    }
    return JSON.parse(messages);
  }

  submitMessage() {
    if (
      this.state.name === "" ||
      this.state.subject === "" ||
      this.state.message === ""
    ) {
      return false;
    }
    this.pushMessage(this.state);
    const messages = this.getMessages();
    this.setState({
      messages: messages
    });
    return false;
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }
  hanldeSubj(e) {
    this.setState({ subject: e.target.value });
  }
  hanldeMsg(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return this.renderForm();
  }

  renderItems() {
    const eles = [];
    this.state.messages.forEach((item, index) => {
      eles.push(
        <div className="post-item" key={index}>
          <span>
            Your name: <span>{item.name}</span>
          </span>
          <span>
            Your subject: <span>{item.subject}</span>
          </span>
          <span>
            Your message: <span>{item.message}</span>
          </span>
        </div>
      );
    });
    return eles;
  }

  renderForm() {
    console.log(this.state.messages);
    return (
      <div>
        <button
          onClick={() => {
            this.clearMessages();
          }}
        >
          clear
        </button>

        <h1>My first assignment - YiyunJia</h1>
        <hr />
        <h2>Contact Us</h2>
        {this.renderItems()}
        <form
          id="form1"
          name="form1"
          method="post"
          action=""
          onSubmit={() => {
            return false;
          }}
        >
          <table width="800" border="0" cellPadding="1" cellSpacing="1">
            <tbody>
              <tr>
                <td>
                  <div align="center" id="sentmessage" />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <div align="center">: ) Fill the form to contact us</div>
                </td>
              </tr>

              <tr>
                <td width="250">
                  <div align="right">Name: </div>
                </td>
                <td width="250">
                  <div align="center">
                    <input
                      type="text"
                      onChange={this.handleName.bind(this)}
                      placeholder="input your name"
                      value={this.state.name}
                    />
                  </div>
                </td>
                <td>
                  {this.state.name === "" ? (
                    <font color="red">Please don't leave subject empty!</font>
                  ) : (
                    ""
                  )}
                </td>
              </tr>

              <tr>
                <td width="250">
                  <div align="right">Subject: </div>
                </td>
                <td width="250">
                  <div align="center">
                    <label>
                      <input
                        type="text"
                        name="subject"
                        onChange={this.hanldeSubj.bind(this)}
                        placeholder="input your subject"
                        value={this.state.subject}
                      />
                    </label>
                  </div>
                </td>
                <td>
                  {this.state.subject === "" ? (
                    <font color="red">Please don't leave subject empty!</font>
                  ) : (
                    ""
                  )}
                </td>
              </tr>

              <tr>
                <td width="250">
                  <div align="right">Message: </div>
                </td>
                <td width="250">
                  <div align="center">
                    <label>
                      <input
                        type="text"
                        name="message"
                        onChange={this.hanldeMsg.bind(this)}
                        placeholder="input your message"
                        value={this.state.message}
                      />
                    </label>
                  </div>
                </td>
                <td>
                  {this.state.message === "" ? (
                    <font color="red">Please don't leave message empty!</font>
                  ) : (
                    ""
                  )}
                </td>
              </tr>

              <tr>
                <td>
                  <div align="right">
                    <label>
                      <input type="reset" name="Submit2" value="Reset" />
                    </label>
                  </div>
                </td>
                <td>
                  <div align="center">
                    <label>
                      <button
                        type="button"
                        name="Submit"
                        onClick={this.submitMessage.bind(this)}
                      >
                        Submit
                      </button>
                    </label>
                  </div>
                </td>
                <td>
                  <div align="center" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
      </div>
    );
  }
}

class MessagePage extends React.Component {
  render() {
    return <div />;
  }
}

export { HomePage, AboutUsPage, ContactUsPage, MessagePage };
