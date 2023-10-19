import textimage from "../assets/illustration-grow-together.svg";
import "../styles/Section.css";
import anotherimage from "../assets/illustration-flowing-conversation.svg";
import belowimage from "../assets/illustration-your-users.svg"
const Section = () => {
  return (
    <section>
      <div className="row growsection">
        <div className="col-md-6 textonly ">
          <h4>Grow Together</h4>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>

        <div className="col-md-6 img">
          <img className="textimg" src={textimage} alt="Grow together" />
        </div>
      </div>
      <div className="row anotherimg">
        <div className="col-md-6 img">
          <img className="textimg" src={anotherimage} alt="Grow together" />
        </div>
        <div className="col-md-6 textonly">
          <h4>Flowing Conversations</h4>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </div>
      <div className="row belowimg">
      <div className="col-md-6 textonly">
          <h4>Your Users</h4>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <div className="col-md-6 img">
          <img className="textimg" src={belowimage} alt="Grow together" />
        </div>
      </div>
    </section>
  );
};

export default Section;
