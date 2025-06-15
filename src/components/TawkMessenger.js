import { useEffect } from "react";

const TawkMessenger = () => {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/683e3072241fe7190a7f7e30/1ispeqgtv";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      document.head.appendChild(s1);
    })();
  }, []);

  return null;
};

export default TawkMessenger;

