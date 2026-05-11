import React, { useState } from 'react';

import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function TrackPeriodScreen() {
  const [name, setName] = useState('');
  const [periodDate, setPeriodDate] = useState('');
  const [duration, setDuration] = useState('');
  const [cycle, setCycle] = useState('');
  const [age, setAge] = useState('');

  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Let’s Personalize ✨
        </Text>

        <Text style={styles.subtitle}>
          Your Period Tracking
        </Text>

        <Text style={styles.description}>
          Share a few details so we can tailor your
          experience just for you.
        </Text>
      </View>

      {/* FORM CARD */}
      <View style={styles.formCard}>
        
        {/* NAME */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            👤 Name / Nickname
          </Text>

          <TextInput
            placeholder="Enter your nickname"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* DATE */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            📅 First Day of Your Last Period
          </Text>

          <TextInput
            placeholder="Select date"
            style={styles.input}
            value={periodDate}
            onChangeText={setPeriodDate}
          />
        </View>

        {/* DURATION */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            🩸 Period Duration (days)
          </Text>

          <TextInput
            placeholder="ex: 5"
            keyboardType="numeric"
            style={styles.input}
            value={duration}
            onChangeText={setDuration}
          />
        </View>

        {/* CYCLE */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            🔄 Cycle Length (days)
          </Text>

          <TextInput
            placeholder="ex: 28"
            keyboardType="numeric"
            style={styles.input}
            value={cycle}
            onChangeText={setCycle}
          />
        </View>

        {/* AGE */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            🎀 Age (optional)
          </Text>

          <TextInput
            placeholder="Enter your age"
            keyboardType="numeric"
            style={styles.input}
            value={age}
            onChangeText={setAge}
          />
        </View>

        {/* PRIVACY */}
        <View style={styles.privacyCard}>
          <Text style={styles.privacyTitle}>
            🔒 Your data is private
          </Text>

          <Text style={styles.privacyText}>
            Your information is securely stored and
            used only to improve your experience.
          </Text>
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Start Tracking →
          </Text>
        </TouchableOpacity>

      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f7',
  },

  header: {
    paddingTop: 70,
    paddingHorizontal: 25,
    marginBottom: 25,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#333',
  },

  subtitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#f48c95',
    marginTop: 5,
  },

  description: {
    marginTop: 15,
    color: '#666',
    fontSize: 16,
    lineHeight: 24,
  },

  formCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 30,
    padding: 22,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },

  inputGroup: {
    marginBottom: 22,
  },

  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },

  input: {
    backgroundColor: '#fff5f7',
    borderWidth: 1,
    borderColor: '#f7d7dc',
    borderRadius: 18,
    padding: 16,
    fontSize: 16,
  },

  privacyCard: {
    backgroundColor: '#fff1f3',
    borderRadius: 20,
    padding: 18,
    marginTop: 10,
    marginBottom: 25,
  },

  privacyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#444',
  },

  privacyText: {
    color: '#666',
    lineHeight: 22,
  },

  button: {
    backgroundColor: '#f48c95',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',

    shadowColor: '#f48c95',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});