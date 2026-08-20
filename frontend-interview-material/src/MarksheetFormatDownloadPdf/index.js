// ```jsx
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
  Line,
} from "@react-pdf/renderer";

// =====================================================
// DUMMY DATA
// =====================================================

const student = {
  studentName: "Rahul Kumar",
  fatherName: "Rajesh Kumar",
  motherName: "Sunita Kumar",
  rollNo: "2026001234",
  registrationNo: "REG/2026/00123",
  dateOfBirth: "15/05/2010",
  schoolName: "ABC Public Senior Secondary School",
  schoolCode: "12345",
  academicYear: "2025-26",
  className: "X",
  section: "A",
};

const subjects = [
  {
    code: "101",
    name: "English",
    theory: 78,
    practical: 18,
    total: 96,
    grade: "A1",
  },
  {
    code: "102",
    name: "Hindi",
    theory: 72,
    practical: 19,
    total: 91,
    grade: "A1",
  },
  {
    code: "103",
    name: "Mathematics",
    theory: 82,
    practical: 17,
    total: 99,
    grade: "A1",
  },
  {
    code: "104",
    name: "Science",
    theory: 75,
    practical: 18,
    total: 93,
    grade: "A1",
  },
  {
    code: "105",
    name: "Social Science",
    theory: 80,
    practical: 16,
    total: 96,
    grade: "A1",
  },
];

const totalMarks = subjects.reduce(
  (sum, subject) => sum + subject.total,
  0
);

const maximumMarks = subjects.length * 100;

const percentage = (
  (totalMarks / maximumMarks) *
  100
).toFixed(2);

// =====================================================
// STYLES
// =====================================================

const styles = StyleSheet.create({
  page: {
    size: "A4",
    padding: 25,
    fontFamily: "Helvetica",
    fontSize: 8,
    color: "#111827",
    backgroundColor: "#ffffff",
  },

  documentBorder: {
    border: "1.5px solid #172554",
    minHeight: 785,
    padding: 12,
  },

  // ===================================================
  // HEADER
  // ===================================================

  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "1px solid #172554",
    paddingBottom: 10,
    marginBottom: 10,
  },

  logoContainer: {
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },

  headerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  studentPhotoContainer: {
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },

  boardName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#172554",
    textAlign: "center",
    marginBottom: 3,
  },

  boardSubtitle: {
    fontSize: 8.5,
    fontWeight: "bold",
    color: "#374151",
    textAlign: "center",
    marginBottom: 3,
  },

  boardLocation: {
    fontSize: 7,
    color: "#6b7280",
    textAlign: "center",
  },

  title: {
    marginTop: 7,
    paddingVertical: 4,
    paddingHorizontal: 18,
    border: "1px solid #172554",
    color: "#172554",
    fontSize: 10,
    fontWeight: "bold",
  },

  // ===================================================
  // SCHOOL
  // ===================================================

  schoolSection: {
    flexDirection: "row",
    borderBottom: "1px solid #9ca3af",
    paddingBottom: 7,
    marginBottom: 9,
  },

  schoolInfo: {
    flex: 1,
  },

  schoolCodeBox: {
    width: 110,
    alignItems: "flex-end",
  },

  schoolName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 3,
  },

  smallText: {
    fontSize: 7.5,
    color: "#374151",
    marginBottom: 2,
  },

  boldSmallText: {
    fontSize: 7.5,
    fontWeight: "bold",
  },

  // ===================================================
  // STUDENT DETAILS
  // ===================================================

  detailsBox: {
    border: "1px solid #6b7280",
    marginBottom: 11,
  },

  detailRow: {
    flexDirection: "row",
    minHeight: 28,
    borderBottom: "1px solid #9ca3af",
  },

  detailLastRow: {
    flexDirection: "row",
    minHeight: 28,
  },

  detailCell: {
    padding: 5,
    justifyContent: "center",
    borderRight: "1px solid #9ca3af",
  },

  detailCellLast: {
    padding: 5,
    justifyContent: "center",
  },

  detailHalf: {
    width: "50%",
  },

  detailQuarter: {
    width: "25%",
  },

  detailLabel: {
    fontSize: 6.5,
    color: "#6b7280",
    marginBottom: 2,
  },

  detailValue: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#111827",
  },

  // ===================================================
  // TABLE
  // ===================================================

  sectionTitle: {
    fontSize: 8.5,
    fontWeight: "bold",
    color: "#172554",
    marginBottom: 5,
  },

  table: {
    border: "1px solid #172554",
    marginBottom: 11,
  },

  tableHeader: {
    flexDirection: "row",
    minHeight: 30,
    backgroundColor: "#e8eefc",
    borderBottom: "1px solid #172554",
    alignItems: "center",
  },

  tableRow: {
    flexDirection: "row",
    minHeight: 28,
    borderBottom: "1px solid #9ca3af",
    alignItems: "center",
  },

  tableLastRow: {
    flexDirection: "row",
    minHeight: 28,
    alignItems: "center",
  },

  tableCell: {
    padding: 4,
    borderRight: "1px solid #9ca3af",
    justifyContent: "center",
    alignItems: "center",
  },

  tableCellLast: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  codeCol: {
    width: "11%",
  },

  subjectCol: {
    width: "32%",
    alignItems: "flex-start",
  },

  marksCol: {
    width: "14%",
  },

  totalCol: {
    width: "15%",
  },

  gradeCol: {
    width: "14%",
  },

  tableHeaderText: {
    fontSize: 6.8,
    fontWeight: "bold",
    textAlign: "center",
  },

  tableText: {
    fontSize: 7.5,
    textAlign: "center",
  },

  subjectText: {
    fontSize: 7.5,
  },

  // ===================================================
  // SUMMARY
  // ===================================================

  summaryBox: {
    border: "1px solid #6b7280",
    marginBottom: 11,
  },

  summaryRow: {
    flexDirection: "row",
    minHeight: 32,
    borderBottom: "1px solid #9ca3af",
  },

  summaryLastRow: {
    flexDirection: "row",
    minHeight: 32,
  },

  summaryCell: {
    width: "25%",
    padding: 5,
    borderRight: "1px solid #9ca3af",
    alignItems: "center",
    justifyContent: "center",
  },

  summaryCellLast: {
    width: "25%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  summaryLabel: {
    fontSize: 6.5,
    color: "#6b7280",
    marginBottom: 2,
  },

  summaryValue: {
    fontSize: 9,
    fontWeight: "bold",
  },

  // ===================================================
  // RESULT
  // ===================================================

  resultBox: {
    border: "1px solid #172554",
    backgroundColor: "#f8fafc",
    padding: 8,
    marginBottom: 12,
  },

  resultRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  resultTitle: {
    width: "25%",
    fontSize: 8,
    fontWeight: "bold",
    color: "#172554",
  },

  resultPass: {
    width: "25%",
    fontSize: 9,
    fontWeight: "bold",
    color: "#166534",
  },

  resultMessage: {
    width: "50%",
    fontSize: 7.5,
    textAlign: "right",
    color: "#4b5563",
  },

  // ===================================================
  // FOOTER
  // ===================================================

  footer: {
    marginTop: "auto",
  },

  declaration: {
    fontSize: 6.8,
    color: "#4b5563",
    lineHeight: 1.4,
    marginBottom: 32,
  },

  signatureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  signature: {
    width: "27%",
    alignItems: "center",
  },

  signatureLine: {
    width: "90%",
    borderTop: "1px solid #111827",
    marginBottom: 4,
  },

  signatureText: {
    fontSize: 6.8,
    fontWeight: "bold",
    textAlign: "center",
  },

  footerNote: {
    textAlign: "center",
    fontSize: 6,
    color: "#9ca3af",
    marginTop: 12,
  },
});

// =====================================================
// DUMMY BOARD LOGO
// =====================================================

const DummyBoardLogo = () => {
  return (
    <Svg width="58" height="58" viewBox="0 0 100 100">
      {/* Outer circle */}
      <Circle
        cx="50"
        cy="50"
        r="46"
        fill="#ffffff"
        stroke="#172554"
        strokeWidth="4"
      />

      {/* Inner circle */}
      <Circle
        cx="50"
        cy="50"
        r="37"
        fill="#e8eefc"
        stroke="#c4b46a"
        strokeWidth="2"
      />

      {/* Book */}
      <Path
        d="M23 40
           C32 36 41 38 50 44
           C59 38 68 36 77 40
           L77 65
           C68 61 59 62 50 68
           C41 62 32 61 23 65 Z"
        fill="#172554"
      />

      {/* Book center */}
      <Line
        x1="50"
        y1="44"
        x2="50"
        y2="68"
        stroke="#ffffff"
        strokeWidth="2"
      />

      {/* Laurel left */}
      <Path
        d="M26 72 C18 65 17 54 20 46"
        fill="none"
        stroke="#c4b46a"
        strokeWidth="2"
      />

      {/* Laurel right */}
      <Path
        d="M74 72 C82 65 83 54 80 46"
        fill="none"
        stroke="#c4b46a"
        strokeWidth="2"
      />

      {/* Star */}
      <Path
        d="M50 20 L52 25 L58 25 L53 29 L55 35 L50 31 L45 35 L47 29 L42 25 L48 25 Z"
        fill="#c4b46a"
      />
    </Svg>
  );
};

// =====================================================
// STUDENT PROFILE SVG ICON
// =====================================================

const StudentProfileIcon = () => {
  return (
    <Svg width="58" height="58" viewBox="0 0 100 100">
      {/* Background */}
      <Circle
        cx="50"
        cy="50"
        r="47"
        fill="#f1f5f9"
        stroke="#172554"
        strokeWidth="3"
      />

      {/* Head */}
      <Circle
        cx="50"
        cy="35"
        r="16"
        fill="#94a3b8"
      />

      {/* Body */}
      <Path
        d="M22 82
           C24 62 34 53 50 53
           C66 53 76 62 78 82 Z"
        fill="#64748b"
      />

      {/* Shirt detail */}
      <Path
        d="M39 57 L50 69 L61 57"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
      />
    </Svg>
  );
};

// =====================================================
// PDF DOCUMENT
// =====================================================

const MarkSheetDocument = () => {
  return (
    <Document
      title={`Marksheet - ${student.studentName}`}
      author="School Management System"
      subject="Student Academic Marksheet"
    >
      <Page size="A4" style={styles.page}>

        <View style={styles.documentBorder}>

          {/* =================================================
              HEADER
          ================================================= */}

          <View style={styles.header}>

            {/* LEFT - BOARD LOGO */}
            <View style={styles.logoContainer}>
              <DummyBoardLogo />
            </View>

            {/* CENTER - BOARD INFORMATION */}
            <View style={styles.headerCenter}>
              <Text style={styles.boardName}>
                BOARD OF SECONDARY EDUCATION
              </Text>

              <Text style={styles.boardSubtitle}>
                SECONDARY SCHOOL EXAMINATION
              </Text>

              <Text style={styles.boardLocation}>
                EDUCATION BOARD • ACADEMIC SESSION {student.academicYear}
              </Text>

              <Text style={styles.title}>
                STATEMENT OF MARKS
              </Text>
            </View>

            {/* RIGHT - STUDENT IMAGE */}
            <View style={styles.studentPhotoContainer}>
              <StudentProfileIcon />
            </View>

          </View>

          {/* =================================================
              SCHOOL INFORMATION
          ================================================= */}

          <View style={styles.schoolSection}>

            <View style={styles.schoolInfo}>
              <Text style={styles.schoolName}>
                {student.schoolName}
              </Text>

              <Text style={styles.smallText}>
                Academic Session: {student.academicYear}
              </Text>

              <Text style={styles.smallText}>
                Class: {student.className}{"   "}
                Section: {student.section}
              </Text>
            </View>

            <View style={styles.schoolCodeBox}>
              <Text style={styles.smallText}>
                SCHOOL CODE
              </Text>

              <Text style={styles.boldSmallText}>
                {student.schoolCode}
              </Text>
            </View>

          </View>

          {/* =================================================
              STUDENT DETAILS
          ================================================= */}

          <View style={styles.detailsBox}>

            {/* Row 1 */}
            <View style={styles.detailRow}>

              <View
                style={[
                  styles.detailCell,
                  styles.detailHalf,
                ]}
              >
                <Text style={styles.detailLabel}>
                  STUDENT NAME
                </Text>

                <Text style={styles.detailValue}>
                  {student.studentName}
                </Text>
              </View>

              <View
                style={[
                  styles.detailCell,
                  styles.detailHalf,
                  { borderRight: 0 },
                ]}
              >
                <Text style={styles.detailLabel}>
                  ROLL NUMBER
                </Text>

                <Text style={styles.detailValue}>
                  {student.rollNo}
                </Text>
              </View>

            </View>

            {/* Row 2 */}
            <View style={styles.detailRow}>

              <View
                style={[
                  styles.detailCell,
                  styles.detailHalf,
                ]}
              >
                <Text style={styles.detailLabel}>
                  FATHER'S NAME
                </Text>

                <Text style={styles.detailValue}>
                  {student.fatherName}
                </Text>
              </View>

              <View
                style={[
                  styles.detailCell,
                  styles.detailHalf,
                  { borderRight: 0 },
                ]}
              >
                <Text style={styles.detailLabel}>
                  MOTHER'S NAME
                </Text>

                <Text style={styles.detailValue}>
                  {student.motherName}
                </Text>
              </View>

            </View>

            {/* Row 3 */}
            <View style={styles.detailLastRow}>

              <View
                style={[
                  styles.detailCell,
                  styles.detailQuarter,
                ]}
              >
                <Text style={styles.detailLabel}>
                  DATE OF BIRTH
                </Text>

                <Text style={styles.detailValue}>
                  {student.dateOfBirth}
                </Text>
              </View>

              <View
                style={[
                  styles.detailCell,
                  styles.detailQuarter,
                ]}
              >
                <Text style={styles.detailLabel}>
                  REGISTRATION NO.
                </Text>

                <Text style={styles.detailValue}>
                  {student.registrationNo}
                </Text>
              </View>

              <View
                style={[
                  styles.detailCell,
                  styles.detailQuarter,
                ]}
              >
                <Text style={styles.detailLabel}>
                  CLASS
                </Text>

                <Text style={styles.detailValue}>
                  {student.className}
                </Text>
              </View>

              <View
                style={[
                  styles.detailCellLast,
                  styles.detailQuarter,
                ]}
              >
                <Text style={styles.detailLabel}>
                  SECTION
                </Text>

                <Text style={styles.detailValue}>
                  {student.section}
                </Text>
              </View>

            </View>

          </View>

          {/* =================================================
              MARKS TABLE
          ================================================= */}

          <Text style={styles.sectionTitle}>
            SUBJECT-WISE PERFORMANCE
          </Text>

          <View style={styles.table}>

            {/* Header */}
            <View style={styles.tableHeader}>

              <View style={[styles.tableCell, styles.codeCol]}>
                <Text style={styles.tableHeaderText}>
                  CODE
                </Text>
              </View>

              <View style={[styles.tableCell, styles.subjectCol]}>
                <Text style={styles.tableHeaderText}>
                  SUBJECT
                </Text>
              </View>

              <View style={[styles.tableCell, styles.marksCol]}>
                <Text style={styles.tableHeaderText}>
                  THEORY
                </Text>
              </View>

              <View style={[styles.tableCell, styles.marksCol]}>
                <Text style={styles.tableHeaderText}>
                  PRACTICAL
                </Text>
              </View>

              <View style={[styles.tableCell, styles.totalCol]}>
                <Text style={styles.tableHeaderText}>
                  TOTAL
                </Text>
              </View>

              <View style={[styles.tableCellLast, styles.gradeCol]}>
                <Text style={styles.tableHeaderText}>
                  GRADE
                </Text>
              </View>

            </View>

            {/* Subjects */}
            {subjects.map((subject, index) => {

              const isLast =
                index === subjects.length - 1;

              return (
                <View
                  key={subject.code}
                  style={
                    isLast
                      ? styles.tableLastRow
                      : styles.tableRow
                  }
                >

                  <View
                    style={[
                      styles.tableCell,
                      styles.codeCol,
                    ]}
                  >
                    <Text style={styles.tableText}>
                      {subject.code}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.tableCell,
                      styles.subjectCol,
                    ]}
                  >
                    <Text style={styles.subjectText}>
                      {subject.name}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.tableCell,
                      styles.marksCol,
                    ]}
                  >
                    <Text style={styles.tableText}>
                      {subject.theory}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.tableCell,
                      styles.marksCol,
                    ]}
                  >
                    <Text style={styles.tableText}>
                      {subject.practical}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.tableCell,
                      styles.totalCol,
                    ]}
                  >
                    <Text style={styles.tableText}>
                      {subject.total}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.tableCellLast,
                      styles.gradeCol,
                    ]}
                  >
                    <Text style={styles.tableText}>
                      {subject.grade}
                    </Text>
                  </View>

                </View>
              );
            })}

          </View>

          {/* =================================================
              RESULT SUMMARY
          ================================================= */}

          <Text style={styles.sectionTitle}>
            RESULT SUMMARY
          </Text>

          <View style={styles.summaryBox}>

            {/* Summary row 1 */}
            <View style={styles.summaryRow}>

              <View style={styles.summaryCell}>
                <Text style={styles.summaryLabel}>
                  MAXIMUM MARKS
                </Text>

                <Text style={styles.summaryValue}>
                  {maximumMarks}
                </Text>
              </View>

              <View style={styles.summaryCell}>
                <Text style={styles.summaryLabel}>
                  MARKS OBTAINED
                </Text>

                <Text style={styles.summaryValue}>
                  {totalMarks}
                </Text>
              </View>

              <View style={styles.summaryCell}>
                <Text style={styles.summaryLabel}>
                  PERCENTAGE
                </Text>

                <Text style={styles.summaryValue}>
                  {percentage}%
                </Text>
              </View>

              <View style={styles.summaryCellLast}>
                <Text style={styles.summaryLabel}>
                  RESULT
                </Text>

                <Text style={styles.summaryValue}>
                  PASS
                </Text>
              </View>

            </View>

            {/* Summary row 2 */}
            <View style={styles.summaryLastRow}>

              <View style={styles.summaryCell}>
                <Text style={styles.summaryLabel}>
                  DIVISION
                </Text>

                <Text style={styles.summaryValue}>
                  FIRST
                </Text>
              </View>

              <View style={styles.summaryCell}>
                <Text style={styles.summaryLabel}>
                  OVERALL GRADE
                </Text>

                <Text style={styles.summaryValue}>
                  A1
                </Text>
              </View>

              <View style={styles.summaryCell}>
                <Text style={styles.summaryLabel}>
                  SUBJECTS
                </Text>

                <Text style={styles.summaryValue}>
                  {subjects.length}
                </Text>
              </View>

              <View style={styles.summaryCellLast}>
                <Text style={styles.summaryLabel}>
                  SESSION
                </Text>

                <Text style={styles.summaryValue}>
                  {student.academicYear}
                </Text>
              </View>

            </View>

          </View>

          {/* =================================================
              FINAL RESULT
          ================================================= */}

          <View style={styles.resultBox}>

            <View style={styles.resultRow}>

              <Text style={styles.resultTitle}>
                FINAL RESULT
              </Text>

              <Text style={styles.resultPass}>
                PASS
              </Text>

              <Text style={styles.resultMessage}>
                Congratulations on your academic performance.
              </Text>

            </View>

          </View>

          {/* =================================================
              FOOTER
          ================================================= */}

          <View style={styles.footer}>

            <Text style={styles.declaration}>
              This is a computer-generated marksheet issued by
              the institution. The information contained herein
              is based on the academic records maintained by
              the school and is subject to verification by the
              issuing authority.
            </Text>

            <View style={styles.signatureRow}>

              <View style={styles.signature}>
                <View style={styles.signatureLine} />

                <Text style={styles.signatureText}>
                  CLASS TEACHER
                </Text>
              </View>

              <View style={styles.signature}>
                <View style={styles.signatureLine} />

                <Text style={styles.signatureText}>
                  EXAMINATION IN-CHARGE
                </Text>
              </View>

              <View style={styles.signature}>
                <View style={styles.signatureLine} />

                <Text style={styles.signatureText}>
                  PRINCIPAL
                </Text>
              </View>

            </View>

            <Text style={styles.footerNote}>
              Generated electronically • This document is valid
              subject to verification by the issuing authority.
            </Text>

          </View>

        </View>

        {/* PAGE NUMBER */}
        <Text
          fixed
          style={{
            position: "absolute",
            bottom: 10,
            right: 25,
            fontSize: 6,
            color: "#9ca3af",
          }}
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} of ${totalPages}`
          }
        />

      </Page>
    </Document>
  );
};

// =====================================================
// DOWNLOAD COMPONENT
// =====================================================

const MarkSheetFormatDownloadPdf = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 15px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "#ffffff",
          borderRadius: "12px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 10px 35px rgba(15, 23, 42, 0.10)",
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: "#e8eefc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 15px",
            color: "#172554",
            fontSize: 30,
          }}
        >
          🎓
        </div>

        <h2
          style={{
            margin: "0 0 8px",
            color: "#172554",
          }}
        >
          Student Marksheet
        </h2>

        <p
          style={{
            margin: "0 0 25px",
            color: "#64748b",
            fontSize: 14,
          }}
        >
          Generate A4 student marksheet PDF
        </p>

        <PDFDownloadLink
          document={<MarkSheetDocument />}
          fileName={`Marksheet-${student.rollNo}.pdf`}
          style={{
            display: "inline-block",
            background: "#172554",
            color: "#ffffff",
            padding: "12px 25px",
            borderRadius: "7px",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {({ loading }) =>
            loading
              ? "Generating PDF..."
              : "Download Marksheet PDF"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default MarkSheetFormatDownloadPdf;
// ```
