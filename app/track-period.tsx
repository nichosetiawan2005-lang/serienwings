import React, { useState } from 'react';

import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { Calendar } from 'react-native-calendars';

export default function TrackPeriodScreen() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [records, setRecords] = useState<any[]>([]);

  const calculateDuration = (start: string, end: string) => {
    const startD = new Date(start);
    const endD = new Date(end);

    const diffTime = endD.getTime() - startD.getTime();

    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  };

  const saveCycle = () => {
    if (!startDate || !endDate) return;

    const duration = calculateDuration(startDate, endDate);

    const newData = {
      start: startDate,
      end: endDate,
      duration,
    };

    setRecords([...records, newData]);

    setStartDate('');
    setEndDate('');
  };

  const calculateQuarterAverage = () => {
    if (records.length === 0) return 0;

    const total = records.reduce(
      (sum, item) => sum + item.duration,
      0
    );

    return (total / records.length).toFixed(1);
  };

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Track Your Period 🌸
        </Text>

        <Text style={styles.subtitle}>
          Select your start and end dates
        </Text>
      </View>

      {/* CALENDAR */}
      <View style={styles.calendarCard}>

        <Text style={styles.sectionTitle}>
          Period Start
        </Text>

        <Calendar
          onDayPress={(day) => setStartDate(day.dateString)}
          markedDates={{
            [startDate]: {
              selected: true,
              selectedColor: '#f48c95',
            },
          }}
          theme={{
            selectedDayBackgroundColor: '#f48c95',
            todayTextColor: '#f48c95',
            arrowColor: '#f48c95',
          }}
        />

        <View style={{ height: 25 }} />

        <Text style={styles.sectionTitle}>
          Period End
        </Text>

        <Calendar
          onDayPress={(day) => setEndDate(day.dateString)}
          markedDates={{
            [endDate]: {
              selected: true,
              selectedColor: '#f48c95',
            },
          }}
          theme={{
            selectedDayBackgroundColor: '#f48c95',
            todayTextColor: '#f48c95',
            arrowColor: '#f48c95',
          }}
        />

        {/* DATE INFO */}
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>
            Start: {startDate || '-'}
          </Text>

          <Text style={styles.dateText}>
            End: {endDate || '-'}
          </Text>
        </View>

        {/* SAVE BUTTON */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={saveCycle}
        >
          <Text style={styles.saveText}>
            Save
          </Text>
        </TouchableOpacity>

      </View>

      {/* MY CYCLES */}
      <View style={styles.cyclesCard}>

        <Text style={styles.cyclesTitle}>
          🌸 My Cycles
        </Text>

        <Text style={styles.averageText}>
          Quarterly Average
        </Text>

        <Text style={styles.averageNumber}>
          {calculateQuarterAverage()} Days
        </Text>

        <View style={{ marginTop: 20 }}>
          {records.map((item, index) => (
            <View key={index} style={styles.recordCard}>

              <Text style={styles.recordText}>
                Start: {item.start}
              </Text>

              <Text style={styles.recordText}>
                End: {item.end}
              </Text>

              <Text style={styles.recordDays}>
                {item.duration} Days
              </Text>

            </View>
          ))}
        </View>

      </View>

      <View style={{ height: 60 }} />

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
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#f48c95',
  },

  subtitle: {
    marginTop: 10,
    color: '#777',
    fontSize: 16,
  },

  calendarCard: {
    backgroundColor: '#fff',
    marginHorizontal: 18,
    borderRadius: 30,
    padding: 20,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#444',
  },

  dateBox: {
    backgroundColor: '#fff5f7',
    padding: 18,
    borderRadius: 18,
    marginTop: 20,
  },

  dateText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#555',
  },

  saveButton: {
    backgroundColor: '#f48c95',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 25,
  },

  saveText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  cyclesCard: {
    backgroundColor: '#fff',
    marginTop: 25,
    marginHorizontal: 18,
    borderRadius: 30,
    padding: 20,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  cyclesTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f48c95',
    marginBottom: 20,
  },

  averageText: {
    color: '#666',
    fontSize: 18,
  },

  averageNumber: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#f48c95',
    marginTop: 10,
  },

  recordCard: {
    backgroundColor: '#fff5f7',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
  },

  recordText: {
    color: '#555',
    fontSize: 15,
    marginBottom: 4,
  },

  recordDays: {
    color: '#f48c95',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
  },
});