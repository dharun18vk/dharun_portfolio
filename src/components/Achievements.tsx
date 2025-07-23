import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Users, BookOpen, Star, Target } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Deep Fake Detection System',
      description: 'Built a sophisticated forgery detector using CNN + OpenCV that achieved 92% accuracy with real-time webcam input. Advanced computer vision application.',
      category: 'Technical',
      date: '2024',
      color: 'from-yellow-500 to-orange-500',
      highlight: true
    },
    {
      icon: BookOpen,
      title: 'Modular AI Assistant (Runner-up @ AITM Codefest)',
      description: 'Voice-enabled MERN app with Natural Language Processing (NLP) that integrated task automation and intelligent voice command handling.',
      category: 'Competition',
      date: '2023',
      color: 'from-blue-500 to-purple-500',
      highlight: true
    },
    {
      icon: Users,
      title: 'Web Development Internship',
      description: 'Successfully completed internship at Sangam Soft Tech Solution, developing full-stack blog platform with secure authentication and advanced features.',
      category: 'Professional',
      date: '2024',
      color: 'from-green-500 to-teal-500',
      highlight: false
    },
    {
      icon: Star,
      title: 'Academic Excellence',
      description: 'Maintaining excellent academic performance in B.Tech Computer Science Engineering program with consistent high grades and active participation.',
      category: 'Academic',
      date: '2022-2026',
      color: 'from-purple-500 to-pink-500',
      highlight: false
    },
    {
      icon: Target,
      title: 'Advanced Deep Learning Projects',
      description: 'Implemented multiple CNN and LSTM models for classification tasks using TensorFlow, OpenCV, and real-world datasets with high accuracy.',
      category: 'Technical',
      date: '2024',
      color: 'from-red-500 to-rose-500',
      highlight: false
    },
    {
      icon: Award,
      title: 'AI/ML Innovation',
      description: 'Developed innovative solutions including anomaly detection systems using LLMs and hybrid vision approaches for real-world applications.',
      category: 'Innovation',
      date: 'Ongoing',
      color: 'from-indigo-500 to-blue-500',
      highlight: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments that showcase my dedication to excellence in technology and innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              className={achievement.highlight ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <Card className={`glass-card hover-lift h-full ${achievement.highlight ? 'ring-2 ring-primary/20' : ''}`}>
                <CardContent className="p-6">
                  {/* Icon and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} shadow-lg`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {achievement.category}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 leading-tight">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Highlight indicator */}
                  {achievement.highlight && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                          Featured Achievement
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Achievement Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <p className="text-sm text-muted-foreground">Competition Won</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <p className="text-sm text-muted-foreground">Students Mentored</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};