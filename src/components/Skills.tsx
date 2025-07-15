import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Database, Brain, Wrench, GitBranch } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'C', level: 75 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      icon: Palette,
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
      ],
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'MySQL', level: 75 },
      ],
    },
    {
      icon: Brain,
      title: 'AI/ML',
      skills: [
        { name: 'TensorFlow', level: 80 },
        { name: 'scikit-learn', level: 85 },
        { name: 'pandas', level: 80 },
        { name: 'NumPy', level: 85 },
        { name: 'NLP', level: 75 },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Postman', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Linux', level: 75 },
      ],
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="glass-card hover-lift h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Additional Skills & Interests
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  'Problem Solving',
                  'Team Leadership',
                  'Agile Development',
                  'System Design',
                  'Code Review',
                  'Testing & Debugging',
                  'Performance Optimization',
                  'API Design',
                  'Cloud Computing',
                  'DevOps',
                  'Mobile Development',
                  'UI/UX Design',
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};