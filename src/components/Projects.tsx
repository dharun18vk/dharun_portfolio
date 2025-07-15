import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Award, Zap, Brain } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Voice-Enabled Task Assistant',
      description: 'MERN-based assistant with NLP & speech recognition that automates notes, reminders, and basic commands. Features intelligent voice processing and natural language understanding.',
      technologies: ['React', 'Node.js', 'MongoDB', 'NLP', 'Speech Recognition', 'Express.js'],
      achievement: 'Runner-up at AITM CodeFest 2023',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Voice-to-text conversion',
        'Natural language processing',
        'Task automation',
        'Smart reminders',
        'Cross-platform support'
      ],
      status: 'Completed',
      category: 'AI/ML'
    },
    {
      title: 'Inventory Management System',
      description: 'Real-time inventory web application built with React, Node.js, and MongoDB. Includes comprehensive billing system, product tracking, and automated stock alerts.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js', 'WebSocket'],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Real-time inventory tracking',
        'Automated billing system',
        'Low stock alerts',
        'Analytics dashboard',
        'Multi-user support'
      ],
      status: 'Completed',
      category: 'Web Development'
    },
    {
      title: 'AI-Powered Resume Screener',
      description: 'Intelligent resume screening system using NLP to match resumes with job descriptions. Achieved 87% accuracy using scikit-learn and TF-IDF vectorization.',
      technologies: ['Python', 'scikit-learn', 'NLP', 'TF-IDF', 'Flask', 'pandas'],
      icon: Award,
      color: 'from-green-500 to-emerald-500',
      features: [
        '87% matching accuracy',
        'TF-IDF vectorization',
        'Automated scoring',
        'Keyword extraction',
        'Batch processing'
      ],
      status: 'Completed',
      category: 'AI/ML'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my most impactful projects that showcase my technical skills and problem-solving abilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="glass-card hover-lift overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Project Icon & Visual */}
                    <div className={`lg:w-1/3 p-8 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <project.icon className="w-10 h-10 text-white" />
                        </div>
                        <Badge className="bg-white/20 text-white border-white/30">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="lg:w-2/3 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {project.status}
                        </Badge>
                      </div>

                      {project.achievement && (
                        <div className="flex items-center space-x-2 mb-4">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                            {project.achievement}
                          </span>
                        </div>
                      )}

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
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

                      {/* Action Buttons */}
                      <div className="flex space-x-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Want to see more of my work?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more projects and contributions
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://github.com/dharun-kumar', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};