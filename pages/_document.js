import Document, { Html, Head, Main, NextScript } from 'next/document';

const gtag = 'https://www.googletagmanager.com/gtag/js?id=G-MWPE7RF22E';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script async src={gtag} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'G-MWPE7RF22E');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            dangerouslySetInnerHTML={{
              __html: ` var _dcq = _dcq || [];
                        var _dcs = _dcs || {};
                        _dcs.account = '9032744';
                      
                        (function() {
                          var dc = document.createElement('script');
                          dc.type = 'text/javascript'; dc.async = true;
                          dc.src = '//tag.getdrip.com/9032744.js';
                          var s = document.getElementsByTagName('script')[0];
                          s.parentNode.insertBefore(dc, s);
                        })();`,
            }}
          />
        </body>
      </Html>
    );
  }
}
