import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native'

const Details = ({ navigation, route }) => {
  const reminder = route.params.reminder
  const [title, setTitle] = useState(reminder.title)
  const [notes, setNotes] = useState(reminder.notes)

  const handleSave = () => {
    const newReminder = { ...reminder }
    newReminder.title = title
    newReminder.notes = notes
    route.params.saveReminder(newReminder)
    navigation.goBack()
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reminder Details</Text>
      <Text style={styles.caption}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Awsome title"
      />
      <Text style={styles.caption}>Notes</Text>
      <TextInput
        style={styles.input}
        value={notes}
        onChangeText={setNotes}
        multiline
        numberOfLines={10}
        placeholder="Write something here..."
      />
      <Button
        title='Save'
        onPress={handleSave}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#435460',
    textAlign: 'center',
    marginBottom: 20,
  },
  caption: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 12,
    marginLeft: 12,
    marginBottom: 4,
  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 0,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
    padding: 10,
  },
});

export default Details
