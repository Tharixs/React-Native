import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

export default About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bacground}>
        <Image
          style={styles.backgroundImage}
          source="https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          placeholder={"foto"}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View style={styles.profile}>
        <Image
          style={styles.imageProfile}
          source="https://media.licdn.com/dms/image/D5603AQExCQ18MEhlzw/profile-displayphoto-shrink_800_800/0/1690460787568?e=1697068800&v=beta&t=1wvldFHUxwE67fO5dSc48DEX9vd3jXpI9qGrXiHPvnY"
          placeholder={"foto"}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.connect}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.instagram.com/tharixs_/")
            }
          >
            <Ionicons name="logo-instagram" size={18} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/tharixs-akbar-ibnu-azis/"
              )
            }
          >
            <Ionicons name="logo-linkedin" size={18} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/Tharixs")}
          >
            <Ionicons name="logo-github" size={18} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL("https://wa.me/6281235686798")}
          >
            <Ionicons name="logo-whatsapp" size={18} color="#333" />
          </TouchableOpacity>
        </View>
        <Text style={styles.nameText}>Tharixs Akbar Ibnu Azis</Text>
        <Text style={styles.roleText}>Mobile Developer</Text>
        <Text style={styles.summary}>Summary</Text>
        <Text style={styles.summarText}>
          As an undergraduate student of Informatics Engineering Study Program
          at Politeknik Negeri Jember, I have special expertise in Android
          application development using Kotlin programming language and in web
          development using Laravel framework. During my academic journey, I had
          the opportunity to join an internship program called "Bangkit", where
          I learned the ins and outs of the Android Kotlin world and managed to
          develop my programming skills from basic to intermediate level. In my
          project, I managed to implement key features in Android and web
          applications using the latest technology. In addition, I managed to
          complete the program with outstanding achievements and earned the
          title of "Distinction Graduate", as well as being one of the nine best
          Capstone projects out of 29 projects and the best corporate Capstone
          project with the project "Fishku". A strong understanding of the basic
          concepts in Android and web development drives my commitment to
          continuously improve my skills in this field. I am excited to find
          opportunities to apply my knowledge and experience in a work
          environment that fosters growth and innovation.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  header: {
    height: "25%",
    width: "100%",
  },

  bacground: {
    height: "25%",
    width: "100%",
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    borderRadius: 6,
  },

  profile: {
    position: "absolute",
    top: "18%",
    height: 100,
    width: "100%",
    alignItems: "center",
  },

  imageProfile: {
    flex: 1,
    width: 100,
    backgroundColor: "#0553",
    borderRadius: 100,
  },

  body: {
    flex: 1,
    padding: 20,
    marginTop: 30,
  },

  connect: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
  },

  nameText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
  roleText: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    textAlign: "center",
    color: "#333",
  },

  summary: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#333",
    marginTop: 15,
  },

  summarText: {
    fontFamily: "Poppins-Light",
    fontSize: 12,
    color: "#333",
    textAlign: "justify",
  },
});
