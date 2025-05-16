import "./RegistryPage.scss";

function RegistryPage() {
  return (
    <div className="main-container">
      <div className="main-desc">
        Your presence at our wedding is the greatest gift we could ask for.
        However, if you’d like to contribute to our future together, a monetary
        gift would be appreciated.
      </div>
      <img src="/bdo.jpg" className="bank-qr" />
      <img src="/westpac.png" className="bank-qr" />
    </div>
  );
}

export default RegistryPage;
