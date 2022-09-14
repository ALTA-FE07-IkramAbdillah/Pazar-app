import React from "react";
import Card from "react-bootstrap/Card";

const CardComponent = ({ id, name, price, photo, description, detail }) => {
  return (
    <>
      <Card className="my-3" onClick={detail} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={photo} alt="gambar.jpg" />
        <Card.Body>
          <Card.Title className="display-7 fw-bolder">{name}</Card.Title>
          <Card.Text>{description}{photo}</Card.Text>
          <Card.Text className="fw-bolder">IDR.{price}</Card.Text>
        </Card.Body>
        <div className="mx-auto mb-3">
          <button className="btn btn-outline-dark w-150 " onClick={id}>
            Order
          </button>
        </div>
      </Card>
    </>
  );

  // return (
  //   <>
  //     <div className=" row mb-4">
  //       <div className="card col-md-3 h-100 text-center p-4" key={id}>
  //         <img src={photo ? photo : "https://via.placeholder.com/500x750.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=No+image"} alt="Gambar" className="card-img-top" height="250px" />
  //         <div className="card-body">
  //           <h5 className="card-title mb-0">{name.substring(0, 19)}</h5>
  //           <p className="Card-text">RP{price}</p>
  //           <button className="btn btn-outline-dark">Order</button>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default CardComponent;
