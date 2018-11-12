import React, { Component } from 'react';
import './index.css';
import {TwitterShareButton,TwitterIcon,FacebookShareButton,FacebookIcon,WhatsappShareButton,WhatsappIcon} from 'react-share';
class App extends Component {
  render() {
    const shareUrl = 'http://www.tapawayapp.com/assets/images/share.png';
    const via = 'Rohan';
    const title = 'Twitter Image';
    const hashtags = ['Twitter'];
    return (
      <div className="App">
        <header className="App-header">
        <div className="">
          <img src="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg" className="img-rounded sizeof" alt="..."></img>
          <div className="sizeof">
              <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className="Demo__some-network__share-button">
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>

              <TwitterShareButton
                url={shareUrl}
                title={title}
                via={via}
                hashtags={hashtags}
                className="Demo__some-network__share-button">
                <TwitterIcon
                  size={32}
                  round />
              </TwitterShareButton>

              <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="Demo__some-network__share-button">
                <FacebookIcon
                  size={32}
                  round />
              </FacebookShareButton>
          </div>
        </div>
          <div className="Demo__some-network">

          <div className="Demo__some-network__share-count">
            &nbsp;
          </div>
        </div>
        <div className="Demo__some-network">
        

          <div className="Demo__some-network__share-count">
            &nbsp;
          </div>
        </div>

         <div className="Demo__some-network">
          

          <div className="Demo__some-network__share-count">
            &nbsp;
          </div>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
