import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TextDrawingScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(24);
  const [selectedFontId, setSelectedFontId] = useState('font1');
  
  const fonts = [
    { id: 'font1', name: 'Default' },
    { id: 'font2', name: 'Handwritten' },
    { id: 'font3', name: 'Bold' },
    { id: 'font4', name: 'Elegant' },
    { id: 'font5', name: 'Playful' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Text</Text>
        <TouchableOpacity 
          onPress={() => {
            if (text.trim()) {
              navigation.navigate('Preview', { 
                text: text.trim(),
                fontSize: fontSize,
                fontId: selectedFontId
              });
            }
          }}
          style={[styles.nextButton, !text.trim() && styles.disabledButton]}
          disabled={!text.trim()}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.textInputContainer}>
        <TextInput
          style={[styles.textInput, { fontSize: fontSize }]}
          placeholder="Enter your text..."
          placeholderTextColor="#999"
          value={text}
          onChangeText={setText}
          multiline
          maxLength={100}
        />
      </View>
      
      <View style={styles.optionsContainer}>
        <Text style={styles.optionsTitle}>Font Size</Text>
        <View style={styles.fontSizeControls}>
          <TouchableOpacity 
            style={styles.fontSizeButton}
            onPress={() => setFontSize(Math.max(12, fontSize - 2))}
          >
            <Icon name="minus" size={20} color="#333" />
          </TouchableOpacity>
          
          <Text style={styles.fontSizeValue}>{fontSize}</Text>
          
          <TouchableOpacity 
            style={styles.fontSizeButton}
            onPress={() => setFontSize(Math.min(72, fontSize + 2))}
          >
            <Icon name="plus" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.fontsContainer}>
        <Text style={styles.optionsTitle}>Font Style</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {fonts.map(font => (
            <TouchableOpacity
              key={font.id}
              style={[
                styles.fontOption,
                selectedFontId === font.id && styles.selectedFontOption
              ]}
              onPress={() => setSelectedFontId(font.id)}
            >
              <Text style={[
                styles.fontOptionText,
                selectedFontId === font.id && styles.selectedFontOptionText
              ]}>
                {font.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <View style={styles.charactersCount}>
        <Text style={styles.charactersCountText}>
          {text.length}/100
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
    color: '#000'
  },
  nextButton: {
    backgroundColor: '#8A56EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8
  },
  disabledButton: {
    backgroundColor: '#D0D0D0'
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: '600'
  },
  textInputContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  textInput: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    textAlign: 'center',
    color: '#333'
  },
  optionsContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0'
  },
  optionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333'
  },
  fontSizeControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontSizeButton: {
    width: 40,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontSizeValue: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 16,
    width: 40,
    textAlign: 'center'
  },
  fontsContainer: {
    padding: 16
  },
  fontOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 12
  },
  selectedFontOption: {
    backgroundColor: '#8A56EB'
  },
  fontOptionText: {
    color: '#333',
    fontSize: 14
  },
  selectedFontOptionText: {
    color: '#fff'
  },
  charactersCount: {
    alignItems: 'center',
    paddingBottom: 16
  },
  charactersCountText: {
    color: '#999',
    fontSize: 14
  }
});

export default TextDrawingScreen;