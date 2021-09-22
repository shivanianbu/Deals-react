import React from 'react'
import "./search.scss"
const Search = () => {
    return (
    <section className="search-section">
        <div className="container">
            <div className="row">
            <div className="column-4">
            <div className="heading-space"> 
            <div className="signup-head">
                <h6>Sign up for our newsletter</h6>
             </div>
             </div>
            </div>
                    <div className="column-6">
                    <div className="heading-space"> 
                    <div className="search">
                    <form>
                            <input type="search" name="search" class="search-bar" placeholder="Enter your Email Address" />
                            <button className="search-btn" type="submit">SUBSCRIBE NOW</button>
                        </form>
                    </div> 
                    </div>
</div>
        </div>
        </div>
    </section>
    )
}

export default Search
