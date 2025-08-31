# 🌱 Crop Disease Detection - BAHAAR AI

## Overview

BAHAAR AI is a comprehensive plant disease recognition system that utilizes deep learning to identify plant diseases from images. The system can recognize 38 different classes of plant diseases across various crops including Apple, Blueberry, Cherry, Corn, Grape, Orange, Peach, Pepper, Potato, Raspberry, Soybean, Squash, Strawberry, and Tomato.

## 🎯 Features

- **Multi-crop Disease Detection**: Supports 38 different plant disease classes
- **Deep Learning Model**: CNN-based architecture for accurate disease classification
- **Interactive Web Interface**: User-friendly Streamlit application
- **Real-time Prediction**: Upload plant images and get instant disease identification
- **Comprehensive Training**: Model trained on ~87K RGB images

## 🚀 Dataset Information

The model is trained on a comprehensive dataset containing:
- **Total Images**: ~87,000 RGB images
- **Training Set**: 70,295 images
- **Validation Set**: 17,572 images
- **Test Set**: 33 images
- **Classes**: 38 different disease categories

**Dataset Source**: [New Plant Diseases Dataset](https://www.kaggle.com/datasets/vipoooool/new-plant-diseases-dataset)

## 🌿 Supported Diseases

### Apple
- Apple Scab
- Black Rot
- Cedar Apple Rust
- Healthy

### Blueberry
- Healthy

### Cherry
- Powdery Mildew
- Healthy

### Corn (Maize)
- Cercospora Leaf Spot Gray Leaf Spot
- Common Rust
- Northern Leaf Blight
- Healthy

### Grape
- Black Rot
- Esca (Black Measles)
- Leaf Blight (Isariopsis Leaf Spot)
- Healthy

### Orange
- Haunglongbing (Citrus Greening)

### Peach
- Bacterial Spot
- Healthy

### Pepper (Bell)
- Bacterial Spot
- Healthy

### Potato
- Early Blight
- Late Blight
- Healthy

### Raspberry
- Healthy

### Soybean
- Healthy

### Squash
- Powdery Mildew

### Strawberry
- Leaf Scorch
- Healthy

### Tomato
- Bacterial Spot
- Early Blight
- Late Blight
- Leaf Mold
- Septoria Leaf Spot
- Spider Mites Two-spotted Spider Mite
- Target Spot
- Tomato Yellow Leaf Curl Virus
- Tomato Mosaic Virus
- Healthy

## 🛠️ Installation & Setup

### Prerequisites
- Python 3.8+
- pip package manager

### Required Dependencies

```bash
pip install -r requirements.txt
```

### Key Libraries
- **TensorFlow 2.16.1**: Deep learning framework
- **Streamlit 1.33.0**: Web application framework
- **OpenCV 4.8.1.78**: Image processing
- **NumPy 1.26.1**: Numerical computing
- **Matplotlib 3.8.1**: Visualization
- **Pandas 2.2.2**: Data manipulation
- **Pillow 10.1.0**: Image processing

## 📁 Project Structure

```
crop-disease-detection--BAHAAR-AI/
├── main.py                     # Streamlit web application
├── Train_plant_disease.ipynb   # Model training notebook
├── Test_plant_disease.ipynb    # Model testing notebook
├── trained_model.h5            # Pre-trained model weights
├── training_hist.json          # Training history metrics
├── requirements.txt            # Project dependencies
├── home_page.jpeg             # Homepage image
├── Untitled.ipynb             # Additional notebook
└── README.md                  # Project documentation
```

## 🚀 Usage

### Running the Web Application

1. **Start the Streamlit app:**
   ```bash
   streamlit run main.py
   ```

2. **Access the application:**
   Open your web browser and navigate to `http://localhost:8501`

### Using the Application

1. **Home Page**: Overview of the system and instructions
2. **Disease Recognition**: Upload a plant image to get disease prediction
3. **About**: Information about the dataset and methodology

### Making Predictions

1. Navigate to the "Disease Recognition" page
2. Upload an image of a plant leaf
3. Click "Show Image" to preview your upload
4. Click "Predict" to get the disease classification result

## 🧠 Model Architecture

The system uses a Convolutional Neural Network (CNN) with the following characteristics:

- **Input Size**: 128x128 RGB images
- **Architecture**: Sequential CNN model
- **Activation Functions**: ReLU and Softmax
- **Optimization**: Adam optimizer with learning rate 0.0001
- **Training Epochs**: 10 epochs
- **Batch Size**: 32

### Model Performance

Based on training history:
- **Final Training Accuracy**: 81.01%
- **Final Validation Accuracy**: 87.08%
- **Training Loss**: 0.023
- **Validation Loss**: 0.023

## 📊 Training Results

The model shows consistent improvement across epochs:

| Epoch | Training Accuracy | Validation Accuracy | Training Loss | Validation Loss |
|-------|------------------|--------------------|--------------|-----------------| 
| 1     | 8.16%            | 31.66%             | 0.128        | 0.095           |
| 5     | 63.64%           | 75.94%             | 0.054        | 0.039           |
| 10    | 81.01%           | 87.08%             | 0.032        | 0.023           |

## 🔬 Technical Implementation

### Image Preprocessing
- Images resized to 128x128 pixels
- RGB color format
- Normalization applied
- Data augmentation techniques used

### Model Training
- Transfer learning approach
- Cross-entropy loss function
- Early stopping to prevent overfitting
- Learning rate optimization

## 🌟 Key Features of the Web App

### Navigation
- **Dashboard Sidebar**: Easy navigation between pages
- **Multi-page Structure**: Home, About, and Disease Recognition

### User Interface
- **Intuitive Design**: Clean and user-friendly interface
- **Image Upload**: Drag-and-drop functionality
- **Real-time Results**: Instant disease classification
- **Visual Feedback**: Image preview and animated results

### Prediction System
- **Fast Processing**: Quick image analysis
- **Confidence Scoring**: Reliability indicators
- **Detailed Results**: Specific disease identification

## 📈 Performance Metrics

The model achieves high accuracy in distinguishing between:
- Healthy vs. Diseased plants
- Different types of diseases
- Various crop species

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Dataset provided by [Kaggle New Plant Diseases Dataset](https://www.kaggle.com/datasets/vipoooool/new-plant-diseases-dataset)
- TensorFlow and Streamlit communities
- Agricultural research community

## 📞 Support

For support, issues, or feature requests, please create an issue in the GitHub repository.

## 🎓 Educational Use

This project serves as an excellent example of:
- Deep Learning for Agriculture
- Computer Vision Applications
- CNN Implementation
- Web Application Development with Streamlit
- Model Deployment and Productionization

---

**Made with ❤️ for sustainable agriculture and plant health monitoring**
