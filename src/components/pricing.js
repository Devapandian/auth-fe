import React from "react";
import Header from "./Header";

const pricing = () => {
  const planContents = [
    {
      header: "Free",
      price: 0,
      features: [
        "10 users included",
        "2 GB of storage",
        "Email support",
        "Help center access"
      ],
      buttonLabel: "Sign up for free",
      outline: true
    },
    {
      header: "Pro",
      price: 15,
      features: [
        "20 users included",
        "10 GB of storage",
        "Priority email support",
        "Help center access"
      ],
      buttonLabel: "Get started",
      outline: false
    },
    {
      header: "Enterprise",
      price: 29,
      features: [
        "30 users included",
        "15 GB storage",
        "Phone and email support",
        "Help center access"
      ],
      buttonLabel: "Contact us",
      outline: false
    }
  ];

  const pricing = ({ header, price, features, buttonLabel, outline }) => {
    return (
        <>
        <div>
      <div className="card mb-4 shadow-sm">

        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{header}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            {`$${price}`}
            <small className="text-muted">/ month</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            {features?.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button
            className={`btn btn-lg btn-block ${
              outline ? "btn-outline-primary" : "btn-primary"
            }`}
            type="button"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
      </div>
      </>
    );
  };

  return (
    <div>
        <Header/>
    <div className="container">
      <div className="row">
        {planContents.map((plan, index) => (
          <div className="col-md-4" key={index}>
            {pricing({
              header: plan.header,
              price: plan.price,
              features: plan.features,
              buttonLabel: plan.buttonLabel,
              outline: plan.outline
            })}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default pricing;
