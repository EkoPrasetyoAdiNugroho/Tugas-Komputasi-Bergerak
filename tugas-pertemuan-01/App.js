import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  SafeAreaView,
} from 'react-native';

/**
 * Pertemuan 1 — Mini Profile App
 * Lengkapi setiap TODO. Akhir target:
 *  - Header tanggal hari ini (Bahasa Indonesia).
 *  - Profile card (foto, nama, NIM, prodi, motto).
 *  - Daftar hobi (chips) dari array.
 *  - Counter "kunjungan" + tombol reset.
 *  - Tombol info menampilkan Alert.
 */

// TODO 1: Lengkapi data PROFILE di bawah dengan data Anda sendiri.
const PROFILE = {
  nama: 'Eko Prasetyo Adi Nugroho',
  nim: '105841114223',
  prodi: 'Informatika',
  motto: 'Sukses di dunia, Bahagia di akhirat',
  hobi: ['Badminton', 'Game', 'Baca Komik'], // boleh tambah lagi
  fotoUrl: 'https://drive.google.com/uc?export=view&id=1Bh0ExPSMWytuvSi1ND3gu8J8DtVPrWRf',
};

export default function App() {
  // TODO 2: Buat state `kunjungan` (number, default 0) dengan useState.
  const [kunjungan,setKunjungan] = useState(0);
  const[kopi, setKopi] = useState(0);
  const[air, setAir] = useState(0);
  // TODO 3: Buat variabel `tanggal` berisi tanggal hari ini dalam Bahasa Indonesia.
  // Petunjuk: new Date().toLocaleDateString('id-ID', { weekday:'long', day:'numeric', month:'long', year:'numeric' })
  const tanggal = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month : 'long',
    year: 'numeric'
  });
    // TODO 4: Tampilkan Alert berisi nama Anda dan tanggal.
  const showInfo = () => {
    Alert.alert(
      'Tentang Aplikasi',
      `Halo ,saya ${PROFILE.nama}\nHari ini: ${tanggal}`
    )
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appTitle}>Halo Komputasi Bergerak 👋</Text>
          <Text style={styles.subtitle}>{tanggal}</Text>
          {/* TODO 5: Tampilkan {tanggal} dengan style subtitle */}
        </View>

        {/* Profile Card */}
        <View style={styles.card}>
          <Image
            source={{uri: PROFILE.fotoUrl}}
            style={styles.avatar}
          />
          <Text style={styles.name}>{PROFILE.nama}</Text>
          <Text style={styles.role}>
            {PROFILE.prodi} . {PROFILE.nim}
          </Text>
          <Text style={styles.motto}>
            {PROFILE.motto}
          </Text>
          {/* TODO 6: Image dengan source={{ uri: PROFILE.fotoUrl }} dan style avatar */}
          {/* TODO 7: Text nama, role (prodi · NIM), motto */}
        </View>

        {/* Hobi Chips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hobi</Text>
          <View style={styles.chipRow}>
            {PROFILE.hobi.map((h, index) => (
              <View key={index} style={styles.chip}>
              <Text style={styles.chipText}>{h}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Counter */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Counter Kunjungan</Text>
          {/* TODO 9*/}
          <Text style={styles.counter}>
            {kunjungan} {kunjungan >= 5 ? '🔥' : ''}
          </Text>
          {/* TODO 10 */}
          <Pressable
          style={styles.btn}
          onPress={() => setKunjungan(kunjungan + 1)}
          >
            <Text style={styles.btntext}>
              Tambah Kunjungan
            </Text>
          </Pressable>
          {/* TODO 11 */}
          <Pressable
          style={[styles.btn, styles.btnSecondary]}
          onPress={() => setKunjungan (0)}
          >
            <Text style={{ color: '#541A1A', fontWeight: '600'}}>
              Reset
            </Text>
          </Pressable>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Counter Kopi ☕
          </Text>
          <Text style={styles.counter}>
            {kopi}{kopi >= 5 ? '🔥' : ''}
          </Text>
          <Pressable
            style={styles.btn}
            onPress={() => setKopi(kopi + 1)}
            >
              <Text style={{ color: '#541A1A', fontWeight: 700}}>
                Tambah Kopi
              </Text>
            </Pressable>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Counter Air 💧
          </Text>
          <Text style={styles.counter}>
            {air}{air >= 5 ? '🔥' : ''}
          </Text>
          <Pressable
            style={styles.btn}
            onPress={() => setAir(air + 1)}
            >
              <Text style={{ color: '#541A1A', fontWeight: 700}}>
                Tambah Air
              </Text>
            </Pressable>
        </View>
        {/* TODO 12: Pressable ghost "Tentang aplikasi ini" memanggil showInfo */}
        <Pressable
          style={styles.btnGhost}
          onPress={showInfo}
          >
            <Text style={{ color: '#F1E2D1', fontWeight: '600'}}>
              Tentang Aplikasi Ini
            </Text>
        </Pressable>
        <Pressable
        style={styles.btnGhost}
        onPress={() =>
          Alert.alert(
            'Bagikan Profil',
            `Nama: ${PROFILE.nama}
        Prodi: ${PROFILE.prodi}
        Motoo: ${PROFILE.motto}`
          )
        }
      >
        <Text style={{ color: '#F1E2D1', fontWeight: '600' }}>
          Bagikan Profil
        </Text>
      </Pressable>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#810B38' },
  scroll: { padding: 16, gap: 16 },
  header: { alignItems: 'center', marginTop: 8 },
  appTitle: { fontSize: 22, fontWeight: 'bold', color: '#ffffff' },
  subtitle: { color: '#F5F5F5', marginTop: 4 },
  card: {
    backgroundColor: '#F1E2D1',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
  },
  avatar: { width: 110, height: 110, borderRadius: 55, marginBottom: 12 },
  name: { fontSize: 20, fontWeight: '700', color: '#0f172a' },
  role: { color: '#64748b', marginTop: 4 },
  motto: { marginTop: 10, fontStyle: 'italic', color: '#093C5D', textAlign: 'center' },
  section: { backgroundColor: '#F1E2D1', borderRadius: 16, padding: 16, gap: 10 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#0f172a' },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: '#DCC3AA', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999 },
  chipText: { color: '#541A1A', fontWeight: '600' },
  counter: { fontSize: 28, fontWeight: '800', color: '#541A1A' },
  btn: { backgroundColor: '#DCC3AA', padding: 12, borderRadius: 10, alignItems: 'center' },
  btnSecondary: { backgroundColor: '#DCC3AA', borderWidth: 1, borderColor: '#DCC3AA' },
  btnText: { color: '#fff', fontWeight: '600' },
  btnGhost: { padding: 12, alignItems: 'center' },
});
