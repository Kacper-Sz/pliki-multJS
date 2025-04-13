
import { openDB } from 'idb';

 const createDB = async () => {
    const db = await openDB('mytasks', 1, {
        upgrade(db, oldVersion, newVersion, transaction) {
            switch( oldVersion ) {
                case 0:
                    break;
                case 1:
                    const store = db.createObjectStore('tasks', {
                        keyPath: 'id',
                    });
                    store.createIndex('content', 'content')
                    break;
                
            }
        }
    });
 }
 
 

 const readData = async() => {
    const tx = await db.transaction('mytasks', 'readonly');
    const store = tx.objectStore('tasks');
    const value = await store.get([id]);
    await value;
 }



 const saveData = async (task) => {
    const tx = await db.transaction('mytasks', 'readwrite');
    const store = tx.objectStore('tasks');
    store.add(task);
    await tx.done;
 }



 export { createDB, readData, saveData}










