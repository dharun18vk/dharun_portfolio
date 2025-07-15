import { motion } from 'framer-motion';
import { User, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
  return (
    <section className="section-padding bg-section-bg">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, background, and passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am an energetic and detail-oriented Full Stack Developer with strong expertise in the MERN stack and AI/ML applications. I specialize in building scalable web solutions and intelligent systems that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My passion lies in creating innovative solutions that bridge the gap between complex technical concepts and user-friendly applications. I enjoy tackling challenging problems and am always eager to learn new technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="glass-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium">Dharun Kumar V</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Coimbatore, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+91 94887 24284</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">dharun18vk@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <Card className="glass-card text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>

              <Card className="glass-card text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>

              <Card className="glass-card text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <p className="text-sm text-muted-foreground">Technologies</p>
                </CardContent>
              </Card>

              <Card className="glass-card text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">87%</div>
                  <p className="text-sm text-muted-foreground">AI Model Accuracy</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-center">Key Highlights</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Runner-up at AITM CodeFest 2023</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Published ML research paper</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Conducted AI/ML bootcamps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">MERN Stack Expert</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};