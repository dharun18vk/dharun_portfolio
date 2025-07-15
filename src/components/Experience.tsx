import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Sangam Soft Tech Solution',
      location: 'Coimbatore',
      duration: 'Aug 2024 – Sep 2024',
      description: 'Developed a full-stack blog platform with secure authentication, PDF export, and live markdown preview. Built RESTful APIs using Node.js and Express, integrated frontend with React focusing on responsive, reusable UI components. Contributed to UX improvements and bug fixes in agile environment.',
      achievements: [
        'Developed full-stack blog platform with secure authentication',
        'Implemented PDF export and live markdown preview features',
        'Built RESTful APIs using Node.js and Express',
        'Created responsive, reusable UI components with React',
        'Contributed to UX improvements and bug fixes in agile environment'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Markdown', 'PDF Export'],
      status: 'Completed',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

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
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and work experience in the tech industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-glow hidden md:block"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block z-10"></div>

                <Card className="glass-card hover-lift ml-0 md:ml-20">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Building className="w-5 h-5 text-primary" />
                          <Badge 
                            variant="secondary" 
                            className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            {exp.status}
                          </Badge>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-lg font-semibold text-primary mb-2">{exp.company}</p>
                      </div>
                      
                      <div className="text-left lg:text-right">
                        <div className="flex items-center space-x-2 mb-2 lg:justify-end">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 lg:justify-end">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm">Key Achievements:</h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs bg-background/50 border-primary/20 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};