import React from "react";

const DownloadCVButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Curriculum%20Vitae_Kyla%20Ronquillo.pdf"; // Change this to the path of your CV file in the public folder
    link.download = "Curriculum Vitae_Kyla Ronquillo.pdf"; // Specify the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownload}
      className="dl-cv mt-10 bg-[#6EA0BA] text-white py-2 px-4 rounded-lg drop-shadow-xl hover:bg-white hover:text-[#6EA0BA] hover:border-[#6EA0BA] border-2 transition-all">
      Download CV
    </button>
  );
};

export default DownloadCVButton;
