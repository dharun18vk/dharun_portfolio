import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Karpagam College of Engineering',
      location: 'Coimbatore',
      duration: '2021 - 2025',
      grade: 'CGPA: 8.4 (as of 6th semester)',
      description: 'Specializing in Computer Science and Engineering with focus on software development, algorithms, and artificial intelligence.',
      achievements: [
        'Consistent academic excellence',
        'Top 10% of the class',
        'Active participation in coding competitions',
        'Research in AI/ML applications'
      ],
      status: 'In Progress',
      color: 'from-blue-500 to-purple-500'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Vidhya Niketan Matriculation Higher Secondary School',
      location: 'Coimbatore',
      duration: '2019 - 2021',
      grade: '87%',
      description: 'Completed 12th standard with Science stream, focusing on Mathematics, Physics, and Computer Science.',
      achievements: [
        'Excellent academic performance',
        'Strong foundation in mathematics',
        'Leadership roles in school activities',
        'Computer Science topper'
      ],
      status: 'Completed',
      color: 'from-green-500 to-teal-500'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Vidhya Niketan Matriculation Higher Secondary School',
      location: 'Coimbatore',
      duration: '2018 - 2019',
      grade: '92%',
      description: 'Completed 10th standard with outstanding academic performance across all subjects.',
      achievements: [
        'Outstanding academic performance',
        'All-rounder in academics',
        'Excellent in Mathematics and Science',
        'Active in extracurricular activities'
      ],
      status: 'Completed',
      color: 'from-purple-500 to-pink-500'
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
            Education Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational milestones that shaped my technical expertise
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
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
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
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${edu.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}
                          >
                            {edu.status}
                          </Badge>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-lg font-semibold text-primary mb-2">{edu.institution}</p>
                      </div>
                      
                      <div className="text-left lg:text-right">
                        <div className="flex items-center space-x-2 mb-2 lg:justify-end">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2 lg:justify-end">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 lg:justify-end">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-primary">{edu.grade}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Key Achievements:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Academic Highlights */}
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
                Academic Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mb-4 mx-auto">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Current Education</h4>
                  <p className="text-sm text-muted-foreground">
                    B.E. Computer Science Engineering
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Current CGPA</h4>
                  <p className="text-sm text-muted-foreground">
                    8.4 out of 10.0
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Expected Graduation</h4>
                  <p className="text-sm text-muted-foreground">
                    2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};