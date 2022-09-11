import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetail = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setDetail(await response.json());
      setLoading(false);
    };
    getDetail();
  }, []);

  const Loading = () => {
    <>
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
      <div className="col-md-6">
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={50} width={100} />
        <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
      </div>
    </>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={detail.image} alt={detail.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{detail.category}</h4>
          <h1 className="display-5">{detail.title}</h1>
          <p className="lead fw-bolder">
            Rating {detail.rating && detail.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {detail.price}</h3>
          <p className="lead">{detail.description}</p>
          <button className="btn btn-outline-dark px-3 py-2">Add to Cart</button>
          <NavLink to="/cart" className="btn btn-dark ms-4 px-3 py-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Detail;
