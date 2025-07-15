import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/dharun-kumar',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/dharun-kumar-v',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:dharun18vk@gmail.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-section-bg border-t border-border">
      <div className="container mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Dharun Kumar V
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Full Stack Developer & AI/ML Enthusiast passionate about building innovative solutions 
                  that bridge technology and user experience. Let's create something amazing together!
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-1"
                      onClick={() => window.open(social.href, '_blank')}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="font-medium">Email:</span><br />
                    dharun18vk@gmail.com
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span><br />
                    +91 94887 24284
                  </p>
                  <p>
                    <span className="font-medium">Location:</span><br />
                    Coimbatore, India
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm mb-4 md:mb-0"
            >
              © {new Date().getFullYear()} Dharun Kumar V. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 fill-current" />{' '}
              using React & TypeScript
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <p className="text-muted-foreground text-sm">
                Built with Lovable, Tailwind CSS & Framer Motion
              </p>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-1"
                onClick={scrollToTop}
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};