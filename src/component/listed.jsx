import React from 'react'



export const MyDatabase = ({database})=>{


   let data =  database.map(news =>
      
        <div className="col-sm-12  col-md-6 col-lg-3" key={news.id}>
        <div className="product-image-wrapper border-primary">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src={news.image} alt="Image Loading.........." />
              <h2 className="text-primary">
              ₵{news.price}
              </h2>
              <p className="text-primary">
                {news.name}
              </p>
             
            </div>
          </div>
          <div className="choose">
            <ul className="nav nav-pills ">
              <li>
                <a  className="text-primary">
                  <i className="fa fa-plus-square text-primary"></i>
                 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    );
    return data;
}