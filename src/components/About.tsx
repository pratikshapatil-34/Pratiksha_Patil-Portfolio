import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "User-Centered",
      description: "Focusing on user experience and accessibility"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating 
              exceptional digital experiences that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over 3 years of experience in web development, I've had the privilege of working 
                on diverse projects ranging from e-commerce platforms to complex web applications. 
                My journey began with a curiosity about how websites work, and it has evolved into 
                a passion for creating digital solutions that solve real-world problems.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                When I'm not coding, you can find me exploring new design trends, contributing to 
                open-source projects, or mentoring aspiring developers.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;