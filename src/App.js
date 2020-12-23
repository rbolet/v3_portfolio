import "./App.css";

function App() {
  return (
    <>
      <div id="header"></div>
      <div class="page-container">
        <div class="before-fold">
          <div class="row">
            <div class="title-container">
              <div class="title">
                <p>
                  Rapha
                  <br />
                  Bolet
                </p>
                <p>
                  Developer<span id="title-cursor">_</span>
                </p>
              </div>
            </div>
            <div class="chatbot-container">
              <div class="chatbot-border">
                <div class="chatbot-messages-container">
                  <div class="sent message">
                    <p>
                      Message Sent is a super duper long message that fills the container so we
                      probably should add some margin
                    </p>
                  </div>
                  <div class="received message">
                    <p>
                      Message Received is a super duper long message that fills the container so we
                      probably should add some margin
                    </p>
                  </div>
                </div>
              </div>
              <div class="chatbot-border chatbot-input-area">
                <div class="thinking">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
                <form>
                  <input class="chatbot-text-input" />
                  <button>
                    <i class="far fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
