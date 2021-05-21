import { Document, Page, View, Image, Text, Link } from '@react-pdf/renderer';
import styles from './pdf-doc.style';
const BillboardPdfDetails = ({ name, location, status, amount }) => {
  return (
    <Document title="billboard summary">
      <Page style={styles.body}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            src="https://res.cloudinary.com/adesanza/image/upload/v1621580639/zabuni/Group_15_cuz46b.png"
          />
          <Text style={styles.title}>billboard details</Text>
        </View>
        <Image
          style={styles.image}
          src="https://res.cloudinary.com/adesanza/image/upload/v1621580225/zabuni/March17.2017_pczaxm.jpg"
        />
        <Text style={styles.content}>billboard name: {name}</Text>
        <Text style={styles.content}>billboard location: {location}</Text>
        <Text style={styles.content}>billboard status: {status}</Text>
        <Text style={styles.amount}>amount: {amount}</Text>
        <Text style={styles.greet}>Have a nice day</Text>
        <Text style={styles.courtsey}>Optimum exposures team</Text>
        <View>
          <Text style={styles.phone}>+234 80 986 44421</Text>
          <Link style={styles.website} src="https://oe-zabuni.herokuapp.com/">
            optimumexposures.com
          </Link>
        </View>
        <View style={styles.footer}>
          <Text>Need Help?Visit our Help Centre</Text>
          <Text>
            Tracking Number: <Text>{17190751}</Text>
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default BillboardPdfDetails;
