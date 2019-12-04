// const functions = require('firebase-functions');
// var admin = require("firebase-admin");
// var serviceAccount = require("../serviceAccountKey.json");
// const collectionKey = "rooms"; //name of the collection
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://midd-housing-database.firebaseio.com"
// });
// const firestore = admin.firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings);
//
// export function search_by_building (building_ID) {
//
//     var query = firestore.collection("rooms").where("Building ID", "==", building_ID)
//                 .get()
//                 .then(function(querySnapshot) {
//                     querySnapshot.forEach(function(doc) {
//                         // doc.data() is never undefined for query doc snapshots
//                         console.log(doc.id, " => ", doc.data());
//                     });
//                 })
//                 .catch(function(error) {
//                     console.log("Error getting documents: ", error);
//                 });
//
//     return query;
// }
