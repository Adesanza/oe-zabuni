import { Document, Page, Text } from '@react-pdf/renderer';
import styles from './pdf-doc.style';
const BillboardPdfDetails = ({name, location, status, amount}) => {
    return (
        <Document title="billboard summary">
            <Page style={styles.body}>
                <Text style={styles.header}>
                    billboard summary
                </Text>
                <Text style={styles.content}>
                    billboard name: {name}
                </Text>
                <Text style={styles.content}>
                    billboard location: {location}
                </Text>
                <Text style={styles.content}>
                    billboard status: {status}
                </Text>
                <Text style={styles.content}>
                    billboard amount: {amount}
                </Text>
            </Page>
    </Document>
    )
    
}

export default BillboardPdfDetails;