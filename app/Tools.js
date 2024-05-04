import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ToolCard from './Toolcard';
import Navbar from './Navbar';
import Footer from './Footer';

const Tools = () => {
  return (
    <View style={styles.container}>
      <Navbar/>
      <Text style={styles.title}>PROGRAMMING TOOLS</Text>
      <ScrollView contentContainerStyle={styles.toolList}>
        <ToolCard
          name="Visual Studio Code"
          description="A lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS, and Linux."
          image={require('../assets/visualstudiocode.png')}
          link="https://code.visualstudio.com/"
        />
        <ToolCard
          name="GitHub"
          description="A platform for hosting and collaborating on Git repositories. It provides version control and team collaboration features."
          image={require('../assets/github.png')}
          link="https://github.com/"
        />
        <ToolCard
          name="Sublime Text"
          description="A sophisticated text editor for code, markup, and prose. It offers a wide range of features, including a command palette, multiple selections, and syntax highlighting."
          image={require('../assets/sublimetext.jpg')}
          link="https://www.sublimetext.com/"
        />
        <ToolCard
          name="Atom"
          description="A hackable text editor for the 21st century built on Electron. It provides support for plugins written in Node.js and embedded Git Control."
          image={require('../assets/atom.png')}
          link="https://atom-editor.cc/"
        
        />
        <ToolCard
          name="PyCharm"
          description="An integrated development environment (IDE) used in computer programming, specifically for the Python language. It offers code analysis, graphical debugger, and integration with version control systems."
          image={require('../assets/pycharm.png')}
          link="https://www.jetbrains.com/pycharm/?var=1"
         
        />
        <ToolCard
          name="Visual Studio"
          description="An integrated development environment (IDE) from Microsoft. It supports various programming languages and provides features like IntelliSense, debugging, and Git integration."
          image={require('../assets/visualstudio.jpg')}
          link="https://visualstudio.microsoft.com/"
       
        />
        <ToolCard
          name="Eclipse"
          description="An open-source integrated development environment (IDE) primarily used for Java development. It supports other programming languages through plugins."
          image={require('../assets/eclipse.png')}
          link="https://eclipseide.org/"
     
        />
        <ToolCard
          name="NetBeans"
          description="An integrated development environment (IDE) for Java development, but also supports other languages like PHP, C/C++, and HTML5. It offers features like code templates, refactoring, and code generation."
          image={require('../assets/netbeans.jpg')}
          link="https://netbeans.apache.org/"
    
        />
        <ToolCard
          name="IntelliJ IDEA"
          description="An integrated development environment (IDE) for Java development, but also supports various other languages like Kotlin, Groovy, and Scala. It provides intelligent code assistance, refactorings, and built-in tools."
          image={require('../assets/intelliJ.jpg')}
          link="https://www.jetbrains.com/idea/"
 
        />
        <ToolCard
          name="Xcode"
          description="An integrated development environment (IDE) for macOS used for developing software for macOS, iOS, iPadOS, watchOS, and tvOS. It includes a visual interface builder, code editor, and debugging tools."
          image={require('../assets/xcode.jpg')}
          link="https://developer.apple.com/xcode/"
     
        />
      </ScrollView>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  toolList: {
    alignItems: 'center',
  },
});

export default Tools;
