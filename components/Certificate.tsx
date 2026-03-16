import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CertificateGenerator = () => {
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const downloadCertificate = () => {
    const input = document.getElementById('certificate-template');
    if (input) {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape format
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${userName}_Synapse_Certificate.pdf`);
      });
    }
  };

  return (
    <div className="p-10 text-center">
      <button 
        onClick={() => setShowModal(true)}
        className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full font-bold transition shadow-lg"
      >
        Claim Your Certificate 🎓
      </button>

      {/* Name Input Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 w-96">
            <h2 className="text-xl font-bold mb-4">Enter Your Full Name</h2>
            <input 
              type="text" 
              className="w-full bg-black border border-gray-700 p-3 rounded-lg mb-6 outline-none focus:border-blue-500"
              placeholder="e.g. John Doe"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="flex gap-4">
              <button onClick={downloadCertificate} className="flex-1 bg-blue-600 py-2 rounded-lg font-bold">Download</button>
              <button onClick={() => setShowModal(false)} className="flex-1 bg-gray-800 py-2 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Hidden Certificate Template for PDF Generation */}
      <div className="absolute left-[-9999px]">
        <div id="certificate-template" className="w-[1000px] h-[700px] bg-[#050505] text-white p-12 border-[15px] border-[#1e3a8a] relative flex flex-col items-center justify-center">
          
          <div className="text-blue-500 text-3xl font-black mb-10 tracking-widest">SYNAPSE ACADEMY</div>
          
          <h1 className="text-6xl font-serif mb-4 italic text-gray-200">Certificate of Completion</h1>
          <p className="text-xl text-gray-400 mb-8 font-light tracking-wide">This is to officially recognize the excellence of</p>
          
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-8">
            {userName || "Your Name"}
          </h2>
          
          <p className="max-w-2xl text-center text-gray-400 leading-relaxed text-lg italic">
            "For demonstrating exceptional proficiency in advanced programming architectures and successfully mastering the extreme-level curriculum."
          </p>

          <div className="mt-16 w-full flex justify-around items-end">
            <div className="text-center">
              {/* Stylish Digital Signature */}
              <p className="text-3xl font-['Cursive'] text-blue-400 mb-1" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Sayan Mahata
              </p>
              <div className="w-48 h-[1px] bg-gray-700 mx-auto mb-2"></div>
              <p className="text-sm font-mono text-gray-500 uppercase tracking-tighter">Director & Lead Architect</p>
            </div>
            
            <div className="w-24 h-24 bg-white p-1 rounded-sm shadow-xl">
               <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=verify_${userName}`} alt="QR" />
            </div>
          </div>

          {/* Hologram Badge */}
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-blue-500/30 rounded-full flex items-center justify-center opacity-40">
            <div className="text-[8px] font-bold text-center leading-none">OFFICIAL<br/>CERTIFIED<br/>2026</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateGenerator;
      
