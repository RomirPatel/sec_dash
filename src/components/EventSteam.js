import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Badge } from 'react-bootstrap';

const EventStream = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await axios.get('http://localhost:3001/api/events');
            setEvents(response.data);
        };
        fetchEvents();
        const interval = setInterval(fetchEvents, 60000); // Fetch new data every minute
        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    const getSeverityBadge = (severity) => {
        switch (severity) {
            case 'low':
                return <Badge bg="success" className="rounded-pill">Low</Badge>;
            case 'medium':
                return <Badge bg="warning" className="rounded-pill text-dark">Medium</Badge>;
            case 'high':
                return <Badge bg="danger" className="rounded-pill">High</Badge>;
            default:
                return <Badge bg="secondary" className="rounded-pill">Unknown</Badge>;
        }
    };

    return (
        <Table striped bordered hover variant="dark" className="text-center m-0">
            <thead>
                <tr>
                    <th>Timestamp</th>
                    <th>Source</th>
                    <th>Type</th>
                    <th>Severity</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {events.map((event, index) => (
                    <tr key={index}>
                        <td>{new Date(event.timestamp).toLocaleString()}</td>
                        <td>{event.source}</td>
                        <td>{event.type}</td>
                        <td>{getSeverityBadge(event.severity)}</td>
                        <td>{event.description}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default EventStream;
