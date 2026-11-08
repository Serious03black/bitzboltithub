
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
}: PageHeaderProps) => {
  return (
    <div 
      className="relative bg-[#050C1E] py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 12, 30, 0.88), rgba(10, 30, 47, 0.92)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#050C1E]/90 via-[#0A1E2F]/80 to-[#FF5803]/15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
