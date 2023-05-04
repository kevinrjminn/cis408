const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

// Database connection configuration
const uri = 'mongodb://localhost:27017';

// Function to fetch sensor data from the database
const getSensorData = async () => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('sensor_data_db');
        const collection = db.collection('sensor_data');
        const results = await collection.find().toArray();
        return results;
    } catch (error) {
        console.error('Error', error);
    } finally {
        await client.close();
    }
};

// Function to convert sensor data to XML format
const sensorDataToXML = (sensorData) => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<sensor_data>\n';

    sensorData.forEach((row) => {
        xml += '  <record>\n';
        xml += `    <date>${row.date}</date>\n`;
        xml += `    <time>${row.time}</time>\n`;
        xml += `    <humidity>${row.humidity}</humidity>\n`;
        xml += `    <ph_level>${row.ph_level}</ph_level>\n`;
        xml += `    <nutrients>${row.nutrients}</nutrients>\n`;
        xml += `    <temperature>${row.temperature}</temperature>\n`;
        xml += '  </record>\n';
    });

    xml += '</sensor_data>';

    return xml;
};

// Function to save sensor data to an XML file
const saveSensorDataToXMLFile = async (filename) => {
    try {
        const sensorData = await getSensorData();
        const xmlContent = sensorDataToXML(sensorData);
        fs.writeFileSync(filename, xmlContent);
        console.log(`Sensor data saved to ${filename}`);
    } catch (error) {
        console.error('Error', error);
    }
};

// Usage example
saveSensorDataToXMLFile('sensor_data.xml');
