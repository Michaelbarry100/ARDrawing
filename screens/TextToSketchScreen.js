import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

const TextToSketchScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(24);
  const [selectedFont, setSelectedFont] = useState('default');

  const fonts = [
    { id: 'default', name: 'HELLO', style: {} },
    { id: 'light', name: 'HELLO', style: { fontFamily: 'sans-serif-light' } },
    { id: 'serif', name: 'HELLO', style: { fontFamily: 'serif' } },
    { id: 'mono', name: 'HELLO', style: { fontFamily: 'monospace' } },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Text To Sketch</Text>
        <View style={{ width: 30 }}></View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.textInput, { fontSize }]} // 👈 Dynamic font size
            placeholder="Enter Your Text"
            value={text}
            onChangeText={setText}
            multiline
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Text Size</Text>
          <Slider
            style={styles.slider}
            minimumValue={12}
            maximumValue={48}
            value={fontSize}
            onValueChange={setFontSize}
            minimumTrackTintColor="#8A56EB"
            maximumTrackTintColor="#EBEBEB"
            thumbTintColor="#8A56EB"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Font</Text>
          <View style={styles.fontOptions}>
            {fonts.map(font => (
              <TouchableOpacity
                key={font.id}
                style={[
                  styles.fontOption,
                  selectedFont === font.id && styles.selectedFont
                ]}
                onPress={() => setSelectedFont(font.id)}
              >
                <Text style={[styles.fontSample, font.style]}>
                  {font.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      
      <TouchableOpacity 
        style={styles.continueButton}
        onPress={() => navigation.navigate('Preview', { text, fontSize, fontId: selectedFont })}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#000' },
  content: { padding: 16, flexGrow: 1 },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#8A56EB',
    borderRadius: 12,
    padding: 16,
    minHeight: 120,
    marginBottom: 24
  },
  textInput: {
    color: '#333',
    textAlignVertical: 'top',
    minHeight: 100
  },
  section: { marginBottom: 24 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333'
  },
  slider: { width: '100%', height: 40 },
  fontOptions: {
    flexDirection: 'column',
    gap: 12
  },
  fontOption: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    alignItems: 'center'
  },
  selectedFont: {
    backgroundColor: '#F0E6FF',
    borderWidth: 1,
    borderColor: '#8A56EB'
  },
  fontSample: {
    fontWeight: '500',
    color: '#333'
  },
  continueButton: {
    backgroundColor: '#8A56EB',
    borderRadius: 24,
    padding: 16,
    alignItems: 'center',
    margin: 16
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});

export default TextToSketchScreen;
