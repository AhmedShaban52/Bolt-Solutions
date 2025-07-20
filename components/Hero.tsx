"use client"

import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // تعيين حجم الكانفاس ليتناسب مع الشاشة
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // إنشاء جزيئات متحركة
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 50 : 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: `hsla(${Math.random() * 360}, 70%, 60%, ${Math.random() * 0.4 + 0.1})`
      });
    }
    
    // دالة الرسم
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // رسم خطوط متصلة بين الجزيئات القريبة
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${(i * j) % 360}, 70%, 60%, ${0.2 * (1 - distance/150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // رسم وتحديث الجزيئات
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // تحديث المواضع
        p.x += p.speedX;
        p.y += p.speedY;
        
        // الارتداد عند حواف الشاشة
        if (p.x < 0 || p.x > canvas.width) p.speedX = -p.speedX;
        if (p.y < 0 || p.y > canvas.height) p.speedY = -p.speedY;
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="relative h-[95vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* خلفية متحركة باستخدام Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      {/* طبقة تدرج لوني لتفتيح الخلفية */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/10 to-pink-900/5 z-1" />
      
      {/* دوائر متحركة إضافية */}
      <div className="absolute top-1/4 left-4 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.3)_0%,rgba(0,0,0,0)_70%)] animate-float1" />
      <div className="absolute top-1/3 right-10 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.3)_0%,rgba(0,0,0,0)_70%)] animate-float2" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.3)_0%,rgba(0,0,0,0)_70%)] animate-float3" />
      
      {/* محتوى البورتفليو */}
      <div className="relative z-10 px-4 max-w-4xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
          Design, Development, and Identity For Your Product
        </h1>
        
        <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fadeIn delay-300">
          We craft stunning digital experiences that blend beautiful design with robust functionality—tailored to elevate your brand and engage your audience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-500">
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/20">
            View Projects
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all">
            Contact Me
          </button>
        </div>
      </div>
      
      {/* أيقونة التمرير للأسفل */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/40 flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;