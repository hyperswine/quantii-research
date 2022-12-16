import Card from 'react-bootstrap/Card'
import { motion } from "framer-motion"

export default function InfoCard(title, text, body) {
    <Card style={{ padding: '1rem', display: "flex", justifyContent: "space-between" }}>
        <motion.div layout
            whileHover={{ scale: 1.025, boxShadow: '2px 2px #9E9E9E' }}
            whileTap={{ scale: 1.025 }}
            style={{ marginBottom: '1rem' }}
        >
            <Card style={{ padding: '1rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    {body}
                </Card.Body>
            </Card>
        </motion.div>
    </Card>
}
