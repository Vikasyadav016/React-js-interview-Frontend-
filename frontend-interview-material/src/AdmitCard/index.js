import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink,
  Svg,
  Path,
  Rect,
  Circle,
} from "@react-pdf/renderer";

/*
  Demo/template data.
  Replace this with data from your API/database.
*/
const candidate = {
  candidateName: "RAHUL KUMAR",
  rollNumber: "240512345678",
  registrationNumber: "CGL2026123456",
  fatherName: "RAJESH KUMAR",
  motherName: "SUNITA DEVI",
  dateOfBirth: "15/08/2001",
  category: "UR",
  gender: "MALE",

  examName: "Combined Graduate Level Examination",
  examYear: "2026",
  tier: "Tier-I",

  examDate: "18 September 2026",
  reportingTime: "08:00 AM",
  examTime: "09:00 AM – 10:00 AM",

  centerName: "ABC COMPUTER BASED TEST CENTRE",
  centerAddress:
    "Plot No. 25, Industrial Area, New Delhi, Delhi – 110020",

  city: "NEW DELHI",
  state: "DELHI",

  applicationNumber: "CGL2026123456",
};

/* -------------------------------------------------------
   Styles
------------------------------------------------------- */

const styles = StyleSheet.create({
  page: {
    width: "595.28pt",
    height: "841.89pt",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 34,
    paddingRight: 34,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#111827",
    backgroundColor: "#ffffff",
  },

  header: {
    borderWidth: 1,
    borderColor: "#1f2937",
  },

  headerTop: {
    minHeight: 82,
    backgroundColor: "#f8fafc",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },

  logoBox: {
    width: 62,
    height: 62,
    borderWidth: 1,
    borderColor: "#475569",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    backgroundColor: "#ffffff",
  },

  logoText: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#1e3a8a",
    textAlign: "center",
  },

  headerContent: {
    flex: 1,
    alignItems: "center",
  },

  organization: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },

  examTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1d4ed8",
    marginBottom: 4,
  },

  documentTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#b91c1c",
  },

  sessionBox: {
    width: 70,
    borderWidth: 1,
    borderColor: "#475569",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  sessionLabel: {
    fontSize: 7,
    color: "#475569",
    marginBottom: 3,
  },

  sessionValue: {
    fontSize: 12,
    fontWeight: "bold",
  },

  notice: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#d97706",
    backgroundColor: "#fffbeb",
    padding: 7,
  },

  noticeText: {
    fontSize: 8,
    color: "#92400e",
    lineHeight: 1.4,
  },

  section: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#334155",
  },

  sectionTitle: {
    backgroundColor: "#1e3a8a",
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "bold",
    padding: 6,
  },

  candidateBody: {
    flexDirection: "row",
  },

  details: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#cbd5e1",
    minHeight: 26,
  },

  label: {
    width: "40%",
    backgroundColor: "#f1f5f9",
    padding: 6,
    fontWeight: "bold",
    borderRightWidth: 1,
    borderRightColor: "#cbd5e1",
  },

  value: {
    flex: 1,
    padding: 6,
  },

  photoArea: {
    width: 110,
    borderLeftWidth: 1,
    borderLeftColor: "#334155",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  photo: {
    width: 82,
    height: 102,
    borderWidth: 1,
    borderColor: "#64748b",
    backgroundColor: "#f8fafc",
  },

  photoCaption: {
    fontSize: 7,
    color: "#475569",
    marginTop: 5,
    textAlign: "center",
  },

  examGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  examCell: {
    width: "50%",
    minHeight: 42,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#cbd5e1",
    padding: 6,
  },

  examCellLast: {
    borderRightWidth: 0,
  },

  examLabel: {
    fontSize: 7,
    color: "#64748b",
    marginBottom: 3,
  },

  examValue: {
    fontSize: 9,
    fontWeight: "bold",
  },

  centerBox: {
    padding: 9,
  },

  centerName: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },

  centerAddress: {
    fontSize: 8,
    lineHeight: 1.4,
    color: "#374151",
  },

  bottomGrid: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },

  signatureBox: {
    flex: 1,
    height: 68,
    borderWidth: 1,
    borderColor: "#64748b",
    padding: 7,
  },

  signatureTitle: {
    fontSize: 7,
    color: "#64748b",
  },

  signatureLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#64748b",
    marginTop: 35,
  },

  barcodeBox: {
    width: 150,
    height: 68,
    borderWidth: 1,
    borderColor: "#64748b",
    alignItems: "center",
    justifyContent: "center",
  },

  barcodeText: {
    fontSize: 7,
    marginTop: 4,
    letterSpacing: 1,
  },

  footer: {
    position: "absolute",
    left: 34,
    right: 34,
    bottom: 15,
    borderTopWidth: 1,
    borderTopColor: "#cbd5e1",
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  footerText: {
    fontSize: 7,
    color: "#64748b",
  },

  pageNumber: {
    fontSize: 7,
    color: "#64748b",
  },

  declarationIntro: {
    marginTop: 10,
    backgroundColor: "#eff6ff",
    borderWidth: 1,
    borderColor: "#93c5fd",
    padding: 9,
  },

  declarationText: {
    fontSize: 9,
    lineHeight: 1.6,
  },

  instructionList: {
    padding: 10,
  },

  instruction: {
    flexDirection: "row",
    marginBottom: 7,
  },

  bullet: {
    width: 15,
    fontWeight: "bold",
    color: "#1d4ed8",
  },

  instructionText: {
    flex: 1,
    fontSize: 8.5,
    lineHeight: 1.45,
  },

  warning: {
    marginTop: 10,
    padding: 9,
    backgroundColor: "#fef2f2",
    borderWidth: 1,
    borderColor: "#fca5a5",
  },

  warningTitle: {
    fontWeight: "bold",
    color: "#991b1b",
    marginBottom: 5,
  },

  warningText: {
    fontSize: 8,
    color: "#7f1d1d",
    lineHeight: 1.45,
  },

  acknowledgement: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#64748b",
    padding: 10,
  },

  acknowledgementTitle: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 10,
  },

  acknowledgementRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  acknowledgementField: {
    width: "30%",
    borderBottomWidth: 1,
    borderBottomColor: "#64748b",
    paddingBottom: 4,
    fontSize: 7,
    color: "#64748b",
  },
});

/* -------------------------------------------------------
   SVG profile placeholder
------------------------------------------------------- */

function ProfilePlaceholder() {
  return (
    <Svg
      width="82"
      height="102"
      viewBox="0 0 82 102"
    >
      <Rect
        x="0"
        y="0"
        width="82"
        height="102"
        fill="#f8fafc"
      />

      <Circle
        cx="41"
        cy="34"
        r="17"
        fill="#94a3b8"
      />

      <Path
        d="M15 91 C17 65, 28 55, 41 55 C54 55, 65 65, 67 91"
        fill="#94a3b8"
      />
    </Svg>
  );
}

/* -------------------------------------------------------
   Simple barcode-style visual
------------------------------------------------------- */

function Barcode() {
  const bars = [
    2, 4, 1, 3, 2, 6, 1, 4, 3, 2, 5, 1,
    2, 6, 3, 1, 4, 2, 5, 2, 1, 4, 3, 6,
  ];

  let x = 10;

  return (
    <Svg width="130" height="38" viewBox="0 0 130 38">
      <Rect width="130" height="38" fill="#ffffff" />

      {bars.map((width, index) => {
        const currentX = x;
        x += width + 2;

        return (
          <Rect
            key={index}
            x={currentX}
            y="3"
            width={width}
            height="30"
            fill="#111827"
          />
        );
      })}
    </Svg>
  );
}

/* -------------------------------------------------------
   PAGE 1
------------------------------------------------------- */

function FirstPage() {
  return (
    <Page size="A4" style={styles.page} wrap={false}>

      <View style={styles.header}>

        <View style={styles.headerTop}>

          <View style={styles.logoBox}>
            <Text style={styles.logoText}>
              EXAM
            </Text>
            <Text style={styles.logoText}>
              PORTAL
            </Text>
          </View>

          <View style={styles.headerContent}>
            <Text style={styles.organization}>
              EXAMINATION AUTHORITY
            </Text>

            <Text style={styles.examTitle}>
              COMBINED GRADUATE LEVEL EXAMINATION
            </Text>

            <Text style={styles.documentTitle}>
              COMPUTER BASED EXAMINATION — ADMIT CARD
            </Text>
          </View>

          <View style={styles.sessionBox}>
            <Text style={styles.sessionLabel}>
              YEAR
            </Text>

            <Text style={styles.sessionValue}>
              {candidate.examYear}
            </Text>
          </View>

        </View>

      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          IMPORTANT: This is a demonstration/template admit-card layout.
          Candidates should rely only on the admit card issued through the
          official examination authority for actual examination details.
        </Text>
      </View>

      {/* Candidate details */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          CANDIDATE DETAILS
        </Text>

        <View style={styles.candidateBody}>

          <View style={styles.details}>

            <View style={styles.row}>
              <Text style={styles.label}>Candidate Name</Text>
              <Text style={styles.value}>{candidate.candidateName}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Roll Number</Text>
              <Text style={styles.value}>{candidate.rollNumber}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Registration Number</Text>
              <Text style={styles.value}>
                {candidate.registrationNumber}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Father's Name</Text>
              <Text style={styles.value}>{candidate.fatherName}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Mother's Name</Text>
              <Text style={styles.value}>{candidate.motherName}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Date of Birth</Text>
              <Text style={styles.value}>{candidate.dateOfBirth}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Category / Gender</Text>
              <Text style={styles.value}>
                {candidate.category} / {candidate.gender}
              </Text>
            </View>

          </View>

          <View style={styles.photoArea}>
            <View style={styles.photo}>
              <ProfilePlaceholder />
            </View>

            <Text style={styles.photoCaption}>
              Candidate Photograph
            </Text>
          </View>

        </View>
      </View>

      {/* Examination details */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          EXAMINATION DETAILS
        </Text>

        <View style={styles.examGrid}>

          <View style={styles.examCell}>
            <Text style={styles.examLabel}>EXAMINATION</Text>
            <Text style={styles.examValue}>
              {candidate.examName}
            </Text>
          </View>

          <View style={[styles.examCell, styles.examCellLast]}>
            <Text style={styles.examLabel}>TIER</Text>
            <Text style={styles.examValue}>
              {candidate.tier}
            </Text>
          </View>

          <View style={styles.examCell}>
            <Text style={styles.examLabel}>EXAMINATION DATE</Text>
            <Text style={styles.examValue}>
              {candidate.examDate}
            </Text>
          </View>

          <View style={[styles.examCell, styles.examCellLast]}>
            <Text style={styles.examLabel}>REPORTING TIME</Text>
            <Text style={styles.examValue}>
              {candidate.reportingTime}
            </Text>
          </View>

          <View style={styles.examCell}>
            <Text style={styles.examLabel}>EXAMINATION TIME</Text>
            <Text style={styles.examValue}>
              {candidate.examTime}
            </Text>
          </View>

          <View style={[styles.examCell, styles.examCellLast]}>
            <Text style={styles.examLabel}>APPLICATION NUMBER</Text>
            <Text style={styles.examValue}>
              {candidate.applicationNumber}
            </Text>
          </View>

        </View>
      </View>

      {/* Exam centre */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          EXAMINATION CENTRE
        </Text>

        <View style={styles.centerBox}>

          <Text style={styles.centerName}>
            {candidate.centerName}
          </Text>

          <Text style={styles.centerAddress}>
            {candidate.centerAddress}
          </Text>

          <Text style={{ marginTop: 5, fontSize: 8 }}>
            City: {candidate.city} | State: {candidate.state}
          </Text>

        </View>

      </View>

      {/* Barcode / signature */}

      <View style={styles.bottomGrid}>

        <View style={styles.signatureBox}>
          <Text style={styles.signatureTitle}>
            CANDIDATE SIGNATURE
          </Text>

          <View style={styles.signatureLine} />
        </View>

        <View style={styles.barcodeBox}>
          <Barcode />

          <Text style={styles.barcodeText}>
            {candidate.rollNumber}
          </Text>
        </View>

      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Admit Card — Candidate Copy
        </Text>

        <Text style={styles.pageNumber}>
          Page 1 of 2
        </Text>
      </View>

    </Page>
  );
}

/* -------------------------------------------------------
   PAGE 2
------------------------------------------------------- */

function SecondPage() {
  const instructions = [
    "Candidates should report to the examination centre at the reporting time mentioned on Page 1.",
    "Candidates must carry the valid documents and items specified in the official examination instructions.",
    "The candidate should carefully verify the name, roll number, photograph, examination date, time and centre details before appearing.",
    "Electronic devices, communication devices or other prohibited items should not be carried into the examination premises unless expressly permitted by the official instructions.",
    "Candidates should follow all instructions provided by the examination centre staff and invigilators.",
    "Late entry may be subject to the rules applicable to the examination session.",
    "The admit card should be preserved safely until completion of the applicable examination process.",
    "Candidates should check the latest official examination instructions before travelling to the examination centre.",
  ];

  return (
    <Page size="A4" style={styles.page} wrap={false}>

      <View style={styles.header}>

        <View style={styles.headerTop}>

          <View style={styles.logoBox}>
            <Text style={styles.logoText}>
              EXAM
            </Text>
            <Text style={styles.logoText}>
              PORTAL
            </Text>
          </View>

          <View style={styles.headerContent}>
            <Text style={styles.organization}>
              EXAMINATION AUTHORITY
            </Text>

            <Text style={styles.examTitle}>
              CANDIDATE DECLARATION & EXAMINATION INSTRUCTIONS
            </Text>
          </View>

        </View>

      </View>

      <View style={styles.declarationIntro}>

        <Text style={styles.declarationText}>
          I hereby declare that the information provided by me in connection
          with this examination is true and correct to the best of my knowledge.
          I understand that I must comply with the examination rules and
          instructions applicable to my examination.
        </Text>

      </View>

      {/* Instructions */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          IMPORTANT INSTRUCTIONS FOR CANDIDATES
        </Text>

        <View style={styles.instructionList}>

          {instructions.map((instruction, index) => (
            <View
              key={index}
              style={styles.instruction}
            >
              <Text style={styles.bullet}>
                {index + 1}.
              </Text>

              <Text style={styles.instructionText}>
                {instruction}
              </Text>
            </View>
          ))}

        </View>

      </View>

      {/* Things to carry */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          BEFORE LEAVING FOR THE EXAMINATION
        </Text>

        <View style={styles.instructionList}>

          <View style={styles.instruction}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.instructionText}>
              Verify the examination date, reporting time and centre address.
            </Text>
          </View>

          <View style={styles.instruction}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.instructionText}>
              Keep the required identification/documentation ready according
              to the official examination instructions.
            </Text>
          </View>

          <View style={styles.instruction}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.instructionText}>
              Plan your journey so that you arrive at the examination centre
              before the reporting time.
            </Text>
          </View>

        </View>

      </View>

      {/* Warning */}

      <View style={styles.warning}>

        <Text style={styles.warningTitle}>
          IMPORTANT
        </Text>

        <Text style={styles.warningText}>
          The information shown in this template is illustrative. For an actual
          examination, candidates must follow the latest instructions,
          permitted-items list, identity requirements, reporting rules and
          other directions issued by the relevant examination authority.
        </Text>

      </View>

      {/* Acknowledgement */}

      <View style={styles.acknowledgement}>

        <Text style={styles.acknowledgementTitle}>
          CANDIDATE ACKNOWLEDGEMENT
        </Text>

        <Text style={styles.instructionText}>
          I have read and understood the instructions applicable to the
          examination and agree to follow the examination rules.
        </Text>

        <View style={styles.acknowledgementRow}>

          <Text style={styles.acknowledgementField}>
            Candidate Signature
          </Text>

          <Text style={styles.acknowledgementField}>
            Date
          </Text>

          <Text style={styles.acknowledgementField}>
            Place
          </Text>

        </View>

      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Candidate Instructions
        </Text>

        <Text style={styles.pageNumber}>
          Page 2 of 2
        </Text>
      </View>

    </Page>
  );
}

/* -------------------------------------------------------
   PDF DOCUMENT
------------------------------------------------------- */

export function CGLAdmitCardPDF() {
  return (
    <Document
      title={`CGL Admit Card - ${candidate.rollNumber}`}
      author="Examination Portal"
      subject="Candidate Admit Card"
      creator="React PDF"
    >
      <FirstPage />
      <SecondPage />
    </Document>
  );
}

/* -------------------------------------------------------
   DOWNLOAD BUTTON
------------------------------------------------------- */

export default function AdmitCard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#e2e8f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          background: "#ffffff",
          borderRadius: 16,
          padding: 28,
          boxShadow: "0 20px 50px rgba(15, 23, 42, 0.12)",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 25,
            color: "#0f172a",
          }}
        >
          CGL Admit Card
        </h1>

        <p
          style={{
            color: "#64748b",
            marginTop: 8,
            marginBottom: 24,
          }}
        >
          Generate a fixed A4 multi-page PDF candidate document.
        </p>

        <PDFDownloadLink
          document={<CGLAdmitCardPDF />}
          fileName={`CGL_Admit_Card_${candidate.rollNumber}.pdf`}
        >
          {({ loading }) => (
            <button
              type="button"
              disabled={loading}
              style={{
                border: 0,
                borderRadius: 9,
                background: loading ? "#94a3b8" : "#1d4ed8",
                color: "#ffffff",
                padding: "13px 22px",
                fontSize: 14,
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading
                ? "Generating PDF..."
                : "Download Admit Card"}
            </button>
          )}
        </PDFDownloadLink>

        <div
          style={{
            marginTop: 25,
            padding: 16,
            background: "#f8fafc",
            borderRadius: 10,
            fontSize: 13,
            color: "#475569",
            lineHeight: 1.6,
          }}
        >
          <strong>PDF characteristics</strong>

          <ul>
            <li>Fixed A4 page size</li>
            <li>2 pages</li>
            <li>Does not reflow on mobile</li>
            <li>Print-friendly</li>
            <li>Vector text and SVG graphics</li>
            <li>Downloadable as a standard PDF</li>
          </ul>
        </div>
      </div>
    </div>
  );
}