import React from "react";

const DownloadCVButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Kyla_Ronquillo_Curriculum_Vitae.pdf"; 
link.download = "Kyla_Ronquillo_Curriculum_Vitae.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownload}
      className="dl-cv mt-10  text-grey-600 py-2 px-4 border-black hover:bg-white hover:text-[#6EA0BA] hover:border-[#6EA0BA] border-2 transition-all">
      Download CV
    </button>
  );
};

export default DownloadCVButton;
