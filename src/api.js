import db from './firebase';
import { getAuth } from 'firebase/auth';
import {
  collection,
  doc,
  onSnapshot,
  increment,
  writeBatch,
  getDoc,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';

export const getDefinitionFromDictionaryApi = (word) => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`).then((r) => r.json());
};

export const saveWord = async (word) => {
  const userID = getAuth().currentUser.uid;
  const userRef = doc(db, 'users', userID);
  const wordRef = doc(db, 'words', word.word);
  const counterRef = doc(db, 'words', '--counter--');
  const wordsCount = await getDoc(counterRef).then((snap) => snap.get('wordsCount') || 0);
  const wordSnap = await getDoc(wordRef);

  const batch = writeBatch(db);

  if (!wordSnap.exists()) {
    batch.set(counterRef, { wordsCount: increment(1) }, { merge: true });
    batch.set(wordRef, { en: word, id: wordsCount });
  }
  batch.set(doc(db, `users/${userID}/words`, word.word), {
    ref: wordRef,
    timestamp: serverTimestamp(),
  });
  batch.set(doc(db, `words/${word.word}/users`, userID), {
    ref: userRef,
  });
  batch.commit();
};

export const updateWordList = (userID, cb) => {
  const q = query(collection(db, `users/${userID}/words`), orderBy('timestamp', 'desc'));
  return onSnapshot(q, async (querySnapshot) => {
    const words = await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const wordRef = doc.get('ref');
        const word = await getDoc(wordRef);
        return word.data();
      })
    );
    cb(words);
  });
};
