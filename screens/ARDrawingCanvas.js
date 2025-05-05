import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// In a real implementation, you would use AR-specific libraries
// This is a simplified mockup for demonstration

const ARDrawingCanvas = ({ navigation, route }) => {
  const { image } = route.params;
  const [selectedTool, setSelectedTool] = useState('pen');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(2);
  
  const tools = [
    { id: 'pen', icon: 'pen', label: 'Pen' },
    { id: 'eraser', icon: 'eraser', label: 'Eraser' },
    { id: 'highlighter', icon: 'marker', label: 'Highlighter' },
  ];
  
  const colors = [
    '#000000', '#FF0000', '#0000FF', '#00FF00', 
    '#FFA500', '#800080', '#FFC0CB', '#FFFF00'
  ];

  const handleSave = () => {
    // In a real app, this would save the AR drawing
    Alert.alert('Success', 'Your AR drawing has been saved!');
    navigation.navigate('Creation');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AR Drawing</Text>
        <TouchableOpacity onPress={handleSave}>
          <Icon name="check" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.canvasContainer}>
        <View style={styles.arPlaceholder}>
          <Text style={styles.arPlaceholderText}>AR Canvas Area</Text>
          <Text style={styles.arInstructions}>Move your device to position the sketch in AR space</Text>
        </View>
      </View>
      
      <View style={styles.toolsContainer}>
        <View style={styles.toolButtons}>
          {tools.map(tool => (
            <TouchableOpacity
              key={tool.id}
              style={[
                styles.toolButton,
                selectedTool === tool.id && styles.selectedToolButton
              ]}
              onPress={() => setSelectedTool(tool.id)}
            >
              <Icon 
                name={tool.icon} 
                size={24} 
                color={selectedTool === tool.id ? '#8A56EB' : '#666'} 
              />
              <Text style={[
                styles.toolLabel,
                selectedTool === tool.id && styles.selectedToolLabel
              ]}>
                {tool.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.colorPicker}>
          {colors.map(color => (
            <TouchableOpacity
              key={color}
              style={[
                styles.colorButton,
                { backgroundColor: color },
                selectedColor === color && styles.selectedColorButton
              ]}
              onPress={() => setSelectedColor(color)}
            />
          ))}
        </View>
        
        <View style={styles.lineWidthContainer}>
          <Text style={styles.lineWidthLabel}>Line Width</Text>
          <View style={styles.lineWidthOptions}>
            {[1, 2, 4, 6].map(width => (
              <TouchableOpacity
                key={width}
                style={[
                  styles.lineWidthButton,
                  lineWidth === width && styles.selectedLineWidth
                ]}
                onPress={() => setLineWidth(width)}
              >
                <View 
                  style={[
                    styles.lineWidthPreview, 
                    { height: width, backgroundColor: selectedColor }
                  ]} 
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff'
  },
  canvasContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  arPlaceholder: {
    width: '80%',
    height: '60%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  arPlaceholderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8
  },
  arInstructions: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    fontSize: 14
  },
  toolsContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16
  },
  toolButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16
  },
  toolButton: {
    alignItems: 'center',
    padding: 12
  },
  selectedToolButton: {
    backgroundColor: 'rgba(138, 86, 235, 0.1)',
    borderRadius: 8
  },
  toolLabel: {
    color: '#666',
    marginTop: 4,
    fontSize: 12
  },
  selectedToolLabel: {
    color: '#8A56EB',
    fontWeight: '600'
  },
  colorPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  selectedColorButton: {
    borderWidth: 2,
    borderColor: '#8A56EB'
  },
  lineWidthContainer: {
    marginVertical: 8
  },
  lineWidthLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8
  },
  lineWidthOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lineWidthButton: {
    width: 60,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#f0f0f0'
  },
  selectedLineWidth: {
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#8A56EB'
  },
  lineWidthPreview: {
    width: '80%',
    borderRadius: 4
  }
});

export default ARDrawingCanvas;