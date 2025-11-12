import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import SimpleEnquiryForm from "@/components/SimpleEnquiryForm";

const EnquiryButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 bottom-4 z-40 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-4 rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-110 active:scale-95 group md:right-8 md:bottom-20 md:p-5"
        aria-label="Open enquiry form"
        style={{
          boxShadow: "0 4px 20px rgba(234, 179, 8, 0.5), 0 0 0 0 rgba(234, 179, 8, 0.7)",
          animation: "pulse-glow 2s ease-in-out infinite"
        }}
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce shadow-lg">
          !
        </span>
        <span className="absolute -bottom-12 -right-4 bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          Want a Brochure or Site Visit?
        </span>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md animate-zoom-in max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Quick Enquiry</DialogTitle>
            <DialogDescription>
              Fill out the form below and our team will contact you soon at sales@aaraamproperties.com
            </DialogDescription>
          </DialogHeader>
          <SimpleEnquiryForm onSuccess={() => setTimeout(() => setIsOpen(false), 2000)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EnquiryButton;

