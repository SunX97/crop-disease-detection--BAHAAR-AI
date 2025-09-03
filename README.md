# 🌱 BAHAAR AI - Crop Disease Detection System

<div align="center">
  <img src="https://img.shields.io/badge/AI-Powered-brightgreen" alt="AI Powered">
  <img src="https://img.shields.io/badge/Accuracy-87%25-success" alt="87% Accuracy">
  <img src="https://img.shields.io/badge/Diseases-38_Classes-blue" alt="38 Disease Classes">
  <img src="https://img.shields.io/badge/Crops-14_Types-orange" alt="14 Crop Types">
  <img src="https://img.shields.io/badge/Dataset-87K_Images-yellow" alt="87K Images">
  <br/>
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel" alt="Deployed on Vercel">
  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge" alt="Live Status">
</div>

## 🚀 Live Demo - Deployed on Vercel

### 🌐 **Live Website URLs:**

🔗 **Primary:** **[https://bahaar-ai-crop-disease-detection-9pymn2mxw.vercel.app](https://bahaar-ai-crop-disease-detection-9pymn2mxw.vercel.app)**

🔗 **Clean URL:** **[https://bahaar-ai-crop-detection.vercel.app](https://bahaar-ai-crop-detection.vercel.app)**

> 🎯 **Experience the full interactive AI-powered crop disease detection system live!**
> 
> ✨ Features: Drag & drop image upload, 3D animations, particle effects, dark/light theme, real-time disease detection simulation, and more!

## 📖 Overview

BAHAAR AI is a cutting-edge crop disease detection system that leverages deep learning and computer vision to help farmers identify plant diseases quickly and accurately. Built with modern web technologies and powered by a CNN model trained on 87,000+ images, our system supports detection of 38 different disease classes across 14 crop types.

## ✨ Features

### 🔬 Advanced AI Detection
- **87% Accuracy**: High-precision disease classification
- **38 Disease Classes**: Comprehensive disease coverage
- **14 Crop Types**: Multiple crop support
- **Real-time Analysis**: Instant results with confidence scores

### 🎨 Interactive Web Interface
- **Responsive Design**: Works on all devices
- **Drag & Drop Upload**: Easy image upload
- **3D Card Effects**: Interactive hover animations
- **Particle Background**: Dynamic visual effects
- **Dark/Light Mode**: Theme switcher
- **Search Functionality**: Filter diseases and crops

### 📊 Data Visualization
- **Training Charts**: Performance metrics visualization
- **Animated Counters**: Dynamic statistics display
- **Progress Bars**: Dataset breakdown visualization
- **Interactive Modals**: Detailed crop information

## 🌿 Supported Crops & Diseases

### Apple
- Apple Scab
- Black Rot
- Cedar Apple Rust
- Healthy

### Tomato
- Bacterial Spot
- Early Blight
- Late Blight
- Leaf Mold
- Septoria Leaf Spot
- Spider Mites
- Target Spot
- Yellow Leaf Curl Virus
- Mosaic Virus
- Healthy

### Corn (Maize)
- Cercospora Leaf Spot
- Common Rust
- Northern Leaf Blight
- Healthy

### Additional Crops
- Blueberry, Cherry, Grape, Orange, Peach, Pepper, Potato, Raspberry, Soybean, Squash, Strawberry

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive functionality
- **Chart.js**: Data visualization
- **Font Awesome**: Icons
- **Google Fonts**: Typography

### AI/ML Components
- **TensorFlow 2.16.1**: Deep learning framework
- **CNN Architecture**: Convolutional Neural Network
- **Image Processing**: OpenCV integration
- **Model Training**: 10 epochs, Adam optimizer

### Deployment
- **Vercel**: Hosting platform
- **CDN**: Global content delivery
- **HTTPS**: Secure connections
- **Custom Domain**: Professional branding

## 📁 Project Structure

```
bahaar-ai/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── vercel.json         # Vercel configuration
├── package.json        # Project metadata
├── README.md           # Documentation
└── assets/
    ├── images/         # Image assets
    └── icons/          # Icon files
```

## 🚀 Local Development

### Prerequisites
- Node.js (v14 or higher)
- Modern web browser
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SunX97/crop-disease-detection--BAHAAR-AI.git
cd crop-disease-detection--BAHAAR-AI
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🌐 Deployment to Vercel

### Method 1: Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel --prod
```

### Method 2: GitHub Integration

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repository
- Deploy automatically

### Method 3: Drag & Drop

1. **Build locally**
```bash
npm run build
```

2. **Drag folder to Vercel**
- Visit [vercel.com](https://vercel.com)
- Drag your project folder
- Deploy instantly

## 📊 Model Performance

| Metric | Training | Validation |
|--------|----------|------------|
| **Accuracy** | 81.01% | 87.08% |
| **Loss** | 0.032 | 0.023 |
| **Epochs** | 10 | 10 |

### Dataset Statistics
- **Total Images**: 87,000+
- **Training Set**: 70,295 images (80.7%)
- **Validation Set**: 17,572 images (20.2%)
- **Test Set**: 33 images (0.1%)
- **Image Resolution**: 128x128 pixels

## 🎯 Usage Guide

### For Farmers
1. **Upload Image**: Take a clear photo of the affected plant
2. **Analyze**: Click the analyze button for AI processing
3. **Get Results**: Receive disease identification with confidence score
4. **Follow Recommendations**: Implement suggested treatment methods

### For Researchers
1. **Explore Dataset**: Browse the comprehensive disease database
2. **View Performance**: Analyze model training metrics
3. **Study Architecture**: Learn about the CNN implementation
4. **Contribute**: Suggest improvements and new features

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development
- **Bug Reports**: Submit issues with detailed descriptions
- **Feature Requests**: Suggest new functionality
- **Code Contributions**: Fork, develop, and submit pull requests
- **Documentation**: Improve docs and examples

### Research
- **Dataset Enhancement**: Contribute new disease images
- **Model Improvement**: Suggest architecture optimizations
- **Validation**: Test with different crop varieties
- **Performance Analysis**: Benchmark against other systems

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Dataset**: [New Plant Diseases Dataset](https://www.kaggle.com/datasets/vipoooool/new-plant-diseases-dataset)
- **TensorFlow Team**: Deep learning framework
- **Agricultural Community**: Domain expertise and validation
- **Open Source Contributors**: Various libraries and tools

## 📞 Support

### Get Help
- **Documentation**: Check our comprehensive guides
- **Issues**: Report bugs on GitHub
- **Discussions**: Join community conversations
- **Email**: contact@bahaarai.com

### Follow Us
- **Website**: [bahaar-ai.vercel.app](https://bahaar-ai.vercel.app)
- **GitHub**: [@bahaar-ai](https://github.com/bahaar-ai)
- **Twitter**: [@bahaarai](https://twitter.com/bahaarai)

## 🌟 Future Roadmap

### Short Term (Q1 2025)
- [ ] Mobile app development
- [ ] Additional crop support
- [ ] Offline functionality
- [ ] Multi-language support

### Long Term (2025)
- [ ] Edge AI deployment
- [ ] Drone integration
- [ ] IoT sensor fusion
- [ ] Prescription maps
- [ ] Weather integration
- [ ] Market price integration

---

<div align="center">
  <h3>🌱 Made with ❤️ for sustainable agriculture</h3>
  <p>Protecting crops with artificial intelligence</p>
  
  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SunX97/crop-disease-detection--BAHAAR-AI)
</div>
