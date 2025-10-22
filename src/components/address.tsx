const Address = () => {
  return (
    <ul>
      <li>
        <p className="font-bold" aria-hidden>
          Cellregen®
        </p>
        <strong>UK</strong>
        <address>
          <p>45 Albemarle Street, London W1S 4JL</p>
          <a href="mailto:info@cellregen.co.uk">info@cellregen.co.uk</a>
        </address>
      </li>
      <li>
        <strong>USA</strong>
        <address>
          <p>407 Lincoln Road Suite 8N-283,</p>
          <p>Miami Beach, FL 33139, USA</p>
          <a href="mailto:info@cellregen.us">info@cellregen.us</a>
        </address>
      </li>
      <li>
        <strong>EU</strong>
        <address>
          <p>Grosse Gallusstrasse 16-18, Frankfurt, 60312, Germany.</p>
          <a href="mailto:info@cellregen.eu">info@cellregen.eu</a>
        </address>
      </li>
    </ul>
  );
};

export default Address;
