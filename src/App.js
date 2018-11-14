import React, { Component } from 'react';
import './index.css';
import { Helmet } from "react-helmet";
import {TwitterShareButton,TwitterIcon,FacebookShareButton,FacebookIcon,WhatsappShareButton,WhatsappIcon} from 'react-share';
class App extends Component {
  render() {
    const shareUrl = 'buzz.jpg';  
    const via = 'Rohan';
    const title = 'Twitter Image';
    const hashtags = ['Twitter'];
    return (
      <div className="App">
      				<Helmet>
					<meta name="description" content="1 person wants answer to this question. Be the first one to respond."
					      itemProp="description"
					/>
					<meta name="google-site-verification" content="5etYwSJdPvs73RVzF_Hb-YPow1mvMGynMVfCWgoLQuo" />
					<meta property="og:url" content={shareUrl} />
					<meta property="og:site_name" content="iTechs Information" />
					<meta property="og:image" content={shareUrl} itemProp="image" />
					<meta property="og:image:url" content={shareUrl} itemProp="image" />
					<meta property="og:image:width" content="700" />
					<meta property="og:image:height" content="400" />
					<meta property="og:title" content={`iTechs Article - ${title}`} itemProp="name" />
					<meta property="og:type" content="website" />
					<meta property="og:description" content="1 person wants answer to this question. Be the first one to respond." />
					<meta property="fb:app_id" content="128678167815456" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@site_username" />
          <meta name="twitter:title" content="Top 10 Things Ever" />
          <meta name="twitter:description" content="Up than 200 characters." />
          <meta name="twitter:creator" content="@creator_username" />
          <meta name="twitter:image" content="http://placekitten.com/250/250" />
          <meta name="twitter:domain" content="YourDomain.com" />
				</Helmet>
        <header className="App-header">
        <div className="">
          <img src="buzz.jpg"></img>
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
