import { router } from 'expo-router';
import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.headerCard}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>🌸</Text>
        </View>

        <View>
          <Text style={styles.hiText}>Hi, User</Text>
          <Text style={styles.subText}>
            Stay healthy & beautiful today ✨
          </Text>
        </View>
      </View>

      {/* NEXT PERIOD */}
      <View style={styles.periodCard}>
        <Text style={styles.periodTitle}>
          Your Next Period
        </Text>

        <Text style={styles.periodSubtitle}>
          Estimated in
        </Text>

        <Text style={styles.daysText}>
          3 Days
        </Text>
      </View>

      {/* QUICK ACTION */}
      <Text style={styles.sectionTitle}>
        Quick Actions
      </Text>

      <View style={styles.quickContainer}>
        
<TouchableOpacity
  style={styles.quickButton}
  onPress={() => router.push('/track-period')}
>
  <Text style={styles.quickEmoji}>🩸</Text>

  <Text style={styles.quickText}>
    Track{"\n"}Period
  </Text>
</TouchableOpacity>

        <TouchableOpacity style={styles.quickButton}>
          <Text style={styles.quickEmoji}>😊</Text>

          <Text style={styles.quickText}>
            Track{"\n"}Mood
          </Text>
        </TouchableOpacity>
      </View>

      {/* SUBSCRIPTION */}
      <Text style={styles.sectionTitle}>
        Choose Your Subscription
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.subscriptionCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518',
            }}
            style={styles.subscriptionImage}
          />

          <Text style={styles.subscriptionTitle}>
            Pink Wellness Box
          </Text>
        </View>

        <View style={styles.subscriptionCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518',
            }}
            style={styles.subscriptionImage}
          />

          <Text style={styles.subscriptionTitle}>
            Self Care Box
          </Text>
        </View>
      </ScrollView>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdecef',
    paddingHorizontal: 18,
    paddingTop: 60,
  },

  headerCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  profileCircle: {
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: '#f8d7da',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  profileText: {
    fontSize: 28,
  },

  hiText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },

  subText: {
    color: '#888',
    marginTop: 5,
  },

  periodCard: {
    backgroundColor: '#f8b9c4',
    borderRadius: 28,
    paddingVertical: 35,
    alignItems: 'center',
    marginBottom: 30,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  periodTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },

  periodSubtitle: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
  },

  daysText: {
    fontSize: 52,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },

quickContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 25,
  marginBottom: 35,
},

  quickButton: {
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: '#fff',

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  quickEmoji: {
    fontSize: 35,
    marginBottom: 10,
  },

  quickText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },

  subscriptionCard: {
    width: 220,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginRight: 18,
    padding: 12,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  subscriptionImage: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },

  subscriptionTitle: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444',
  },
});