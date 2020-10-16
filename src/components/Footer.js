import React from 'react'
import About from './About'

const Footer = () => {
  return (
    <div>

      <div className="footer">
        <div className="About">
          <h1>About</h1>
        </div>
        <About/>
        <br/>
        <hr/>
        <div>
          <ul>
            <li>Characters: 63</li>
            <li>Episodes: 62</li>
            <li>Quotes: 70</li>
            <li>Death Count: 271</li>
          </ul>
          <hr/>
        </div>
        <div className="copyright">
          <h4>Copyright</h4>
          <p>I do not own the rights to any information or images provided in this site.
            Breaking Bad was created by Vince Gilligan, and originally aired on AMC. 
            The majority of this data was collected  from <a href="https://breakingbadapi.com/">breakingbadapi.com</a>.
            This is just a fun project. I do not intend to misuse any information. I do not intend to use this for profits of any kind.</p>
            <h4>Github</h4>
            <a href="https://github.com/lalitsawantt/BreakingBad">The Breaking Bad project</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
