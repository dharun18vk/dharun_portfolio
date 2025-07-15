import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const textArray = ['Full Stack Developer', 'AI & ML Enthusiast', 'Problem Solver', 'Tech Innovator'];
  const currentText = textArray[currentTextIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < currentText.length) {
        setDisplayText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // Wait for 2 seconds, then switch to next text
        setTimeout(() => {
          setCurrentIndex(0);
          setDisplayText('');
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, currentText, textArray.length]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-section-bg">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,69,219,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,69,219,0.1),transparent_50%)]"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="relative mx-auto w-32 h-32 md:w-40 md:h-40"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary to-primary-glow p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/20 to-primary-glow/20 flex items-center justify-center text-4xl font-bold text-primary">
                  DK
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">Dharun Kumar V</span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground min-h-[1.5em]">
              <span className="border-r-2 border-primary pr-1 animate-blink">
                {displayText}
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Energetic Full Stack Developer specializing in MERN stack and AI/ML applications. 
            Building scalable web solutions and intelligent systems that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent hover:text-primary transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('https://github.com/dharun-kumar', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent hover:text-primary transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('https://linkedin.com/in/dharun-kumar-v', '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent hover:text-primary transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('mailto:dharun18vk@gmail.com', '_blank')}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};