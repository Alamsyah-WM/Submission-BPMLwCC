const { Firestore } = require('@google-cloud/firestore');

async function getData() {
    const db = new Firestore();
    const predictCollection = db.collection('predictions');
    
    const snapshot = await predictCollection.get();
    
    const allData = snapshot.docs.map(doc => ({
        id: doc.id,
        history: doc.data()
    }));
    
    return allData;
}

module.exports = getData;
