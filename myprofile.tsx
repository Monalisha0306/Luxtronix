import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function MyProfile() {
  const router = useRouter();

  const [user, setUser] = useState({
    name: 'Monali Shah',
    email: 'monali@example.com',
    contact: '9876543210',
    password: '********',
  });

  const [editableField, setEditableField] = useState('');

  const handleSave = () => {
    setEditableField('');
    alert('Changes saved successfully!');
  };

  const confirmLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes, Logout',
          onPress: () => {
            Alert.alert('Logout Successful', 'You have been logged out.');
            router.replace('/logout'); // Redirect to logout page
          },
        },
      ],
      { cancelable: true }
    );
  };

  const updateField = (field: keyof typeof user, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/profile.jpg')} // Ensure this image exists
        style={styles.profileImage}
      />

      <Field
        label="Name"
        value={user.name}
        onChange={(text) => updateField('name', text)}
        editable={editableField === 'name'}
        onEdit={() => setEditableField('name')}
      />

      <Field
        label="Email"
        value={user.email}
        onChange={(text) => updateField('email', text)}
        editable={editableField === 'email'}
        onEdit={() => setEditableField('email')}
      />

      <Field
        label="Contact"
        value={user.contact}
        onChange={(text) => updateField('contact', text)}
        editable={editableField === 'contact'}
        onEdit={() => setEditableField('contact')}
      />

      <Field
        label="Password"
        value={user.password}
        onChange={(text) => updateField('password', text)}
        editable={editableField === 'password'}
        onEdit={() => setEditableField('password')}
        secureTextEntry
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={confirmLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

function Field({
  label,
  value,
  onChange,
  editable,
  onEdit,
  secureTextEntry,
}: {
  label: string;
  value: string;
  onChange: (text: string) => void;
  editable: boolean;
  onEdit: () => void;
  secureTextEntry?: boolean;
}) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, !editable && styles.disabledInput]}
        value={value}
        editable={editable}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
      <TouchableOpacity onPress={onEdit}>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff0f5', // lavender pink
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 30,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    marginLeft: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d9b3dd',
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  disabledInput: {
    backgroundColor: '#eee',
  },
  editText: {
    color: '#C71585',
    fontSize: 14,
    textAlign: 'right',
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: '#C71585',
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButton: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C71585',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#C71585',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
