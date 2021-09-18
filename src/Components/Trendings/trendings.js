import React from 'react';



const Trendings = (props) => {
  const { data, onAdd } = props;

  return (
    <section className="trending">
      <div className="container">
        <div className="offer-content">
          <h6 className="topic">See What's Trending</h6>
          <div class="row">
            <div class="cards">

              {
                data.map((item) =>

                  <article className="card">
                    <div className="card-box">
                      <img src={item.image} alt="trendings" className="img" />

                      <div className="text">
                        <div className="name">{item.title}</div>
                        <h6 className="topic">${item.price}</h6>
                      </div>
                    </div>
                    <div className="product-cart">
                      <a className="search-cart"></a>
                      <a className="bag-btn"><i className="icon-shoppingcart" onClick={() => onAdd(item)} ></i></a>
                      <a className="analytics"></a>
                    </div>
                  </article>
                )
              }

            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Trendings


