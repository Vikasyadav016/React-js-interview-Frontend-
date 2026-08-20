import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Svg,
  Circle,
  Path,
  Rect,
} from "@react-pdf/renderer";

const student = {
  name: "RAHUL KUMAR",
  studentId: "STU-2026-00125",
  rollNumber: "240512345678",
  course: "B.Sc. Computer Science",
  semester: "Semester VI",
  department: "Computer Science",
  dateOfBirth: "15/08/2001",
  bloodGroup: "B+",
  phone: "+91 98765 43210",
  email: "rahul@example.com",
  session: "2026–27",
  validUntil: "31 March 2027",
  address: "New Delhi, Delhi",
  emergencyContact: "+91 98765 00000",
};

const styles = StyleSheet.create({
  page: {
    width: 242.65,
    height: 153.03,
    backgroundColor: "#e5e7eb",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    width: 242.65,
    height: 153.03,
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },

  /* ---------- FRONT ---------- */

  frontHeader: {
    height: 42,
    backgroundColor: "#123b7a",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },

  logoText: {
    color: "#123b7a",
    fontSize: 8,
    fontWeight: "bold",
  },

  institutionName: {
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "bold",
  },

  institutionSub: {
    color: "#dbeafe",
    fontSize: 5.5,
    marginTop: 2,
  },

  cardTitle: {
    position: "absolute",
    right: 10,
    top: 15,
    color: "#ffffff",
    fontSize: 6,
    fontWeight: "bold",
  },

  frontBody: {
    padding: 9,
    flexDirection: "row",
  },

  photoContainer: {
    width: 54,
    height: 66,
    borderWidth: 1,
    borderColor: "#94a3b8",
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  details: {
    flex: 1,
  },

  studentName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
  },

  field: {
    flexDirection: "row",
    marginBottom: 3,
  },

  fieldLabel: {
    width: 50,
    fontSize: 5.5,
    color: "#64748b",
  },

  fieldValue: {
    flex: 1,
    fontSize: 6.5,
    fontWeight: "bold",
    color: "#1e293b",
  },

  idStrip: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 21,
    backgroundColor: "#f1f5f9",
    borderTopWidth: 1,
    borderTopColor: "#cbd5e1",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  idText: {
    fontSize: 6,
    color: "#334155",
  },

  /* ---------- BACK ---------- */

  backHeader: {
    height: 28,
    backgroundColor: "#123b7a",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  backTitle: {
    color: "#ffffff",
    fontSize: 8,
    fontWeight: "bold",
  },

  backBody: {
    padding: 9,
  },

  instruction: {
    fontSize: 5.7,
    color: "#334155",
    lineHeight: 1.45,
    marginBottom: 3,
  },

  emergencyBox: {
    marginTop: 5,
    padding: 6,
    backgroundColor: "#eff6ff",
    borderWidth: 1,
    borderColor: "#bfdbfe",
  },

  emergencyTitle: {
    fontSize: 6,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 3,
  },

  emergencyText: {
    fontSize: 5.5,
    color: "#334155",
  },

  backBottom: {
    position: "absolute",
    bottom: 7,
    left: 9,
    right: 9,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  signature: {
    width: 65,
    borderTopWidth: 1,
    borderTopColor: "#64748b",
    paddingTop: 2,
    fontSize: 5,
    textAlign: "center",
  },

  validity: {
    fontSize: 5.5,
    color: "#475569",
  },
});


function ProfileSVG() {
  return (
    <Svg width="54" height="66" viewBox="0 0 54 66">
      <Rect width="54" height="66" fill="#f1f5f9" />

      <Circle
        cx="27"
        cy="22"
        r="11"
        fill="#94a3b8"
      />

      <Path
        d="M9 61 C10 43 18 36 27 36 C36 36 44 43 45 61"
        fill="#94a3b8"
      />
    </Svg>
  );
}


function StudentFront() {
  return (
    <Page size={[242.65, 153.03]} style={styles.page}>

      <View style={styles.card}>

        <View style={styles.frontHeader}>

          <View style={styles.logo}>
            <Text style={styles.logoText}>UNI</Text>
          </View>

          <View>
            <Text style={styles.institutionName}>
              NATIONAL INSTITUTE OF TECHNOLOGY
            </Text>

            <Text style={styles.institutionSub}>
              Academic & Student Services
            </Text>
          </View>

          {/* <Text style={styles.cardTitle}>
            STUDENT ID CARD
          </Text> */}

        </View>

        <View style={styles.frontBody}>

          <View style={styles.photoContainer}>
            <ProfileSVG />
          </View>

          <View style={styles.details}>

            <Text style={styles.studentName}>
              {student.name}
            </Text>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Student ID</Text>
              <Text style={styles.fieldValue}>
                {student.studentId}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Roll No.</Text>
              <Text style={styles.fieldValue}>
                {student.rollNumber}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Course</Text>
              <Text style={styles.fieldValue}>
                {student.course}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Department</Text>
              <Text style={styles.fieldValue}>
                {student.department}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Session</Text>
              <Text style={styles.fieldValue}>
                {student.session}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Blood</Text>
              <Text style={styles.fieldValue}>
                {student.bloodGroup}
              </Text>
            </View>

          </View>

        </View>

        <View style={styles.idStrip}>
          <Text style={styles.idText}>
            VALID UNTIL: {student.validUntil}
          </Text>

          <Text style={styles.idText}>
            {student.studentId}
          </Text>
        </View>

      </View>

    </Page>
  );
}


function StudentBack() {
  return (
    <Page size={[242.65, 153.03]} style={styles.page}>

      <View style={styles.card}>

        <View style={styles.backHeader}>
          <Text style={styles.backTitle}>
            STUDENT ID CARD — IMPORTANT INFORMATION
          </Text>
        </View>

        <View style={styles.backBody}>

          <Text style={styles.instruction}>
            1. This identity card is the property of the institution and must
            be carried by the student while on campus.
          </Text>

          <Text style={styles.instruction}>
            2. The card is non-transferable and must not be used by another
            person.
          </Text>

          <Text style={styles.instruction}>
            3. If this card is lost, immediately report the loss to the
            appropriate institutional office.
          </Text>

          <Text style={styles.instruction}>
            4. The card should be returned when requested by the institution
            or when the student's enrollment ends.
          </Text>

          <Text style={styles.instruction}>
            5. Any unauthorized alteration or misuse of this card may result
            in disciplinary action.
          </Text>

          <View style={styles.emergencyBox}>

            <Text style={styles.emergencyTitle}>
              EMERGENCY / CONTACT
            </Text>

            <Text style={styles.emergencyText}>
              Student: {student.phone}
            </Text>

            <Text style={styles.emergencyText}>
              Emergency: {student.emergencyContact}
            </Text>

            <Text style={styles.emergencyText}>
              Email: {student.email}
            </Text>

          </View>

        </View>

        <View style={styles.backBottom}>

          <Text style={styles.signature}>
            Authorized Signature
          </Text>

          <Text style={styles.validity}>
            Valid: {student.validUntil}
          </Text>

        </View>

      </View>

    </Page>
  );
}


export function StudentICardPDF() {
  return (
    <Document
      title={`Student ID Card - ${student.studentId}`}
      author="Institution"
    >
      <StudentFront />
      <StudentBack />
    </Document>
  );
}


export default function StudentICard() {
  return (
    <PDFDownloadLink
      document={<StudentICardPDF />}
      fileName={`Student_ID_${student.studentId}.pdf`}
    >
      {({ loading }) => (
        <button disabled={loading}>
          {loading ? "Generating..." : "Download Student ID Card"}
        </button>
      )}
    </PDFDownloadLink>
  );
}