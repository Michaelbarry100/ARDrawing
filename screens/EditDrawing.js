import React, { useRef, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Share, Alert, TextInput, ScrollView
} from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';
import * as FileSystem from 'expo-file-system';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditDrawing = ({ route, navigation }) => {
  const { imageUri } = route.params;
  const ref = useRef();
  const [inputText, setInputText] = useState('');
  const [textOverlays, setTextOverlays] = useState([]);

  const handleOK = async (signature) => {
    const fileUri = FileSystem.documentDirectory + 'drawing.png';
    await FileSystem.writeAsStringAsync(fileUri, signature.replace('data:image/png;base64,', ''), {
      encoding: FileSystem.EncodingType.Base64,
    });
    handleShare(fileUri);
  };

  const handleClear = () => {
    ref.current?.clearSignature();
    setTextOverlays([]);
  };

  const handleShare = async (fileUri) => {
    try {
      await Share.share({
        message: 'Check out my drawing!',
        url: fileUri,
      });
    } catch (error) {
      Alert.alert('Error', 'Unable to share image');
    }
  };

  const addTextOverlay = () => {
    if (inputText.trim()) {
      setTextOverlays([...textOverlays, { text: inputText, id: Date.now() }]);
      setInputText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Edit Your Drawing</Text>

      <View style={styles.canvasWrapper}>
        <SignatureScreen
          ref={ref}
          onOK={handleOK}
          backgroundImage={imageUri}
          descriptionText="Draw here"
          clearText="Clear"
          confirmText="Save"
          webStyle={`
            .m-signature-pad--footer {display: none;}
            canvas { background-color: white; border-radius: 10px; }
          `}
        />

        {textOverlays.map((overlay) => (
          <Text key={overlay.id} style={styles.overlayText}>{overlay.text}</Text>
        ))}
      </View>

      <View style={styles.textInputRow}>
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Add text..."
          style={styles.input}
        />
        <TouchableOpacity onPress={addTextOverlay} style={styles.addButton}>
          <Text style={{ color: '#fff' }}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={() => ref.current?.readSignature()}>
          <Text style={styles.buttonText}>Save & Share</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
    canvasWrapper: { flex: 1, margin: 10, borderRadius: 10, overflow: 'hidden' },
    canvas: { flex: 1 },
    buttonsContainer: {
      flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10
    },
    button: {
      backgroundColor: '#aaa', padding: 12, borderRadius: 8, width: '40%', alignItems: 'center'
    },
    saveButton: { backgroundColor: '#28a745' },
    buttonText: { color: '#fff', fontWeight: '600' },
    toolsRow: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      marginVertical: 10
    },
    colorOption: {
      width: 30, height: 30, borderRadius: 15, marginHorizontal: 6, borderColor: '#000'
    },
    strokeOption: {
      backgroundColor: '#eee',
      paddingHorizontal: 10,
      marginHorizontal: 5,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInputRow: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      alignItems: 'center',
      marginBottom: 10
    },
    input: {
      flex: 1,
      height: 40,
      borderColor: '#aaa',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginRight: 10
    },
    addButton: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 8
    },
    overlayText: {
      position: 'absolute',
      top: 20,
      left: 20,
      color: '#000',
      fontWeight: 'bold',
      fontSize: 18,
      backgroundColor: 'rgba(255,255,255,0.6)',
      padding: 4,
      borderRadius: 5
    }
  });
  

  export default EditDrawing;