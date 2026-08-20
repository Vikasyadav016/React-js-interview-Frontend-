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

const employee = {
  name: "AMIT SHARMA",
  employeeId: "EMP-2026-00421",
  designation: "Senior Software Engineer",
  department: "Technology",
  joiningDate: "12 April 2023",
  bloodGroup: "O+",
  phone: "+91 98765 12345",
  email: "amit.sharma@example.com",
  office: "New Delhi Office",
  validUntil: "31 March 2027",
  emergencyContact: "+91 98765 99999",
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

  header: {
    height: 43,
    backgroundColor: "#111827",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  companyLogo: {
    width: 28,
    height: 28,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  companyLogoText: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#111827",
  },

  companyName: {
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "bold",
  },

  companySub: {
    color: "#cbd5e1",
    fontSize: 5.5,
    marginTop: 2,
  },

  cardTitle: {
    position: "absolute",
    right: 10,
    top: 16,
    fontSize: 6,
    color: "#ffffff",
    fontWeight: "bold",
  },

  body: {
    padding: 9,
    flexDirection: "row",
  },

  photoContainer: {
    width: 54,
    height: 66,
    borderWidth: 1,
    borderColor: "#94a3b8",
    backgroundColor: "#f8fafc",
    marginRight: 9,
    alignItems: "center",
    justifyContent: "center",
  },

  details: {
    flex: 1,
  },

  name: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },

  field: {
    flexDirection: "row",
    marginBottom: 3,
  },

  label: {
    width: 52,
    fontSize: 5.5,
    color: "#64748b",
  },

  value: {
    flex: 1,
    fontSize: 6.5,
    color: "#1e293b",
    fontWeight: "bold",
  },

  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 21,
    backgroundColor: "#f1f5f9",
    borderTopWidth: 1,
    borderTopColor: "#cbd5e1",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bottomText: {
    fontSize: 5.5,
    color: "#475569",
  },

  /* BACK */

  backHeader: {
    height: 28,
    backgroundColor: "#111827",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  backTitle: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#ffffff",
  },

  backBody: {
    padding: 9,
  },

  policy: {
    fontSize: 5.7,
    lineHeight: 1.45,
    color: "#334155",
    marginBottom: 3,
  },

  contact: {
    marginTop: 5,
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    padding: 6,
  },

  contactTitle: {
    fontSize: 6,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 3,
  },

  contactText: {
    fontSize: 5.5,
    color: "#475569",
    marginBottom: 2,
  },

  backFooter: {
    position: "absolute",
    bottom: 7,
    left: 9,
    right: 9,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  signature: {
    width: 70,
    borderTopWidth: 1,
    borderTopColor: "#64748b",
    textAlign: "center",
    paddingTop: 2,
    fontSize: 5,
  },

  validity: {
    fontSize: 5.5,
    color: "#475569",
  },
});


function EmployeeProfileSVG() {
  return (
    <Svg width="54" height="66" viewBox="0 0 54 66">

      <Rect
        width="54"
        height="66"
        fill="#f8fafc"
      />

      <Circle
        cx="27"
        cy="22"
        r="11"
        fill="#64748b"
      />

      <Path
        d="M9 61 C10 43 18 36 27 36 C36 36 44 43 45 61"
        fill="#64748b"
      />

    </Svg>
  );
}


function EmployeeFront() {
  return (
    <Page
      size={[242.65, 153.03]}
      style={styles.page}
    >

      <View style={styles.card}>

        <View style={styles.header}>

          <View style={styles.companyLogo}>
            <Text style={styles.companyLogoText}>
              ACME
            </Text>
          </View>

          <View>

            <Text style={styles.companyName}>
              ACME TECHNOLOGIES PRIVATE LIMITED
            </Text>

            <Text style={styles.companySub}>
              Technology • Innovation • Services
            </Text>

          </View>

          {/* <Text style={styles.cardTitle}>
            EMPLOYEE ID CARD
          </Text> */}

        </View>

        <View style={styles.body}>

          <View style={styles.photoContainer}>
            <EmployeeProfileSVG />
          </View>

          <View style={styles.details}>

            <Text style={styles.name}>
              {employee.name}
            </Text>

            <View style={styles.field}>
              <Text style={styles.label}>
                Employee ID
              </Text>

              <Text style={styles.value}>
                {employee.employeeId}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>
                Designation
              </Text>

              <Text style={styles.value}>
                {employee.designation}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>
                Department
              </Text>

              <Text style={styles.value}>
                {employee.department}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>
                Joined
              </Text>

              <Text style={styles.value}>
                {employee.joiningDate}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>
                Blood Group
              </Text>

              <Text style={styles.value}>
                {employee.bloodGroup}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>
                Office
              </Text>

              <Text style={styles.value}>
                {employee.office}
              </Text>
            </View>

          </View>

        </View>

        <View style={styles.bottomBar}>

          <Text style={styles.bottomText}>
            VALID UNTIL: {employee.validUntil}
          </Text>

          <Text style={styles.bottomText}>
            {employee.employeeId}
          </Text>

        </View>

      </View>

    </Page>
  );
}


function EmployeeBack() {
  return (
    <Page
      size={[242.65, 153.03]}
      style={styles.page}
    >

      <View style={styles.card}>

        <View style={styles.backHeader}>
          <Text style={styles.backTitle}>
            EMPLOYEE ID CARD — TERMS & CONTACT
          </Text>
        </View>

        <View style={styles.backBody}>

          <Text style={styles.policy}>
            1. This employee identity card remains the property of the
            organization and must be carried while on company premises.
          </Text>

          <Text style={styles.policy}>
            2. This card is personal and non-transferable. It must not be
            lent, altered, copied or reproduced without authorization.
          </Text>

          <Text style={styles.policy}>
            3. Lost or stolen cards must be reported immediately to the
            organization/security department.
          </Text>

          <Text style={styles.policy}>
            4. The card must be surrendered upon separation from the
            organization or whenever requested by an authorized officer.
          </Text>

          <Text style={styles.policy}>
            5. Access privileges associated with this card are subject to
            company security policies.
          </Text>

          <View style={styles.contact}>

            <Text style={styles.contactTitle}>
              EMPLOYEE CONTACT
            </Text>

            <Text style={styles.contactText}>
              Phone: {employee.phone}
            </Text>

            <Text style={styles.contactText}>
              Email: {employee.email}
            </Text>

            <Text style={styles.contactText}>
              Emergency: {employee.emergencyContact}
            </Text>

          </View>

        </View>

        <View style={styles.backFooter}>

          <Text style={styles.signature}>
            Authorized Signature
          </Text>

          <Text style={styles.validity}>
            Valid: {employee.validUntil}
          </Text>

        </View>

      </View>

    </Page>
  );
}


export function EmployeeICardPDF() {
  return (
    <Document
      title={`Employee ID Card - ${employee.employeeId}`}
      author="Organization"
    >
      <EmployeeFront />
      <EmployeeBack />
    </Document>
  );
}


export default function EmployeeICard() {
  return (
    <PDFDownloadLink
      document={<EmployeeICardPDF />}
      fileName={`Employee_ID_${employee.employeeId}.pdf`}
    >
      {({ loading }) => (
        <button disabled={loading}>
          {loading
            ? "Generating..."
            : "Download Employee ID Card"}
        </button>
      )}
    </PDFDownloadLink>
  );
}