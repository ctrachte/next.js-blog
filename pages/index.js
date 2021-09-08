import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Caleb Trachte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hello Internet Traveler!
        </h1>

        <p className="description">
          Get to know me (Caleb Trachte) by browsing some of my projects, ventures, open-source code, and more:
        </p>

        <div className="grid">
          <a
            href="https://www.npmjs.com/package/moment-datepicker-js"
            className="card">
            <h3>Moment Datepicker </h3>
            <img src="/npm-logo.png" height="150" width="300" alt="npm logo" />
            <p>Easily adaptable pure JS driven date range picker, with extensive customizable features.</p>
          </a>

          <a href="https://github.com/ctrachte"
            className="card">
            <img src="/github-logo.png" height="150" width="300" alt="Github logo" />
            <p>Learn about side projects I've been working on, demos and tutorials I've taught, and more!</p>
          </a>

          <a
            href="https://www.meetup.com/javascript-conway/"
            className="card"
          >
            <h3>Central Arkansas JavaScript

            </h3>
            <img src="/js-AR-official-logo.jpg" height="150" width="175" alt="Central Arkansas JavaScript logo" />

            <p>Learn more about the latest JavaScript frameworks, utilities, and tricks through our meetup group! Co-founded by Caleb Trachte, and two other local senior developers.</p>
          </a>

          <a
            href="https://www.airbnb.com/h/trachtenhaus"
            className="card"
          >
            <h3>Airbnb SuperHost!</h3>
            <img src="/airbnb-logo-red.jpg" height="150" width="250" alt="Airbnb logo" />
            <p>
              Caleb Trachte and his wife host guests at their full-service bed and breakfast in Cabot, AR!
            </p>
          </a>
          <a
            href="https://www.facebook.com/SunfireSauce"
            className="card"
          >
            <h3>Sunfire Hot Sauce</h3>
            <img src="/Sunfire-logo.jpg" height="250" width="250" alt="Sunfire logo" />
            <p>
            Handcrafted, small-batch hot sauce made by Caleb and Amy Trachte in Cabot, Arkansas from fresh garden-grown ingredients. We will be posting current batches so follow us on Facebook and Instagram!
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
