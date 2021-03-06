import Head from 'next/head'

import { BannerLanding, Layout } from '../components'
import { Values as Summary } from '../components/tiles'
import { VALUES } from '../components/Constants'

const Values = () => (
  <Layout>
    <Head>
      <title>{VALUES}</title>
      <meta name='description' content={`The ${VALUES} of Serra C Allgood`} />
    </Head>

    <BannerLanding header={VALUES} summary={Summary} />

    <div>
      <div id='main'>
        <section id='one' className='spotlights'>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h2>Authenticity</h2>
                </header>
                <p>
                  After more than 25 years denying my gender identity and sexuality, I refuse to be anything other than my <strong>authentic</strong> self in body and soul. I do not live for the sake of being loud; however, I accept that for anyone to be true to themselves, a little volume is going to be inevitable. Whether it's a new pair of fashionable glasses, long skirts, or visible tattoos and facial piercings, you'll find me easy to pick out of a crowd.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Transparency</h3>
                </header>
                <p>
                  To be authentic is nothing without being willing to allow others to know my entire self. <strong>Transparency</strong> does not imply indiscretion, though; bringing up an in-depth discussion of things like ethical non-monogamy or kink or rape culture in every context is inappropriate. My transparency is only such that if anyone cares and tries to look for <em>"the dirt"</em> on me, they'll indeed find it very easy to find.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Intentional Curiosity</h3>
                </header>
                <p>
                  Software and computer science are fields bounded in recent history yet change so fast that to call the profession a type of engineering is a misnomer. Whether it's the history of the development of little and big endian systems, experimental languages intended to supplant the C family, or even conventional cryptographic algorithms that hypothetically will confound the future of quantum computing, there will never not be something exciting, exotic, and intriguing to learn, and that's only within this discipline. Not just curiosity but <strong>intentional curiosity</strong> is an absolute necessity to grow professionally and as a person in this modern world.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </Layout>
)

export default Values
